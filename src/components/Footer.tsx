import Link from "next/link";
import { Github, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-transparent pt-20 pb-10 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="glass rounded-[40px] p-12 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <span className="text-xl font-medium tracking-tight text-white">Creatist</span>
              </Link>
              <p className="text-white/60 leading-relaxed mb-6">
                The ultimate collaboration platform for the next generation of creative builders.
              </p>
              <div className="flex items-center gap-4">
                <Link href="https://x.com/creatistwrites" target="_blank" rel="noopener noreferrer" className="p-2 glass hover:bg-white/10 rounded-xl text-white transition-all">
                  <Twitter size={20} />
                </Link>
                <Link href="https://linkedin.com/company/creatist" target="_blank" rel="noopener noreferrer" className="p-2 glass hover:bg-white/10 rounded-xl text-white transition-all">
                  <Linkedin size={20} />
                </Link>
                <Link href="https://youtube.com/@creatistcollab?si=IycV8WQ3uN0JQYe9" target="_blank" rel="noopener noreferrer" className="p-2 glass hover:bg-white/10 rounded-xl text-white transition-all">
                  <Youtube size={20} />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-6">Product</h4>
              <ul className="space-y-4 text-sm">
                <li><Link href="/#community" className="text-white/60 hover:text-white transition-colors">Community</Link></li>
                <li><Link href="/#roles" className="text-white/60 hover:text-white transition-colors">Creator Roles</Link></li>
                <li><Link href="/#download" className="text-white/60 hover:text-white transition-colors">App Store</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-6">Resources</h4>
              <ul className="space-y-4 text-sm">
                <li><Link href="/help" className="text-white/60 hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/support" className="text-white/60 hover:text-white transition-colors">Support</Link></li>
                <li><Link href="/blog" className="text-white/60 hover:text-white transition-colors">Creator Guides</Link></li>
                <li><Link href="/brand" className="text-white/60 hover:text-white transition-colors">Brand Assets</Link></li>
                <li><Link href="/contact" className="text-white/60 hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-6">Legal</h4>
              <ul className="space-y-4 text-sm">
                <li><Link href="/terms" className="text-white/60 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-white/60 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/privacy-choices" className="text-white/60 hover:text-white transition-colors">Privacy Choices</Link></li>
                <li><Link href="/cookies" className="text-white/60 hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/40 text-xs font-medium tracking-wide">
              © {new Date().getFullYear()} CREATIST INC. MADE WITH ❤️ FOR CREATORS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
