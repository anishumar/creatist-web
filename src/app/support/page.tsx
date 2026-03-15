import Link from "next/link";

export default function SupportPage() {
  return (
    <main className="bg-transparent min-h-screen text-white selection:bg-brand-accent/30">
      
      <div className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto glass p-8 md:p-16 rounded-[48px] border border-white/10 shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">Support</h1>
          
          <section className="space-y-12 text-white/80 leading-relaxed">
            <div>
              <p className="text-xl text-white">Welcome to Creatist support.</p>
              <p className="mt-4">
                Creatist is a platform where creators can discover collaborators, build projects, and share creative work.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-medium text-white">Contact Support</h2>
              <p>If you have any questions or issues, please contact us:</p>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl mt-4">
                <a href="mailto:creatist.swift@gmail.com" className="text-brand-accent hover:underline font-medium text-lg flex items-center gap-2">
                  creatist.swift@gmail.com
                </a>
                <p className="text-sm text-white/40 mt-3 italic">We usually respond within 24–48 hours.</p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl font-medium text-white border-b border-white/10 pb-4">Common Questions</h2>
              
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-white">I cannot log in</h3>
                <p>Try resetting your password or reinstalling the app.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-medium text-white">I found inappropriate content</h3>
                <p>Please use the **Report** feature inside the app.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-medium text-white">I want to collaborate with creators</h3>
                <p>Use the **Discover** tab to find creators and start collaborations.</p>
              </div>
            </div>
          </section>

        </div>
      </div>

    </main>
  );
}
