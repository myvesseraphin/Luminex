import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRightIcon,
  Menu,
  TrendingUp,
  Users,
  Zap,
  Star,
  Battery,
} from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const yImg = useTransform(scrollY, [0, 600], [0, -40]);

  return (
    <header className="relative w-full bg-gradient-to-b from-orange-50 to-white overflow-hidden">
      
      {/* ---------------- NAVIGATION ---------------- */}
      <div className="absolute inset-x-0 top-6 z-50">
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center shadow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M3 12h18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 6h18" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                <path d="M3 18h18" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
              </svg>
            </div>
            <span className="font-semibold text-lg text-gray-900">Luminex</span>
          </div>

          {/* Page Links */}
          <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <li><a href="/" className="hover:text-orange-600 transition-colors">Home</a></li>
            <li><a href="/solutions" className="hover:text-orange-600 transition-colors">Solutions</a></li>
            <li><a href="/Features" className="hover:text-orange-600 transition-colors">Features</a></li>
            <li><a href="/Team" className="hover:text-orange-600 transition-colors">Our Team</a></li>
            <li><a href="/contact" className="hover:text-orange-600 transition-colors">Contact</a></li>
          </ul>

          <div className="md:hidden">
            <button className="p-2 rounded-lg bg-white/70 shadow-sm">
              <Menu className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </nav>
      </div>

      {/* ---------------- HERO ---------------- */}
      <section className="pt-28 pb-32 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE TEXT */}
          <div className="relative z-10">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm text-orange-600 font-semibold mb-4"
            >
              SMART SOLAR SOLUTIONS
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-6xl md:text-7xl font-extrabold leading-tight text-gray-900"
            >
              Power Your World.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">
                Harness clean energy.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-6 text-lg text-gray-600 max-w-xl"
            >
              Luminex helps households and businesses monitor, manage, and optimize 
              rooftop solar systems with real-time insights, powerful analytics, and 
              smart battery integration.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-10 flex items-center gap-4"
            >
              <a
                href="https://luminex.base44.app"
                className="inline-flex items-center gap-3 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full shadow-lg transition transform hover:-translate-y-1"
              >
                Get Started
                <ArrowRightIcon className="w-5 h-5" />
              </a>

              <a
                href="/features"
                className="inline-flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-full text-gray-700 hover:bg-orange-50 transition"
              >
                See Features
              </a>
            </motion.div>

            {/* ROI + COMMUNITY */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mt-12 flex gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 shadow-sm">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Fast ROI</div>
                  <div className="text-sm text-gray-500">Payback in years, not decades</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 shadow-sm">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Community</div>
                  <div className="text-sm text-gray-500">Share or sell excess energy</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ---------------- RIGHT SIDE IMAGE ---------------- */}
          <div className="relative flex justify-center items-center">

            {/* Glow circles */}
            <motion.div
              initial={{ opacity: 0.3, scale: 0.95 }}
              animate={{ opacity: 0.5, scale: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className="absolute -right-10 top-0 w-[500px] h-[500px] bg-orange-300 rounded-full blur-3xl opacity-40"
            />
            <div className="absolute -left-10 bottom-0 w-[400px] h-[400px] bg-yellow-200 rounded-full blur-2xl opacity-40" />

            {/* Main circular image */}
            <motion.div
              style={{ y: yImg }}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="relative p-1 bg-gradient-to-br from-orange-400 to-yellow-300 rounded-full shadow-2xl"
            >
              <div className="rounded-full bg-white p-2">
                <img
                  src="/solar1.webp"
                  alt="Solar panels"
                  className="w-[460px] md:w-[540px] h-[460px] md:h-[540px] object-cover rounded-full transition-transform duration-700 hover:scale-[1.05]"
                />
              </div>
            </motion.div>

            {/* Floating info cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute top-12 right-4 bg-white rounded-2xl shadow-xl px-4 py-3 w-44"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">12.4 kWh</p>
                  <p className="text-xs text-gray-500">Today’s Output</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
              className="absolute top-44 right-24 bg-white rounded-2xl shadow-xl px-4 py-3 w-36"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">4.9</p>
                  <p className="text-xs text-gray-500">Rating</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 right-10 bg-white rounded-2xl shadow-xl px-5 py-3 w-44"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
                  <Battery className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Battery Safe</p>
                  <p className="text-xs text-gray-500">AI-managed</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </header>
  );
}
