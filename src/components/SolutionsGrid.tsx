import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { CloudSunIcon, DollarSignIcon, ZapIcon, HomeIcon, LeafIcon, FileTextIcon, SettingsIcon } from 'lucide-react';
const solutions = [{
  icon: CloudSunIcon,
  title: 'Weather-Smart Energy',
  description: 'Real-time weather forecasts and solar output predictions. Get intelligent suggestions for energy storage and sharing.'
}, {
  icon: DollarSignIcon,
  title: 'Maximize Savings',
  description: 'Calculate long-term savings, discover government incentives, and join community solar projects to reduce costs.'
}, {
  icon: ZapIcon,
  title: 'Grid Integration',
  description: 'Seamlessly connect to the grid, earn rewards for contributing energy, and help balance community power needs.'
}, {
  icon: HomeIcon,
  title: 'Space Optimization',
  description: 'Use AR mapping to find the perfect panel placement. Join shared installations for maximum efficiency.'
}, {
  icon: LeafIcon,
  title: 'Environmental Impact',
  description: 'Track your carbon savings, get recycling reminders, and discover eco-friendly products for sustainable living.'
}, {
  icon: FileTextIcon,
  title: 'Policy Updates',
  description: 'Stay informed about subsidies, tariffs, and regulations. Track market trends for panels and batteries.'
}, {
  icon: SettingsIcon,
  title: 'Performance Monitoring',
  description: 'AI-powered diagnostics detect issues like dust or shading. Get maintenance suggestions to maximize efficiency.'
}];
function SolutionCard({
  solution,
  index
}: {
  solution: (typeof solutions)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  return <motion.div ref={ref} initial={{
    opacity: 0,
    y: 50
  }} animate={isInView ? {
    opacity: 1,
    y: 0
  } : {
    opacity: 0,
    y: 50
  }} transition={{
    duration: 0.6,
    delay: index * 0.1
  }} className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
      <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <solution.icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
      <p className="text-gray-600 leading-relaxed">{solution.description}</p>
    </motion.div>;
}
export function SolutionsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  return <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Seven Challenges,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {' '}
              One Solution
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Luminex tackles the biggest obstacles in solar energy adoption with
            intelligent, user-friendly features.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => <SolutionCard key={index} solution={solution} index={index} />)}
        </div>
      </div>
    </section>;
}