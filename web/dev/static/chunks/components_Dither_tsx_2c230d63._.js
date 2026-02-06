(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Dither.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dither
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Renderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Program.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$math$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/math/Color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/extras/Triangle.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
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
function Dither(props) {
    _s();
    const { color1 = '#3A29FF', color2 = '#FF94B4', scale = 3.0, speed = 0.5 } = props;
    const propsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(props);
    propsRef.current = props;
    const ctnDom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Detect mobile and visibility for performance optimization
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dither.useEffect": ()=>{
            const checkMobile = {
                "Dither.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth < 768);
                }
            }["Dither.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener('resize', checkMobile);
            // Pause animation when tab is not visible
            const handleVisibilityChange = {
                "Dither.useEffect.handleVisibilityChange": ()=>{
                    setIsVisible(!document.hidden);
                }
            }["Dither.useEffect.handleVisibilityChange"];
            document.addEventListener('visibilitychange', handleVisibilityChange);
            return ({
                "Dither.useEffect": ()=>{
                    window.removeEventListener('resize', checkMobile);
                    document.removeEventListener('visibilitychange', handleVisibilityChange);
                }
            })["Dither.useEffect"];
        }
    }["Dither.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dither.useEffect": ()=>{
            const ctn = ctnDom.current;
            if (!ctn) return;
            // Performance optimization: reduce quality on mobile
            const pixelRatio = isMobile ? Math.min(window.devicePixelRatio, 1.5) : window.devicePixelRatio;
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Renderer"]({
                alpha: true,
                premultipliedAlpha: true,
                antialias: !isMobile,
                dpr: pixelRatio
            });
            const gl = renderer.gl;
            gl.clearColor(0, 0, 0, 0);
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
            gl.canvas.style.backgroundColor = 'transparent';
            let program;
            function resize() {
                if (!ctn) return;
                const width = ctn.offsetWidth;
                const height = ctn.offsetHeight;
                renderer.setSize(width, height);
                if (program) {
                    program.uniforms.uResolution.value = [
                        width,
                        height
                    ];
                }
            }
            window.addEventListener('resize', resize);
            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Triangle"](gl);
            if (geometry.attributes.uv) {
                delete geometry.attributes.uv;
            }
            // Cache Color objects to avoid creating new ones every frame
            const c1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$math$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](color1);
            const c2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$math$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](color2);
            let cachedColor1 = color1;
            let cachedColor2 = color2;
            program = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Program"](gl, {
                vertex: VERT,
                fragment: FRAG,
                uniforms: {
                    uTime: {
                        value: 0
                    },
                    uColor1: {
                        value: [
                            c1.r,
                            c1.g,
                            c1.b
                        ]
                    },
                    uColor2: {
                        value: [
                            c2.r,
                            c2.g,
                            c2.b
                        ]
                    },
                    uResolution: {
                        value: [
                            ctn.offsetWidth,
                            ctn.offsetHeight
                        ]
                    },
                    uScale: {
                        value: scale
                    },
                    uSpeed: {
                        value: speed
                    }
                }
            });
            const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](gl, {
                geometry,
                program
            });
            ctn.appendChild(gl.canvas);
            // Frame rate limiting for performance
            const maxFPS = isMobile ? 30 : 60;
            const frameTime = 1000 / maxFPS;
            let lastFrameTime = 0;
            let animateId = 0;
            const update = {
                "Dither.useEffect.update": (t)=>{
                    animateId = requestAnimationFrame(update);
                    // Skip frame if not enough time has passed or tab is not visible
                    if (!isVisible || t - lastFrameTime < frameTime) {
                        return;
                    }
                    lastFrameTime = t;
                    if (program) {
                        program.uniforms.uTime.value = t * 0.001;
                        const currentProps = propsRef.current;
                        // Only update colors if they changed (avoid creating new Color objects)
                        if (currentProps.color1 !== cachedColor1) {
                            cachedColor1 = currentProps.color1 ?? color1;
                            const newC1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$math$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](cachedColor1);
                            program.uniforms.uColor1.value = [
                                newC1.r,
                                newC1.g,
                                newC1.b
                            ];
                        }
                        if (currentProps.color2 !== cachedColor2) {
                            cachedColor2 = currentProps.color2 ?? color2;
                            const newC2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$math$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](cachedColor2);
                            program.uniforms.uColor2.value = [
                                newC2.r,
                                newC2.g,
                                newC2.b
                            ];
                        }
                        program.uniforms.uScale.value = currentProps.scale ?? scale;
                        program.uniforms.uSpeed.value = currentProps.speed ?? speed;
                        renderer.render({
                            scene: mesh
                        });
                    }
                }
            }["Dither.useEffect.update"];
            if (isVisible) {
                animateId = requestAnimationFrame(update);
            }
            resize();
            return ({
                "Dither.useEffect": ()=>{
                    cancelAnimationFrame(animateId);
                    window.removeEventListener('resize', resize);
                    if (ctn && gl.canvas.parentNode === ctn) {
                        ctn.removeChild(gl.canvas);
                    }
                    gl.getExtension('WEBGL_lose_context')?.loseContext();
                }
            })["Dither.useEffect"];
        }
    }["Dither.useEffect"], [
        color1,
        color2,
        scale,
        speed,
        isMobile,
        isVisible
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ctnDom,
        className: "dither-container"
    }, void 0, false, {
        fileName: "[project]/components/Dither.tsx",
        lineNumber: 228,
        columnNumber: 10
    }, this);
}
_s(Dither, "evUjnko0fskkVCnbCqaYZWwwSO0=");
_c = Dither;
var _c;
__turbopack_context__.k.register(_c, "Dither");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Dither.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/Dither.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_Dither_tsx_2c230d63._.js.map