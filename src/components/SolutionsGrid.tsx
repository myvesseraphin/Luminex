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
import { useTranslation } from "react-i18next";

interface solutionProps{
  icon:React.ReactNode;
  title:string;
  description:string;
}

const solutions = (t) => [
  {
    icon: <CloudSunIcon className="w-8 h-8 text-orange-600" />,
    title: t("solutions.weather.title"),
    description: t("solutions.weather.description"),
  },
  {
    icon: <DollarSignIcon className="w-8 h-8 text-orange-600" />,
    title: t("solutions.savings.title"),
    description: t("solutions.savings.description"),
  },
  {
    icon: <ZapIcon className="w-8 h-8 text-orange-600" />,
    title: t("solutions.grid.title"),
    description: t("solutions.grid.description"),
  },
  {
    icon: <HomeIcon className="w-8 h-8 text-orange-600" />,
    title: t("solutions.space.title"),
    description: t("solutions.space.description"),
  },
  {
    icon: <LeafIcon className="w-8 h-8 text-orange-600" />,
    title: t("solutions.environment.title"),
    description: t("solutions.environment.description"),
  },
  {
    icon: <FileTextIcon className="w-8 h-8 text-orange-600" />,
    title: t("solutions.policy.title"),
    description: t("solutions.policy.description"),
  },
  {
    icon: <SettingsIcon className="w-8 h-8 text-orange-600" />,
    title: t("solutions.performance.title"),
    description: t("solutions.performance.description"),
  },
];

function SolutionCard({ solution, index }:{solution:solutionProps,index:number}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group p-8 rounded-3xl bg-white shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300 relative"
    >
      <div className="w-16 h-16 bg-white border border-orange-200 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 shadow-sm group-hover:scale-110">
        {solution.icon}
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
        {solution.title}
      </h3>

      <p className="text-gray-700 leading-relaxed text-lg">
        {solution.description}
      </p>
    </motion.div>
  );
}

export function SolutionsGrid() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const translatedSolutions = solutions(t);

  return (
    <section className="py-28 bg-gradient-to-b from-orange-50 via-white to-orange-50 relative overflow-hidden">
      <div className="absolute top-10 left-0 w-72 h-72 bg-orange-200/40 blur-[110px] rounded-full opacity-50"></div>
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-orange-300/40 blur-[110px] rounded-full opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            {t("solutions.section.title1")}<span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">{t("solutions.section.title2")}</span>
          </h2>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t("solutions.section.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {translatedSolutions.map((solution, index) => (
            <SolutionCard key={index} solution={solution} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}