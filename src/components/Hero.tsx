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
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../components/LanguageSwitcher";

export function Hero() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const yImg = useTransform(scrollY, [0, 600], [0, -40]);

  return (
    <header className="relative w-full bg-gradient-to-b from-orange-50 to-white overflow-hidden">

      {/* NAVIGATION */}
      <div className="absolute inset-x-0 top-6 z-50">
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Luminex Logo" className="w-12 h-12 object-contain" />
            <span className="font-semibold text-lg text-gray-900">Luminex</span>
          </div>

          <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <li><a href="/" className="hover:text-orange-600 transition">{t("nav.home")}</a></li>
            <li><a href="/solutions" className="hover:text-orange-600 transition">{t("nav.solutions")}</a></li>
            <li><a href="/features" className="hover:text-orange-600 transition">{t("nav.features")}</a></li>
            <li><a href="/team" className="hover:text-orange-600 transition">{t("nav.team")}</a></li>
            <li><a href="/contact" className="hover:text-orange-600 transition">{t("nav.contact")}</a></li>
          </ul>

          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          <div className="md:hidden">
            <button className="p-2 rounded-lg bg-white/70 shadow-sm">
              <Menu className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </nav>
      </div>

      {/* HERO SECTION */}
      <section className="pt-40 pb-32 min-h-screen flex items-center relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <div className="relative z-10">

            {/* Top Label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm text-orange-600 font-semibold mb-2"
            >
              {t("hero.heading_top")}
            </motion.p>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-900 mb-2"
            >
              {t("hero.title")}
            </motion.h1>

            {/* HARNESS CLEAN ENERGY - The largest text */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="block text-transparent bg-clip-text bg-gradient-to-r 
                         from-orange-500 to-yellow-400 
                         text-6xl md:text-7xl font-extrabold mt-2"
            >
              {t("hero.harness")}
            </motion.p>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-8 text-lg text-gray-600 max-w-xl"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-10 flex items-center gap-4"
            >
              <a
                href="https://luminextech.base44.app"
                className="inline-flex items-center gap-3 px-6 py-3 bg-orange-600 hover:bg-orange-700 
                           text-white font-semibold rounded-full shadow-lg transition hover:-translate-y-1"
              >
                {t("hero.cta_get_started")} <ArrowRightIcon className="w-5 h-5" />
              </a>

              <a
                href="/features"
                className="inline-flex items-center gap-2 px-4 py-3 border border-gray-200 
                           rounded-full text-gray-700 hover:bg-orange-50 transition"
              >
                {t("hero.cta_see_features")}
              </a>
            </motion.div>

            {/* Icon Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mt-12 flex gap-6"
            >
              {/* ROI */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 shadow-sm">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t("cards.fast_roi_title")}</p>
                  <p className="text-sm text-gray-500">{t("cards.fast_roi_desc")}</p>
                </div>
              </div>

              {/* COMMUNITY */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 shadow-sm">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t("cards.community_title")}</p>
                  <p className="text-sm text-gray-500">{t("cards.community_desc")}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0.3, scale: 0.95 }}
              animate={{ opacity: 0.5, scale: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className="absolute -right-10 top-0 w-[500px] h-[500px] bg-orange-300 rounded-full blur-3xl opacity-40"
            />

            <div className="absolute -left-10 bottom-0 w-[400px] h-[400px] bg-yellow-200 rounded-full blur-2xl opacity-40" />

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
                  className="w-[460px] md:w-[540px] h-[460px] md:h-[540px] object-cover rounded-full hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* Floating Cards */}
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
                  <p className="text-xs text-gray-500">{t("cards.todays_output")}</p>
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
                  <p className="text-xs text-gray-500">{t("cards.rating_label")}</p>
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
                  <p className="text-sm font-semibold text-gray-900">{t("cards.battery_safe")}</p>
                  <p className="text-xs text-gray-500">{t("cards.ai_managed")}</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </header>
  );
}
