import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, HelpCircle, ShieldAlert, MessageCircle } from "lucide-react";

export default function SupportPage() {
  return (
    <main className="bg-dark-darkest min-h-screen text-white selection:bg-brand-accent/30">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Support Center</h1>
            <p className="text-xl text-white/60">How can we help you today?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-white/20 transition-all">
              <Mail className="text-brand-accent mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Direct Support</h3>
              <p className="text-white/60 mb-4">Our team usually responds within 24–48 hours.</p>
              <a href="mailto:support@creatist.app" className="text-brand-accent font-medium hover:underline">support@creatist.app</a>
            </div>
            
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-white/20 transition-all">
              <MessageCircle className="text-brand-accent mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Social Channels</h3>
              <p className="text-white/60 mb-4">DM us on our social platforms for quick help.</p>
              <div className="flex gap-4">
                <span className="text-white/40 text-sm">Twitter: @Creatist</span>
              </div>
            </div>
          </div>

          <section className="space-y-12 mb-20">
            <h2 className="text-3xl font-bold tracking-tight border-b border-white/10 pb-4">Common Questions</h2>
            
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white">
                  <HelpCircle size={20} className="text-brand-accent" />
                  <h3 className="text-xl font-bold">I cannot log in</h3>
                </div>
                <p className="text-white/60 pl-8 leading-relaxed">
                  First, ensure you are using the latest version of the app from TestFlight. If the issue persists, try resetting your password or reinstalling the app. If you're still stuck, contact support.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white">
                  <ShieldAlert size={20} className="text-brand-accent" />
                  <h3 className="text-xl font-bold">I found inappropriate content</h3>
                </div>
                <p className="text-white/60 pl-8 leading-relaxed">
                  We maintain a safe community for all creators. Please use the built-in **Report** feature inside the app directly on the piece of content, or email us at <a href="mailto:creatist.swift@gmail.com" className="text-brand-accent underline">creatist.swift@gmail.com</a>.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white">
                  <MessageCircle size={20} className="text-brand-accent" />
                  <h3 className="text-xl font-bold">I want to collaborate with creators</h3>
                </div>
                <p className="text-white/60 pl-8 leading-relaxed">
                  Networking is at the heart of Creatist. Use the **Discover** tab to find creators by role or genre, and use the message button on their profile to start a new collaboration project.
                </p>
              </div>
            </div>
          </section>

          <footer className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center">
            <p className="text-white/40 mb-2">© 2026 Creatist</p>
            <p className="text-white/60 font-medium">Built for the next generation of creative builders.</p>
          </footer>
          
          <div className="mt-20 pt-10 border-t border-white/10">
            <Link href="/" className="text-white/40 hover:text-white transition-colors flex items-center gap-2">
              <span>← Back to Home</span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
