import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { BarChart3Icon, BatteryChargingIcon, UsersIcon, TrendingUpIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const features = (t) => [
  {
    icon: BarChart3Icon,
    title: t('features.realtime.title'),
    description: t('features.realtime.description'),
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    icon: BatteryChargingIcon,
    title: t('features.battery.title'),
    description: t('features.battery.description'),
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
  },
  {
    icon: UsersIcon,
    title: t('features.community.title'),
    description: t('features.community.description'),
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80',
  },
  {
    icon: TrendingUpIcon,
    title: t('features.roi.title'),
    description: t('features.roi.description'),
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
  },
];

function FeatureCard({ feature, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center mb-24`}
    >
      <div className="flex-1">
        <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-400 rounded-2xl flex items-center justify-center mb-6">
          <feature.icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">{feature.description}</p>
        <a
          href="https://luminextech.base44.app"
          className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-400 transition-colors"
        >
          {feature.learnMore}
        </a>
      </div>

      <div className="flex-1">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          <img src={feature.image} alt={feature.title} className="w-full h-[400px] object-cover" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function FeaturesShowcase() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const featureList = features(t).map(f => ({
    ...f,
    learnMore: t('features.learn_more')
  }));

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('features.section_title1')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
              {' '}{t('features.section_title2')}
            </span>
          </h2>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('features.section_subtitle')}
          </p>
        </motion.div>

        <div>
          {featureList.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
