"use client"
import Dither from '@/components/Dither';
import ProfileCard from '@/components/ProfileCard';
import { FadeIn, SlideIn, ScaleIn } from '@/components/animations';

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Dither color1="#6366f1" color2="#8b5cf6" scale={4.0} speed={0.4} />

        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn duration={1000} delay={100} immediate={true}>
            <h1 className="text-6xl md:text-8xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                DGT Logistics
              </span>
            </h1>
          </FadeIn>

          <SlideIn direction="up" duration={800} delay={300} immediate={true}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Delivering excellence in logistics with innovation, reliability, and a commitment to your success
            </p>
          </SlideIn>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn duration={1000}>
            <div className="text-center mb-20">
              <div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <span className="text-blue-400 text-sm font-semibold tracking-wider">OUR VALUES</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                What Drives{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Us
                </span>
              </h2>
              <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                Our core values shape everything we do and guide our commitment to excellence
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SlideIn direction="left" duration={800} delay={200}>
              <div className="group relative bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/50 hover:scale-[1.02] p-10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20" />

                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 group-hover:scale-110 shadow-lg shadow-blue-500/50">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400">Reliability</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    We deliver on our promises with consistent, dependable service that you can count on every single time
                  </p>
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="right" duration={800} delay={400}>
              <div className="group relative bg-gradient-to-br from-green-600/10 to-teal-600/10 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-green-500/50 hover:scale-[1.02] p-10">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent opacity-0 group-hover:opacity-100" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20" />

                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 group-hover:scale-110 shadow-lg shadow-green-500/50">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-green-400">Customer First</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Your satisfaction is our top priority, driving every decision we make and action we take
                  </p>
                </div>
              </div>
            </SlideIn>

          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn duration={1000}>
            <div className="text-center mb-20">
              <div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <span className="text-blue-400 text-sm font-semibold tracking-wider">LEADERSHIP</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Meet Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Leader
                </span>
              </h2>
            </div>
          </FadeIn>

          <ScaleIn duration={1000} delay={300}>
            <div className="flex justify-center">
              <ProfileCard
                name="Pratik Jangra"
                title="Owner"
                avatarUrl="/person.png"
                miniAvatarUrl="/person.png"
                email="india@DGTLogistics.in"
                phone="+91 8007321910"
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                contactText="Contact"
                innerGradient={undefined}
                behindGlowColor={undefined}
                behindGlowSize={undefined}
                linkedin="https://www.linkedin.com/in/pratikjangra08/"
                onContactClick={() => window.location.href = '/contact'}
              />
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn duration={1000}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
          </FadeIn>
          <ScaleIn duration={800} delay={300}>
            <a
              href="/contact"
              className="group relative inline-block px-12 py-5 bg-white text-blue-600 rounded-xl font-bold text-lg overflow-hidden hover:scale-110 shadow-2xl"
            >
              <span className="relative z-10">Get Started Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100" />
            </a>
          </ScaleIn>
        </div>
      </section>
    </div>
  );
}
