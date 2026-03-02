import { Link } from "react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import logo from "figma:asset/0de5f27413ecaab432b5807952fee0d690b04505.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <img 
                src={logo} 
                alt="Key Concepts" 
                className="h-10 w-auto transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Key Concepts Innovations Pvt. Ltd. is a global technology partner focused on product-grade software engineering. We build systems that run day-to-day operations—where uptime, clarity, and accountability matter.
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
                <Link to="/" className="text-gray-400 hover:text-[#f1592a] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#f1592a] transition-colors text-sm">
                 Products
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="text-gray-400 hover:text-[#f1592a] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/insights/trends" className="text-gray-400 hover:text-[#f1592a] transition-colors text-sm">
                  Industry Trends
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-[#f1592a] transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/insights/case-studies" className="text-gray-400 hover:text-[#f1592a] transition-colors text-sm">
                 Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#f1592a] transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services & Products</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/visitor-management" className="text-gray-400 hover:text-[#f1592a] transition-colors text-sm">
                  Visitor Management System
                </Link>
              </li>
              <li>
                <Link to="/younited-communities" className="text-gray-400 hover:text-[#f1592a] transition-colors text-sm">
                  Younited Communities
                </Link>
              </li>
              <li>
                <Link to="/election-mobilization" className="text-gray-400 hover:text-[#f1592a] transition-colors text-sm">
                  Election Mobilization
                </Link>
              </li>
              <li>
                <Link to="/product-development" className="text-gray-400 hover:text-[#f1592a] transition-colors text-sm">
                  Product Development
                </Link>
              </li>
              <li>
                <Link to="/mvp-studio" className="text-gray-400 hover:text-[#f1592a] transition-colors text-sm">
                  MVP Development
                </Link>
              </li>
              <li>
                <Link to="/odoo-erp" className="text-gray-400 hover:text-[#f1592a] transition-colors text-sm">
                  Odoo Development
                </Link>
              </li>
              <li>
                <Link to="/support-maintenance" className="text-gray-400 hover:text-[#f1592a] transition-colors text-sm">
                  Support & Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#f1592a] mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  301, Highfield Ascot, Opp. Palm Avenue,<br />
                  VIP Road, Vesu, Surat - 395007.<br />
                  Gujarat, India.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-[#f1592a] mt-1 flex-shrink-0" />
                <a href="https://wa.me/919374356357?text=Hello%20Sir%2FMam%20I%20would%20like%20to%20enquire%20about%20your%20products%20and%20services" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-[#f1592a] transition-colors">
                  +91 9374 356 357
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-[#f1592a] mt-1 flex-shrink-0" />
                <a href="mailto:info@keyconcepts.co.in" className="text-gray-400 text-sm hover:text-[#f1592a] transition-colors">
                  info@keyconcepts.co.in
                </a>
              </li>
            </ul>
            
            {/* Our Branches */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <h4 className="text-sm font-semibold mb-2 text-gray-300">Our Branches</h4>
              <p className="text-gray-400 text-sm">London | New York</p>
            </div>
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