"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const stories = [
  {
    title: "Discover Your Next Collaborator",
    description: "Search and discover talented creators by role and build your dream collaboration team. Connect with designers, developers, and artists worldwide.",
    images: ["/images/stories/discover-main-page.png", "/images/stories/discover-inside.png"],
    color: "from-brand-accent to-rose-600",
  },
  {
    title: "Project Vision Boards",
    description: "Organize ideas, manage creative projects, and collaborate with your team in one place. Build beautiful vision boards that align your vision.",
    images: [
      "/images/stories/visionboard-main.png", 
      "/images/stories/visionboard-main3.png"
    ],
    color: "from-royal to-blue-600",
  },
  {
    title: "Dynamic Creator Feed",
    description: "Stay updated with what your network is building. Share your latest work and get inspired by the global creator community.",
    images: ["/images/stories/feed-new.png"],
    color: "from-vision-maroon to-vision-purple",
  },
];

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Phone movement
  const phoneY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const phoneRotate = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [2, -2, 2, -2, 0]);
  const phoneScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-transparent">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            style={{ 
              opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.4, 0.4, 0]),
              scale: useTransform(scrollYProgress, [0, 1], [1, 1.5]),
              rotate: useTransform(scrollYProgress, [0, 1], [0, 45])
            }}
            className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-brand-accent/20 rounded-full blur-[150px]" 
          />
          <motion.div 
            style={{ 
              opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.3, 0.3, 0]),
              scale: useTransform(scrollYProgress, [0, 1], [1.5, 1]),
              rotate: useTransform(scrollYProgress, [0, 1], [0, -90])
            }}
            className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-royal/40 rounded-full blur-[150px]" 
          />

          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + (i % 3) * 30}%`,
                opacity: useTransform(scrollYProgress, [0, 1], [0.1, 0.3]),
                y: useTransform(scrollYProgress, [0, 1], [0, (i + 1) * -100]),
              }}
              className="absolute w-2 h-2 bg-white rounded-full blur-[2px]"
            />
          ))}
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 h-full">
          {/* Text Content */}
          <div className="relative h-[60vh] lg:h-[80vh]">
            {stories.map((story, index) => {
              const start = index / stories.length;
              const end = (index + 1) / stories.length;
              
              const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
              const x = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [-50, 0, 0, 50]);
              const blur = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);

              return (
                <motion.div
                  key={index}
                  style={{ opacity, x, filter: blur }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <motion.span 
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     className="text-brand-accent font-bold tracking-widest uppercase mb-4 block"
                  >
                    Story 0{index + 1}
                  </motion.span>
                  <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight">
                    {story.title.split(' ').map((word, i) => (
                      <span key={i} className={i % 2 === 1 ? `text-transparent bg-clip-text bg-gradient-to-r ${story.color}` : ""}>
                        {word}{" "}
                      </span>
                    ))}
                  </h2>
                  <p className="text-xl md:text-2xl text-white/50 max-w-xl leading-relaxed font-medium">
                    {story.description}
                  </p>
                  
                  <div className="mt-12 flex items-center gap-6">
                    <div className="h-[2px] w-32 bg-white/10 relative overflow-hidden">
                      <motion.div 
                        style={{ 
                          scaleX: useTransform(scrollYProgress, [start, end], [0, 1]),
                          transformOrigin: "left"
                        }}
                        className={`absolute inset-0 bg-gradient-to-r ${story.color}`} 
                      />
                    </div>
                    <span className="text-white/20 font-mono text-sm">0{index + 1} / 0{stories.length}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Floating Device Mockups */}
          <div className="flex justify-center items-center h-full">
            <div className="relative w-full max-w-[650px] md:max-w-[850px] lg:max-w-[950px] aspect-[4/3]">
              {stories.map((story, index) => {
                const start = index / stories.length;
                const end = (index + 1) / stories.length;
                const count = story.images.length;
                const step = (end - start) / count;
                const lastImgStart = end - step;
                
                // Entrance and Exit animations for the device
                // Sharper transitions between stories
                const opacity = useTransform(scrollYProgress, [start - 0.01, start, end, end + 0.01], [0, 1, 1, 0]);
                const baseScale = useTransform(scrollYProgress, [start - 0.1, start, end, end + 0.1], [1.2, 1.6, 1.6, 1.2]);
                
                // Zoom in during the last image of each story
                const zoomScale = useTransform(scrollYProgress, [lastImgStart, end], [1, 1.3]);
                
                // Combine scales
                const scale = useTransform(
                  [baseScale, zoomScale],
                  ([s1, s2]: any[]) => s1 * s2
                );

                const rotateY = useTransform(scrollYProgress, [start, end], [-5, 5]);
                const z = useTransform(scrollYProgress, [start, end], [0, 30]);
                const y = useTransform(scrollYProgress, [start - 0.1, start, end, end + 0.1], [50, 0, 0, -50]);

                return (
                  <motion.div
                    key={index}
                    style={{ 
                      opacity, 
                      scale, 
                      rotateY,
                      z,
                      y,
                      perspective: 1000
                    }}
                    className="absolute inset-0 z-10"
                  >
                    {/* Shadow for the floating device removed to prevent rectangular box effect */}
                    
                    <div className="relative w-full h-full drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
                      {story.images.map((img, imgIndex) => {
                        const imgStart = start + imgIndex * step;
                        const imgEnd = start + (imgIndex + 1) * step;
                        
                        // Cross-fade logic:
                        // Image N stays visible until Image N+1 starts fading in.
                        // We use a centered cross-fade at each step boundary.
                        const crossFadeRange = step * 0.4; // 40% of the step is for cross-fading
                        
                        const imgOpacity = useTransform(
                          scrollYProgress,
                          [
                            imgStart - (imgIndex === 0 ? 0.05 : crossFadeRange/2),
                            imgStart + (imgIndex === 0 ? 0 : crossFadeRange/2),
                            imgEnd - (imgIndex === count - 1 ? 0 : crossFadeRange/2),
                            imgEnd + (imgIndex === count - 1 ? 0.05 : crossFadeRange/2)
                          ],
                          [0, 1, 1, 0]
                        );

                        return (
                          <motion.div
                            key={imgIndex}
                            style={{ opacity: imgOpacity }}
                            className="absolute inset-0"
                          >
                            <Image 
                              src={img} 
                              alt={story.title}
                              fill
                              className="object-contain"
                              priority={index === 0 && imgIndex === 0}
                            />
                          </motion.div>
                        );
                      })}
                      
                      {/* Glass Reflection Overlay removed */}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
