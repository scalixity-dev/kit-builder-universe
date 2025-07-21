import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const aboutLinks = [
    { label: 'Our Story', href: '#' },
    { label: 'Mission & Vision', href: '#' },
    { label: 'Team', href: '#' },
    { label: 'Careers', href: '#' }
  ];

  const quickLinks = [
    { label: 'All Kits', href: '#kits' },
    { label: 'AI Recommendations', href: '#ai-agent' },
    { label: 'Age Groups', href: '#age-experience' },
    { label: 'Support', href: '#' }
  ];

  const socialIcons = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">EduKits</h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              Transforming education through hands-on learning experiences that inspire 
              creativity, build practical skills, and prepare learners for the future.
            </p>
            <div className="space-y-3">
              {aboutLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-background/70 hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-background">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-background/70 hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-background">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-background/70">hello@edukits.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-background/70">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-background/70">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-background">Follow Us</h3>
            <div className="flex gap-4 mb-6">
              {socialIcons.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center text-background/70 hover:text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Join our community and stay updated with the latest educational innovations 
              and learning opportunities.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © 2024 EduKits. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/60 hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;