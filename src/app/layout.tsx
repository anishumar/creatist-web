import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatusMessage from "@/components/StatusMessage";

export const metadata: Metadata = {
  title: "Creatist | Create Together. Build Together.",
  description: "Creatist is the ultimate platform where creators find collaborators, manage projects, and build amazing work together.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml" },
      { url: "/apple-icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-background overflow-x-hidden min-h-screen relative font-sans`}>
        {/* macOS Tahoe Mesh Background */}
        <div className="fixed inset-0 -z-10 bg-background overflow-hidden pointer-events-none">
          <div className="mesh-blob bg-brand animate-float w-[500px] h-[500px] -top-24 -left-24" />
          <div className="mesh-blob bg-brand-accent animate-float w-[600px] h-[600px] top-1/2 -right-24 delay-1000" style={{ animationDuration: '25s' }} />
          <div className="mesh-blob bg-purple-600 animate-float w-[400px] h-[400px] bottom-0 left-1/4 delay-500" style={{ animationDuration: '30s' }} />
        </div>
        <div className="relative z-0">
          <Navbar />
          {children}
          <Footer />
          <StatusMessage />
        </div>
      </body>
    </html>
  );
}
