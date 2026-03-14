import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CreatorRoles from "@/components/CreatorRoles";
import StorySection from "@/components/StorySection";
// Features and Screenshots removed as requested
import Community from "@/components/Community";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />
      <Hero />
      <CreatorRoles />
      <StorySection />
      {/* Features and Screenshots sections removed */}
      <Community />
      <Download />
      <Footer />
    </main>
  );
}
