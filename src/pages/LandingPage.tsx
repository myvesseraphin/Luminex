import React from 'react';
import { Hero } from '../components/Hero';
import { SolutionsGrid } from '../components/SolutionsGrid';
import { FeaturesShowcase } from '../components/FeaturesShowcase';
import { StatsSection } from '../components/StatsSection';
import { TeamSection } from '../components/TeamSection';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
export function LandingPage() {
  return <div className="w-full min-h-screen bg-white">
      <Hero />
      <SolutionsGrid />
      <FeaturesShowcase />
      <StatsSection />
      <TeamSection />

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6B35' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Power Your Future?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join the solar revolution in Rwanda. Start optimizing your energy
              today with Luminex.
            </p>
            <a href="https://luminextech.base44.app" className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300">
              Get Started Now
              <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>;
}