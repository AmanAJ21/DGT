"use client"
import { useEffect, useRef, useState } from 'react';
import { Renderer, Program, Mesh, Color, Triangle } from 'ogl';
import '@/public/css/Dither.css';

const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `#version 300 es
precision highp float;

uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec2 uResolution;
uniform float uScale;
uniform float uSpeed;

out vec4 fragColor;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

mat2 rotate2d(float angle) {
  return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  vec2 pos = uv * uScale;
  
  float t = uTime * uSpeed;
  pos = rotate2d(t * 0.1) * pos;
  float n = noise(pos + t);
  n += 0.5 * noise(pos * 2.0 - t * 0.5);
  n += 0.25 * noise(pos * 4.0 + t * 0.3);
  n /= 1.75;
  
  vec2 ditherPos = gl_FragCoord.xy * 0.5;
  float dither = hash(ditherPos) * 0.15;
  
  float threshold = n + dither;
  vec3 color = mix(uColor1, uColor2, smoothstep(0.3, 0.7, threshold));
  
  vec2 center = uv - 0.5;
  float vignette = 1.0 - dot(center, center) * 0.8;
  
  fragColor = vec4(color * vignette, 0.6);
}
`;

interface DitherProps {
  color1?: string;
  color2?: string;
  scale?: number;
  speed?: number;
}

export default function Dither(props: DitherProps) {
  const { 
    color1 = '#3A29FF', 
    color2 = '#FF94B4', 
    scale = 3.0,
    speed = 0.5 
  } = props;
  
  const propsRef = useRef<DitherProps>(props);
  propsRef.current = props;
  const ctnDom = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Detect mobile and visibility for performance optimization
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Pause animation when tab is not visible
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const ctn = ctnDom.current;
    if (!ctn) return;

    // Performance optimization: reduce quality on mobile
    const pixelRatio = isMobile ? Math.min(window.devicePixelRatio, 1.5) : window.devicePixelRatio;
    
    const renderer = new Renderer({
      alpha: true,
      premultipliedAlpha: true,
      antialias: !isMobile, // Disable antialiasing on mobile for performance
      dpr: pixelRatio
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.canvas.style.backgroundColor = 'transparent';

    let program: Program | undefined;

    function resize() {
      if (!ctn) return;
      const width = ctn.offsetWidth;
      const height = ctn.offsetHeight;
      renderer.setSize(width, height);
      if (program) {
        program.uniforms.uResolution.value = [width, height];
      }
    }
    window.addEventListener('resize', resize);

    const geometry = new Triangle(gl);
    if (geometry.attributes.uv) {
      delete geometry.attributes.uv;
    }

    // Cache Color objects to avoid creating new ones every frame
    const c1 = new Color(color1);
    const c2 = new Color(color2);
    let cachedColor1 = color1;
    let cachedColor2 = color2;

    program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uColor1: { value: [c1.r, c1.g, c1.b] },
        uColor2: { value: [c2.r, c2.g, c2.b] },
        uResolution: { value: [ctn.offsetWidth, ctn.offsetHeight] },
        uScale: { value: scale },
        uSpeed: { value: speed }
      }
    });

    const mesh = new Mesh(gl, { geometry, program });
    ctn.appendChild(gl.canvas);

    // Frame rate limiting for performance
    const maxFPS = isMobile ? 30 : 60;
    const frameTime = 1000 / maxFPS;
    let lastFrameTime = 0;
    let animateId = 0;
    
    const update = (t: number) => {
      animateId = requestAnimationFrame(update);
      
      // Skip frame if not enough time has passed or tab is not visible
      if (!isVisible || (t - lastFrameTime < frameTime)) {
        return;
      }
      lastFrameTime = t;
      
      if (program) {
        program.uniforms.uTime.value = t * 0.001;
        
        const currentProps = propsRef.current;
        
        // Only update colors if they changed (avoid creating new Color objects)
        if (currentProps.color1 !== cachedColor1) {
          cachedColor1 = currentProps.color1 ?? color1;
          const newC1 = new Color(cachedColor1);
          program.uniforms.uColor1.value = [newC1.r, newC1.g, newC1.b];
        }
        
        if (currentProps.color2 !== cachedColor2) {
          cachedColor2 = currentProps.color2 ?? color2;
          const newC2 = new Color(cachedColor2);
          program.uniforms.uColor2.value = [newC2.r, newC2.g, newC2.b];
        }
        
        program.uniforms.uScale.value = currentProps.scale ?? scale;
        program.uniforms.uSpeed.value = currentProps.speed ?? speed;
        
        renderer.render({ scene: mesh });
      }
    };
    
    if (isVisible) {
      animateId = requestAnimationFrame(update);
    }

    resize();

    return () => {
      cancelAnimationFrame(animateId);
      window.removeEventListener('resize', resize);
      if (ctn && gl.canvas.parentNode === ctn) {
        ctn.removeChild(gl.canvas);
      }
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [color1, color2, scale, speed, isMobile, isVisible]);

  return <div ref={ctnDom} className="dither-container" />;
}
