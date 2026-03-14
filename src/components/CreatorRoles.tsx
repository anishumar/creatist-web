"use client";

import { motion } from "framer-motion";
import { 
  Video, 
  Camera, 
  Scissors, 
  Mic2, 
  Music, 
  User, 
  Palette 
} from "lucide-react";

const roles = [
  { name: "Videographer", icon: Video, color: "bg-royal" },
  { name: "Photographer", icon: Camera, color: "bg-vision-maroon" },
  { name: "Editor", icon: Scissors, color: "bg-brand-accent" },
  { name: "Vocalist", icon: Mic2, color: "bg-vision-purple" },
  { name: "Dancer", icon: User, color: "bg-vision-brown" },
  { name: "Actor", icon: Palette, color: "bg-vision-deepPurple" },
  { name: "Composer", icon: Music, color: "bg-vision-darkRed" },
];

export default function CreatorRoles() {
  return (
    <section id="roles" className="py-24 bg-transparent relative overflow-hidden text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            Built for Every Creator
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Find the perfect collaborators for your next masterpiece, no matter your craft.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {roles.map((role, index) => (
            <motion.div
              key={role.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                scale: 1.05
              }}
              className="flex flex-col items-center p-6 rounded-[32px] glass-card border border-white/10 transition-all duration-300 cursor-pointer group"
            >
              <div className={`w-14 h-14 ${role.color} rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <role.icon size={28} />
              </div>
              <h3 className="text-white font-medium text-center group-hover:text-brand-accent transition-colors">
                {role.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
