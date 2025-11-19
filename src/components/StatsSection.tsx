import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
const stats = [{
  value: '45%',
  label: 'Average Energy Savings',
  suffix: ''
}, {
  value: '2.5',
  label: 'Tons CO₂ Reduced Yearly',
  suffix: 't'
}, {
  value: '500+',
  label: 'Active Users in Rwanda',
  suffix: ''
}, {
  value: '98%',
  label: 'Customer Satisfaction',
  suffix: ''
}];
export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  return <section className="py-24 bg-gradient-to-br from-primary via-secondary to-solar relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div ref={ref} initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 30
      }} transition={{
        duration: 0.8
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Making an Impact Across Rwanda
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join hundreds of Rwandans who are already saving money and
            protecting the environment with Luminex.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => <motion.div key={index} initial={{
          opacity: 0,
          scale: 0.8
        }} animate={isInView ? {
          opacity: 1,
          scale: 1
        } : {
          opacity: 0,
          scale: 0.8
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="text-5xl md:text-6xl font-bold text-white mb-3">
                {stat.value}
                {stat.suffix && <span className="text-3xl">{stat.suffix}</span>}
              </div>
              <div className="text-lg text-white/90 font-medium">
                {stat.label}
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}