import Link from "next/link";
import { Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-16 pb-10 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1 border-white/10 pr-8">
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight mb-8">Experience liftoff</h2>
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
          
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/#download" className="hover:text-white transition-colors">Download</Link></li>
                <li><Link href="/#product" className="hover:text-white transition-colors">Product</Link></li>
                <li><Link href="/#docs" className="hover:text-white transition-colors">Docs</Link></li>
                <li><Link href="/#changelog" className="hover:text-white transition-colors">Changelog</Link></li>
                <li><Link href="/#press" className="hover:text-white transition-colors">Press</Link></li>
                <li><Link href="/#releases" className="hover:text-white transition-colors">Releases</Link></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/#blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/#use-cases" className="hover:text-white transition-colors">Use Cases</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Massive Text Section */}
        <div className="relative w-full overflow-hidden h-[9.5vw] md:h-[10.5vw] flex justify-center items-start mt-4 border-b border-white/10">
          <h1 className="text-[19vw] md:text-[21vw] font-bold tracking-tighter leading-none select-none text-white pointer-events-none uppercase w-full text-center -translate-y-[2vw] md:-translate-y-[1.5vw]">
            CREATIST
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center pt-6 border-t border-white/10 gap-4">
          <div className="flex items-center gap-2">
            <span className="text-base font-medium">Creatist</span>
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-[11px] text-gray-400">
            <Link href="/about" className="hover:text-white transition-colors">About Creatist</Link>
            <Link href="/products" className="hover:text-white transition-colors">Creatist Products</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/privacy-choices" className="hover:text-white transition-colors">Privacy Choices</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/support" className="hover:text-white transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

