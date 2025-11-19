import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { LinkedinIcon, MailIcon } from 'lucide-react';

const team = [
  {
    name: 'ABIJURU Serge',
    role: 'Co-Founder & CTO',
    image:
      '../serge.png'
  },
  {
    name: 'MANZI SHIMWA Yves Seraphin',
    role: 'Founder & CEO',
    image:
      '../seraphin.jpg'
  },
  {
    name: 'UWUMUREMYI Albert',
    role: 'Co-Founder & COO',
    image:
      '../albert.jpg',
  }
];

function TeamMember({ member, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <div className="relative mb-6 overflow-hidden rounded-full w-48 h-48 mx-auto">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          src={member.image}
          alt={member.name}
          className="w-48 h-48 object-cover mx-auto"
        />

        {!member.isPlaceholder && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <LinkedinIcon className="w-5 h-5 text-primary" />
            </button>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <MailIcon className="w-5 h-5 text-primary" />
            </button>
          </div>
        )}

        {member.isPlaceholder && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center rounded-full">
            <div className="text-center text-white">
              <div className="text-6xl mb-4">+</div>
              <div className="text-lg font-semibold">Apply Now</div>
            </div>
          </div>
        )}
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">{member.name}</h3>
      <p className="text-lg text-gray-600 text-center">{member.role}</p>
    </motion.div>
  );
}

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> Luminex Team</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate innovators dedicated to bringing smart solar energy solutions to Rwanda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
