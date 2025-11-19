import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { LinkedinIcon, MailIcon } from "lucide-react";

const team = [
  {
    name: "ABIJURU Serge",
    role: "Co-Founder & CTO",
    image: "../serge.png",
  },
  {
    name: "MANZI SHIMWA Yves Seraphin",
    role: "Founder & CEO",
    image: "../seraphin.jpg",
  },
  {
    name: "UWUMUREMYI Albert",
    role: "Co-Founder & COO",
    image: "../albert.jpg",
  },
];

function TeamMember({ member, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100"
    >
      <div className="relative mb-6 w-36 h-36 mx-auto rounded-full overflow-hidden shadow-md">
        <motion.img
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-2xl font-semibold text-gray-900 mb-1">{member.name}</h3>
      <p className="text-gray-600 mb-4">{member.role}</p>

      <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
          <LinkedinIcon className="w-5 h-5 text-primary" />
        </button>
        <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
          <MailIcon className="w-5 h-5 text-primary" />
        </button>
      </div>
    </motion.div>
  );
}

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet the <span className="text-primary">Luminex Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate innovators dedicated to advancing smart solar energy solutions in Rwanda.
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