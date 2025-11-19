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
  return (
    <div className="w-full min-h-screen bg-white">
      <Hero />
      <SolutionsGrid />
      <FeaturesShowcase />
      <StatsSection />
      <TeamSection />

      {/* Final CTA Section – Clean White/Orange Style */}
      <section className="py-24 bg-white border-t border-orange-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-12 rounded-3xl shadow-lg bg-white border border-orange-200"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Ready to Power Your Future?
            </h2>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join the solar revolution in Rwanda. Start optimizing your energy today
              with Luminex.
            </p>

            <a
              href="https://luminextech.base44.app"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold text-lg shadow-lg transition-all"
            >
              Get Started Now
              <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}