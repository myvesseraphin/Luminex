import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, PlayIcon } from 'lucide-react';
export function Hero() {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="../solar.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: 'easeOut'
      }}>
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="inline-block mb-6 px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full">
            <span className="text-primary font-medium">
              Smart Energy from the Sun
            </span>
          </motion.div>

          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Power Your Future with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-solar">
              Luminex
            </span>
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.5
        }} className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Smart solar energy management for Rwanda. Save money, protect the
            environment, and optimize your energy—all from your phone.
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.7
        }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://luminextech.base44.app" className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Get Started
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
              <PlayIcon className="w-5 h-5" />
              Watch Demo
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1,
        delay: 1.2
      }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }} className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>;
}