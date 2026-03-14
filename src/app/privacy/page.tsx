import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="bg-dark-darkest min-h-screen text-white selection:bg-brand-accent/30">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Privacy Policy</h1>
          <p className="text-white/60 mb-12">Last updated: March 2026</p>

          <section className="space-y-12 text-white/80 leading-relaxed">
            <div>
              <p className="text-lg">
                Creatist ("we", "our", or "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use the Creatist mobile application and website.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
              <p>When you use Creatist, we may collect the following information:</p>
              <ul className="list-disc pl-6 space-y-3 marker:text-brand-accent">
                <li>Account information (name, email address, username)</li>
                <li>Profile information provided by users</li>
                <li>Content you create, upload, or share</li>
                <li>Messages sent between users</li>
                <li>Device and usage information</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">How We Use Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-3 marker:text-brand-accent">
                <li>Provide and maintain the Creatist platform</li>
                <li>Allow creators to collaborate and communicate</li>
                <li>Improve app performance and features</li>
                <li>Maintain the safety and security of the platform</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">User Content</h2>
              <p>
                Users may upload photos, posts, and other content. Creatist does not claim ownership of user content but may store and display it to provide the service.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Data Security</h2>
              <p>
                We take reasonable measures to protect your data and prevent unauthorized access.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Third-Party Services</h2>
              <p>
                Creatist may use third-party services such as authentication providers or analytics tools to operate the platform.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Privacy Choices</h2>
              <p>At Creatist, we respect your privacy and give users control over their personal information.</p>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-2">Data Access</h3>
              <p>Users can access and update their account information directly within the app.</p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">Account Deletion</h3>
              <p>
                If you would like to delete your Creatist account and associated data, you may request deletion by contacting us. Please send an email to:
              </p>
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl mt-4">
                <a href="mailto:creatist.swift@gmail.com" className="text-brand-accent hover:underline font-medium">creatist.swift@gmail.com</a>
                <p className="text-sm text-white/40 mt-2">Include your username or registered email address so we can process the request.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us:</p>
              <a href="mailto:creatist.swift@gmail.com" className="text-brand-accent hover:underline">creatist.swift@gmail.com</a>
            </div>
          </section>

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
