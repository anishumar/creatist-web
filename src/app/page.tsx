import Hero from "@/components/Hero";
import CreatorRoles from "@/components/CreatorRoles";
import StorySection from "@/components/StorySection";
import Community from "@/components/Community";
import Download from "@/components/Download";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Hero />
      <CreatorRoles />
      <StorySection />
      <Community />
      <Download />
    </main>
  );
}
