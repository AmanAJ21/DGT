'use client';

import { useState } from 'react';
import Dither from '@/components/Dither';
import { FadeIn, SlideIn } from '@/components/animations';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Dither color1="#8b5cf6" color2="#3b82f6" scale={3.0} speed={0.4} />

        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn duration={1000} delay={100} immediate={true}>
            <h1 className="text-6xl md:text-8xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400">
                Get in Touch
              </span>
            </h1>
          </FadeIn>
          
          <SlideIn direction="up" duration={800} delay={300} immediate={true}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're here to help with all your logistics needs. Reach out and let's start a conversation
            </p>
          </SlideIn>
        </div>

      </section>

      {/* Contact Form Section */}
      <section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">

            {/* Contact Info */}
            <div className="space-y-6 max-w-2xl w-full">
              <FadeIn duration={1000} delay={200}>
                <div className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100" />

                  <div className="relative">
                    <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
                    
                    <div className="space-y-6">
                      <SlideIn direction="up" duration={600} delay={400}>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/50">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-semibold text-white mb-2">Email</h3>
                            <a href="mailto:india@dgtlogistics.in" className="text-gray-400 hover:text-purple-400 block">india@dgtlogistics.in</a>
                          </div>
                        </div>
                      </SlideIn>

                      <SlideIn direction="up" duration={600} delay={600}>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/50">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-semibold text-white mb-2">Phone</h3>
                            <a href="tel:+918007321910" className="text-gray-400 hover:text-blue-400 block">+91 8007321910</a>
                          </div>
                        </div>
                      </SlideIn>

                      <SlideIn direction="up" duration={600} delay={800}>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/50">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-semibold text-white mb-2">Business Hours</h3>
                            <p className="text-gray-400">Monday - Friday: 8:00 AM - 8:00 PM</p>
                            <p className="text-gray-400">Saturday - Sunday: 9:00 AM - 6:00 PM</p>
                          </div>
                        </div>
                      </SlideIn>
                    </div>
                  </div>
                </div>
              </FadeIn>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
