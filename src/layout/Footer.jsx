import { Heart } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/Shakil-Ahammed-bdd", label: "GitHub" },     // TODO: paste your GitHub profile URL
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/ahammed-shakil-10268a380/", label: "LinkedIn" },  // TODO: paste your LinkedIn profile URL
  { icon: FaFacebook, href: "https://www.facebook.com/md.shakil.ahammed.447079", label: "Facebook" },    // TODO: paste your Twitter/X profile URL
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#references", label: "References" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              SHAKIL<span className="text-primary">.</span> {/* TODO: replace with your initials */}
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Shakil. All rights reserved. {/* TODO: replace with your full name */}
            </p>
          </div>
          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};