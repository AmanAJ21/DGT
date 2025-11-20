'use client';

import Link from 'next/link';
import Dither from '@/components/Dither';
import { FadeIn, SlideIn, ScaleIn } from '@/components/animations';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Dither color1="#6366f1" color2="#ec4899" scale={4.0} speed={0.6} />

        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">

            {/* 404 Number with Gradient */}
            <FadeIn duration={1000} delay={100} immediate={true}>
              <h1 className="text-9xl md:text-[12rem] font-black mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
                  404
                </span>
              </h1>
            </FadeIn>
            
            <SlideIn direction="up" duration={800} delay={300} immediate={true}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Page Not Found
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Looks like this shipment got lost in transit
              </p>
            </SlideIn>
            
            {/* CTA Buttons */}
            <ScaleIn duration={800} delay={500} immediate={true}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                    <span className="relative z-10">Back to Home</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    Contact Support
                  </button>
                </Link>
              </div>
            </ScaleIn>

          </div>
        </div>

        {/* Decorative Icon */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center transform rotate-12 animate-float opacity-50">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
