import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function StatsSection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "45%", label: t("stats.energy_savings") },
    { value: "2.5t", label: t("stats.co2_reduced") },
    { value: "500+", label: t("stats.active_users") },
    { value: "98%", label: t("stats.satisfaction") },
  ];

  return (
    <section className="py-24 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* LEFT SECTION */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold">
              {t("stats.title")}
            </h2>

            <p className="text-gray-600 text-lg max-w-md">
              {t("stats.subtitle")}
            </p>

            {/* BUTTON FIXED → LINK TO /features */}
            <Link
              to="/features"
              className="inline-block px-5 py-2 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition"
            >
              {t("stats.button")}
            </Link>
          </motion.div>

          {/* BIG HIGHLIGHTED NUMBER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-left"
          >
            <h3 className="text-6xl md:text-7xl font-bold">
              {t("stats.highlight_value")}
            </h3>
            <p className="text-gray-600 text-lg mt-2">
              {t("stats.long_term_savings")}
            </p>
          </motion.div>
        </div>

        {/* STATS GRID */}
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
