"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  Users2, 
  Layout, 
  FolderKanban, 
  UserCircle 
} from "lucide-react";

const features = [
  {
    title: "Discover Creators",
    description: "Connect with talented individuals from across the globe based on skills, location, and style.",
    icon: Search,
    gradient: "from-royal to-blue-500"
  },
  {
    title: "Collaborate on Projects",
    description: "Launch projects and invite specific creators to join your vision. Manage everything in one place.",
    icon: Users2,
    gradient: "from-vision-maroon to-vision-purple"
  },
  {
    title: "Creator Feed",
    description: "Stay updated with what your network is building. Share your latest work and get inspired.",
    icon: Layout,
    gradient: "from-brand-accent to-rose-400"
  },
  {
    title: "Manage Projects",
    description: "Organize tasks, timelines, and assets with our powerful project management tools.",
    icon: FolderKanban,
    gradient: "from-vision-brown to-vision-darkRed"
  },
  {
    title: "Creator Profiles",
    description: "Showcase your portfolio, skills, and past collaborations with a professional profile.",
    icon: UserCircle,
    gradient: "from-vision-deepPurple to-brand"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-transparent relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/2 left-[-10%] w-[600px] h-[600px] bg-brand/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Powerful Features for <br />
            Modern Creators
          </h2>
          <div className="w-20 h-1.5 bg-brand-accent rounded-full mb-6 shadow-lg shadow-brand-accent/30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-[40px] glass-card border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-6 shadow-xl`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand transition-colors">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
