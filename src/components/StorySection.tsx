"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const stories = [
  {
    title: "Discover Collaborator",
    description: "Search and discover talented creators by role and build your dream collaboration team.",
    images: ["/images/stories/discover-main-page.png", "/images/stories/discover-inside.png"],
    color: "from-brand-accent to-rose-600",
  },
  {
    title: "Create VisionBoards",
    description: "Organize ideas, manage creative projects, and collaborate with your team in one place.",
    images: [
      "/images/stories/visionboard-main.png", 
      "/images/stories/visionboard-main3.png"
    ],
    color: "from-brand-accent to-rose-600",
  },
  {
    title: "Showcase Works",
    description: "Share your latest work and get inspired by the global creator community.",
    images: ["/images/stories/feed-new.png"],
    color: "from-brand-accent to-rose-600",
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
    <section ref={containerRef} className="relative h-[800vh] bg-transparent">
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

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 h-full w-full">
          {/* Text Content - Left Side */}
          <div className="relative h-full z-20 pointer-events-none">
            {stories.map((story, index) => {
              const start = index / stories.length;
              const end = (index + 1) / stories.length;
              
              const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
              // Adjust Y lightly
              const y = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [20, 0, 0, -20]);
              const blur = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);

              return (
                <motion.div
                  key={index}
                  style={{ opacity, y, filter: blur }}
                  className="absolute inset-0 flex flex-col items-start justify-center text-left lg:pr-10"
                >
                  <motion.span 
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     className="text-brand-accent font-medium tracking-widest uppercase mb-4 block drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                  >
                    Story 0{index + 1}
                  </motion.span>
                  <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-white mb-4 leading-[1.1] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                    {story.title.split(' ').map((word, i) => (
                      <span 
                        key={i} 
                        className={`
                          ${i % 2 === 1 ? `text-transparent bg-clip-text bg-gradient-to-r ${story.color}` : ""} 
                          ${story.title === "Showcase Works" && i === 1 ? "block" : ""}
                        `}
                      >
                        {word}{" "}
                      </span>
                    ))}
                  </h2>
                  <p className="text-lg md:text-xl text-white max-w-xl leading-relaxed font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    {story.description}
                  </p>
                  
                  <div className="mt-8 flex items-center gap-6">
                    <div className="h-[2px] w-32 bg-white/20 relative overflow-hidden rounded-full drop-shadow-md">
                      <motion.div 
                        style={{ 
                          scaleX: useTransform(scrollYProgress, [start, end], [0, 1]),
                          transformOrigin: "left"
                        }}
                        className={`absolute inset-0 bg-gradient-to-r ${story.color}`} 
                      />
                    </div>
                    <span className="text-white font-mono text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">0{index + 1} / 0{stories.length}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Floating Device Mockups - Right Side */}
          <div className="relative flex justify-center items-center h-full w-full pointer-events-none mt-10 lg:mt-0 lg:-mr-20">
            <div className="relative w-full lg:w-[130%] max-w-[1200px] h-[70vh] lg:h-[90vh]">
              {stories.map((story, index) => {
                const start = index / stories.length;
                const end = (index + 1) / stories.length;
                const count = story.images.length;
                const step = (end - start) / count;
                const lastImgStart = end - step;
                
                // Entrance and Exit animations for the device
                // Fades out completely before the next one starts fading in.
                const opacity = useTransform(scrollYProgress, [start, start + 0.08, end - 0.08, end], [0, 1, 1, 0]);
                
                // One device is small when entering, giving perspective depth, scaling up when it is at the center
                // It stays full size when exiting to the right. Last story appears immediately at full size.
                const scaleStart = story.title === "Showcase Works" ? 1.8 : 0.6;
                const baseScale = useTransform(scrollYProgress, [start, start + 0.15, end - 0.15, end], [scaleStart, 1.8, 1.8, 1.8]);
                
                // Zoom in during the last image of each story
                const zoomScale = useTransform(scrollYProgress, [lastImgStart, end], [1, 1.15]);
                
                // Combine scales
                const scale = useTransform(
                  [baseScale, zoomScale],
                  ([s1, s2]: any[]) => s1 * s2
                );

                const rotateY = useTransform(scrollYProgress, [start, start + 0.15, end - 0.15, end], [-15, -5, 5, 15]);
                
                // Last story doesn't come from behind (Z axis)
                const zStart = story.title === "Showcase Works" ? 50 : -100;
                const z = useTransform(scrollYProgress, [start, start + 0.15, end - 0.15, end], [zStart, 50, 50, 50]);
                
                // Enters from below, but doesn't exit upward anymore. Last story doesn't enter from below.
                const yStart = story.title === "Showcase Works" ? 0 : 600;
                const y = useTransform(scrollYProgress, [start, start + 0.15, end - 0.15, end], [yStart, 0, 0, 0]);
                
                // Exits to the right
                const x = useTransform(scrollYProgress, [start, start + 0.15, end - 0.15, end], [0, 0, 0, 800]);

                return (
                  <motion.div
                    key={index}
                    style={{ 
                      opacity, 
                      scale, 
                      rotateY,
                      z,
                      y,
                      x,
                      perspective: 1200
                    }}
                    className="absolute inset-0 z-10 w-full"
                  >
                    <div className="relative w-full h-full drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
                      {story.images.map((img, imgIndex) => {
                        const imgStart = start + imgIndex * step;
                        const imgEnd = start + (imgIndex + 1) * step;
                        
                        // Sequential logic: one disappears completely before the next comes up.
                        const fadeRange = step * 0.1;
                        
                        const imgOpacity = useTransform(
                          scrollYProgress,
                          [
                            imgStart,
                            imgStart + fadeRange,
                            imgEnd - fadeRange,
                            imgEnd
                          ],
                          [0, 1, 1, 0]
                        );

                        return (
                          <motion.div
                            key={imgIndex}
                            style={{ opacity: imgOpacity }}
                            className="absolute inset-0 w-full"
                          >
                            <Image 
                              src={img} 
                              alt={story.title}
                              fill
                              className="object-contain w-full"
                              priority={index === 0 && imgIndex === 0}
                            />
                          </motion.div>
                        );
                      })}
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
