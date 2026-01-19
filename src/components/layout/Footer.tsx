import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const footerLinks = {
  product: [
    { name: "Features", path: "/features" },
    { name: "Demo", path: "/demo" },
    { name: "Pricing", path: "/pricing" },
    { name: "Ecosystem", path: "/ecosystem" },
  ],
  company: [
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-heading font-bold">
                Auooshadh
              </span>
            </Link>
            <p className="text-background/70 leading-relaxed">
              India's most trusted digital healthcare ecosystem connecting doctors,
              patients, pharmacies, labs, and pharma companies.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/company/auooshadh"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Auooshadh LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/auooshadh"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Auooshadh Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/auooshadh"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Auooshadh Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/auooshadh"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Auooshadh Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Product</h4>
            <ul className="space-y-4">
              {footerLinks.product.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-background/70">
                <Mail className="w-5 h-5 text-secondary" />
                contact@auooshadh.com
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <Phone className="w-5 h-5 text-secondary" />
                +91 9999 999 999
              </li>
              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                123 Healthcare Hub, Mumbai, India 400001
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Auooshadh. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-background/60 hover:text-background transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
