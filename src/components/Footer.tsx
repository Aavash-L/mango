"use client";

import Link from "next/link";
import MangoLogo from "./ui/MangoLogo";
import { Instagram, Music2, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "FAQ", href: "#faq" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Community: [
    { label: "Instagram", href: "https://www.instagram.com/mangoestrading/", external: true },
    { label: "TikTok", href: "https://www.tiktok.com/@mangotradingllc", external: true },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/mangoestrading/", label: "Instagram" },
  { icon: Music2, href: "https://www.tiktok.com/@mangotradingllc", label: "TikTok" },
  { icon: Mail, href: "mailto:mangotradinggroupllc@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <MangoLogo size={24} />
              <span className="text-lg font-bold tracking-tight">
                Man<span className="text-mango">go</span>
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-6 max-w-xs">
              The premium trading community for serious traders who want real
              results, not hype.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-surface border border-border/50 flex items-center justify-center text-muted hover:text-mango hover:border-mango/30 transition-all duration-200"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold mb-4 text-foreground">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-foreground transition-colors duration-200 inline-flex items-center gap-1"
                    >
                      {link.label}
                      {"external" in link && link.external && (
                        <ArrowUpRight size={12} />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Mango. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/disclosures" className="text-xs text-muted hover:text-foreground transition-colors">
              Risk Disclosure
            </Link>
            <Link href="/disclosures" className="text-xs text-muted hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
