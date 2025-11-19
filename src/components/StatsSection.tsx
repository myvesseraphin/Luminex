import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const stats = [
  { value: "45%", label: "Average Energy Savings" },
  { value: "2.5t", label: "Tons CO₂ Reduced Yearly" },
  { value: "500+", label: "Active Users in Rwanda" },
  { value: "98%", label: "Customer Satisfaction" },
];

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Left-aligned intro section */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
          {/* Left Text Block */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold">
              Proven Track Record of Excellence
            </h2>
            <p className="text-gray-600 text-lg max-w-md">
              Clear impact metrics showing how Luminex is transforming energy
              usage across Rwanda.
            </p>

            {/* Button */}
            <button className="px-5 py-2 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition">
              Learn More
            </button>
          </motion.div>

          {/* Main Highlighted Metric */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-left"
          >
            <h3 className="text-6xl md:text-7xl font-bold">$1.72B</h3>
            <p className="text-gray-600 text-lg mt-2">
              Long-term savings from smart energy adoption.
            </p>
          </motion.div>
        </div>

        {/* Stats Grid (clean + spaced like reference) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm"
            >
              <div className="text-4xl font-extrabold mb-1">{stat.value}</div>
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
