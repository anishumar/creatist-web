import Link from "next/link";
import { Github, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark-darkest border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-8 h-8">
                <Image 
                  src="/icons/Creatist Logo.svg" 
                  alt="Creatist Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Creatist</span>
            </Link>
            <p className="text-white/60 leading-relaxed mb-6">
              The ultimate collaboration platform for the next generation of creative builders.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="p-2 bg-white/5 hover:bg-brand-accent rounded-lg text-white transition-all">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="p-2 bg-white/5 hover:bg-brand-accent rounded-lg text-white transition-all">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="p-2 bg-white/5 hover:bg-brand-accent rounded-lg text-white transition-all">
                <Github size={20} />
              </Link>
              <Link href="#" className="p-2 bg-white/5 hover:bg-brand-accent rounded-lg text-white transition-all">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Experience</h4>
            <ul className="space-y-4">
              <li><Link href="#community" className="text-white/60 hover:text-white transition-colors">Community</Link></li>
              <li><Link href="#roles" className="text-white/60 hover:text-white transition-colors">Creator Roles</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-white transition-colors">Early Access</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-white transition-colors">Waitlist</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Community</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-white/60 hover:text-white transition-colors">Discord</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-white transition-colors">Creator Network</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-white transition-colors">Events</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-white transition-colors">Guides</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/support" className="text-white/60 hover:text-white transition-colors">Support</Link></li>
              <li><Link href="/privacy" className="text-white/60 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/support" className="text-white/60 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Creatist. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-white/40 hover:text-white text-sm transition-colors">Privacy</Link>
            <Link href="/support" className="text-white/40 hover:text-white text-sm transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
