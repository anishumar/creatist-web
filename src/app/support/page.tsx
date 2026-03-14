import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SupportPage() {
  return (
    <main className="bg-dark-darkest min-h-screen text-white selection:bg-brand-accent/30">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Support</h1>
          
          <section className="space-y-12 text-white/80 leading-relaxed">
            <div>
              <p className="text-xl text-white">Welcome to Creatist support.</p>
              <p className="mt-4">
                Creatist is a platform where creators can discover collaborators, build projects, and share creative work.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Contact Support</h2>
              <p>If you have any questions or issues, please contact us:</p>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl mt-4">
                <a href="mailto:support@creatist.app" className="text-brand-accent hover:underline font-bold text-lg flex items-center gap-2">
                  <span>📧</span> support@creatist.app
                </a>
                <p className="text-sm text-white/40 mt-3 italic">We usually respond within 24–48 hours.</p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-4">Common Questions</h2>
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">I cannot log in</h3>
                <p>Try resetting your password or reinstalling the app.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">I found inappropriate content</h3>
                <p>Please use the **Report** feature inside the app.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">I want to collaborate with creators</h3>
                <p>Use the **Discover** tab to find creators and start collaborations.</p>
              </div>
            </div>
          </section>

          <footer className="mt-20 pt-10 border-t border-white/10 flex justify-between items-center text-white/40 text-sm">
             <Link href="/" className="hover:text-white transition-colors flex items-center gap-2">
                <span>← Back to Home</span>
              </Link>
             <span>© 2026 Creatist</span>
          </footer>
        </div>
      </div>

      <Footer />
    </main>
  );
}
