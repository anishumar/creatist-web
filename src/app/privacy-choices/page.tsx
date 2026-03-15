import Link from "next/link";

export default function PrivacyChoicesPage() {
  return (
    <main className="bg-transparent min-h-screen text-white selection:bg-brand-accent/30">
      
      <div className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto glass p-8 md:p-16 rounded-[48px] border border-white/10 shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">Privacy Choices</h1>
          
          <section className="space-y-12 text-white/80 leading-relaxed">
            <div>
              <p className="text-lg">
                At Creatist, we respect your privacy and give users control over their personal information.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-medium text-white">Data Access</h2>
              <p>
                Users can access and update their account information directly within the app.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-medium text-white">Account Deletion</h2>
              <p>
                If you would like to delete your Creatist account and associated data, you may request deletion by contacting us. Please send an email to:
              </p>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl mt-4">
                <a href="mailto:creatist.swift@gmail.com" className="text-brand-accent hover:underline font-medium text-lg">creatist.swift@gmail.com</a>
                <p className="text-sm text-white/40 mt-3 italic">Include your username or registered email address so we can process the request.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-medium text-white">Data Protection</h2>
              <p>
                Creatist takes reasonable measures to protect user data and ensure privacy.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-medium text-white">Contact</h2>
              <p>For privacy related questions, please contact:</p>
              <a href="mailto:creatist.swift@gmail.com" className="text-brand-accent hover:underline font-medium">creatist.swift@gmail.com</a>
            </div>
          </section>

        </div>
      </div>

    </main>
  );
}
