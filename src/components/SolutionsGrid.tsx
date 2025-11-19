import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {
  CloudSunIcon,
  DollarSignIcon,
  ZapIcon,
  HomeIcon,
  LeafIcon,
  FileTextIcon,
  SettingsIcon,
} from "lucide-react";

// --- Data ---
const solutions = [
  {
    icon: CloudSunIcon,
    title: "Weather-Smart Energy",
    description:
      "Real-time weather forecasts and solar output predictions. Get intelligent suggestions for energy storage and sharing.",
  },
  {
    icon: DollarSignIcon,
    title: "Maximize Savings",
    description:
      "Calculate long-term savings, discover government incentives, and join community solar projects to reduce costs.",
  },
  {
    icon: ZapIcon,
    title: "Grid Integration",
    description:
      "Seamlessly connect to the grid, earn rewards for contributing energy, and help balance community power needs.",
  },
  {
    icon: HomeIcon,
    title: "Space Optimization",
    description:
      "Use AR mapping to find the perfect panel placement. Join shared installations for maximum efficiency.",
  },
  {
    icon: LeafIcon,
    title: "Environmental Impact",
    description:
      "Track your carbon savings, get recycling reminders, and discover eco-friendly products for sustainable living.",
  },
  {
    icon: FileTextIcon,
    title: "Policy Updates",
    description:
      "Stay informed about subsidies, tariffs, and regulations. Track market trends for panels and batteries.",
  },
  {
    icon: SettingsIcon,
    title: "Performance Monitoring",
    description:
      "AI-powered diagnostics detect issues like dust or shading. Get maintenance suggestions to maximize efficiency.",
  },
];

// --- Card Component ---
function SolutionCard({ solution, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group p-8 rounded-3xl bg-white/70 backdrop-blur-xl shadow-[0px_8px_30px_rgba(0,0,0,0.08)] border border-orange-200 hover:shadow-[0px_12px_35px_rgba(0,0,0,0.15)] transition-all duration-300 relative overflow-hidden"
    >
      {/* Glow Accent */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-orange-500 to-orange-300 blur-3xl transition-all"></div>

      {/* Icon */}
      <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
        <solution.icon className="w-8 h-8 text-white" />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
        {solution.title}
      </h3>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed text-lg">
        {solution.description}
      </p>
    </motion.div>
  );
}

// --- Grid Section ---
export function SolutionsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 bg-gradient-to-b from-orange-50 via-white to-orange-50 relative overflow-hidden">
      {/* Soft Background Shapes */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-orange-300/30 blur-[120px] rounded-full opacity-60"></div>
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-orange-400/30 blur-[120px] rounded-full opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Seven Challenges,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
              One Solution
            </span>
          </h2>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Luminex tackles the biggest obstacles in solar energy adoption with
            intelligent and beautifully designed technology.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} solution={solution} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
