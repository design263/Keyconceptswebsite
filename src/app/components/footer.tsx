import { Link } from "react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">KC</span>
              </div>
              <span className="text-2xl font-bold">Key Concepts</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Architecting Your Digital Future with Intelligent ERP & AI Solutions. 
              Your trusted partner in IT services and digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#f1592a] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f1592a] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f1592a] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f1592a] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#f1592a] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#f1592a] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#f1592a] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-[#f1592a] transition-colors">
                  Knowledge Hub
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#f1592a] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">ERP Solutions (Odoo Partner)</li>
              <li className="text-gray-400 text-sm">AI-Powered Implementation</li>
              <li className="text-gray-400 text-sm">Web & Mobile Development</li>
              <li className="text-gray-400 text-sm">Digital Marketing</li>
              <li className="text-gray-400 text-sm">API Integration</li>
              <li className="text-gray-400 text-sm">SEO/SMO Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-[#f1592a] mt-1" />
                <span className="text-gray-400 text-sm">info@keyconcepts.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-[#f1592a] mt-1" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#f1592a] mt-1" />
                <span className="text-gray-400 text-sm">
                  123 Tech Street, Innovation Hub,<br />
                  San Francisco, CA 94105
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} Key Concepts. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-[#f1592a] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-[#f1592a] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-[#f1592a] transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
