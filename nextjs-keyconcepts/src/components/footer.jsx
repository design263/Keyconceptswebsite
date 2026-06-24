'use client'

import Link from 'next/link'
import {
  Mail,
  Phone,
  MapPin,
  Link as LinkIcon,
  Share2,
  Globe,
  MessageSquare,
  ExternalLink,
} from 'lucide-react'
// import logo from '/images/logo.png'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { href: 'https://www.facebook.com/KeyConceptsIT/', icon: <FaFacebookF />, label: 'Facebook' },
    { href: 'https://twitter.com/kcitsindia', icon: <FaXTwitter />, label: 'Twitter' },
    {
      href: 'https://www.linkedin.com/company/keyconcepts/',
      icon: <FaLinkedinIn />,
      label: 'LinkedIn',
    },
    { href: 'https://www.instagram.com/keyconceptsit/', icon: <FaInstagram />, label: 'Instagram' },
    // {
    //   href: 'https://www.youtube.com/channel/UCagjYMmwY2mMrEM-0dcoUaQ',
    //   icon: <FaYoutube />,
    //   label: 'YouTube',
    // },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {' '}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {' '}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {' '}
          <div className="space-y-4">
            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <img
                  src="/images/KC_logo-footer.png"
                  alt="Key Concepts Logo"
                  title="Key Concepts Logo"
                  className="h-14 w-auto"
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Key Concepts Innovations Pvt. Ltd. is a global technology partner focused on
              product-grade software engineering. We build systems that run day-to-day
              operations—where uptime, clarity, and accountability matter.
            </p>{' '}
            <div className="flex space-x-4">
              {/* {' '}
              <Link href="/" className="text-gray-400 hover:text-[#f1592a] transition-colors text-sm">
                Home
              </Link> */}
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="inline-flex items-center justify-center w-[35px] h-[35px] text-gray-400 border border-gray-600 rounded-md hover:text-[#f1592a] hover:border-[#f1592a] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>{' '}
          <div>
            {' '}
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>{' '}
            <ul className="space-y-3">
              {' '}
              <li>
                {' '}
                <Link
                  href="/"
                  className="text-gray-400 hover:text-[#f1592a] transition-colors text-sm"
                >
                  Home
                </Link>
              </li>{' '}
              {/* <li>
                {' '}
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-[#f1592a] transition-colors text-sm"
                >
                  Products
                </Link>
              </li>{' '} */}
              <li>
                {' '}
                <Link
                  href="/our-story"
                  className="text-gray-400 hover:text-[#f1592a] transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>{' '}
              <li>
                {' '}
                <Link
                  href="/insights/trends"
                  className="text-gray-400 hover:text-[#f1592a] transition-colors text-sm"
                >
                  Industry Trends
                </Link>
              </li>{' '}
              <li>
                {' '}
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-[#f1592a] transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>{' '}
              <li>
                {' '}
                <Link
                  href="/insights/case-studies"
                  className="text-gray-400 hover:text-[#f1592a] transition-colors text-sm"
                >
                  Case Studies
                </Link>
              </li>{' '}
              <li>
                {' '}
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-[#f1592a] transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>{' '}
          <div>
            {' '}
            <h3 className="text-lg font-semibold mb-4">Services & Products</h3>{' '}
            <ul className="space-y-3">
              {' '}
              <li>
                {' '}
                <Link
                  href="/visitor-management"
                  className="text-gray-400 hover:text-[#f1592a] transition-colors text-sm"
                >
                  Visitor Management System
                </Link>
              </li>{' '}
              <li>
                {' '}
                <Link
                  href="/younited-communities"
                  className="text-gray-400 hover:text-[#f1592a] transition-colors text-sm"
                >
                  Younited Communities
                </Link>
              </li>{' '}
              <li>
                {' '}
                <Link
                  href="/election-mobilization"
                  className="text-gray-400 hover:text-[#f1592a] transition-colors text-sm"
                >
                  Election Mobilization
                </Link>
              </li>{' '}
              <li>
                {' '}
                <Link
                  href="/product-development"
                  className="text-gray-400 hover:text-[#f1592a] transition-colors text-sm"
                >
                  Product Development
                </Link>
              </li>{' '}
              <li>
                {' '}
                <Link
                  href="/mvp-studio"
                  className="text-gray-400 hover:text-[#f1592a] transition-colors text-sm"
                >
                  MVP Development
                </Link>
              </li>{' '}
              <li>
                {' '}
                <Link
                  href="/odoo-erp"
                  className="text-gray-400 hover:text-[#f1592a] transition-colors text-sm"
                >
                  Odoo Development
                </Link>
              </li>{' '}
              <li>
                {' '}
                <Link
                  href="/support-maintenance"
                  className="text-gray-400 hover:text-[#f1592a] transition-colors text-sm"
                >
                  Support & Maintenance
                </Link>
              </li>
            </ul>
          </div>{' '}
          <div>
            {' '}
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>{' '}
            <ul className="space-y-3">
              {' '}
              <li className="flex items-start space-x-3">
                {' '}
                <MapPin size={18} className="text-[#f1592a] mt-1 flex-shrink-0" />{' '}
                <span className="text-gray-400 text-sm">
                  301, Highfield Ascot, Opp. Palm Avenue, <br />
                  VIP Road, Vesu, Surat - 395007. <br />
                  Gujarat, India.
                  <a
                    href="https://maps.google.com/?q=301+Highfield+Ascot+Opp+Palm+Avenue+VIP+Road+Vesu+Surat+395007"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open in Google Maps"
                    className="inline-flex ml-1 align-middle text-[#f1592a] hover:text-orange-400"                  >
                    <ExternalLink size={13} />
                  </a>
                </span>
              </li>{' '}
              <li className="flex items-start space-x-3">
                {' '}
                <Phone size={18} className="text-[#f1592a] mt-1 flex-shrink-0" />{' '}
                <a
                  href="https://wa.me/919374356357?text=Hello%20Sir%2FMam%20I%20would%20like%20to%20enquire%20about%20your%20products%20and%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-sm hover:text-[#f1592a] transition-colors"
                >
                  +91 9374 356 357
                </a>
              </li>{' '}
              <li className="flex items-start space-x-3">
                {' '}
                <Mail size={18} className="text-[#f1592a] mt-1 flex-shrink-0" />{' '}
                <a
                  href="mailto:info@keyconcepts.co.in"
                  className="text-gray-400 text-sm hover:text-[#f1592a] transition-colors"
                >
                  info@keyconcepts.co.in
                </a>
              </li>
            </ul>{' '}
            <div className="mt-6 pt-6 border-t border-gray-700">
              {' '}
              <h4 className="text-sm font-semibold mb-2 text-gray-300">Our Branches</h4>{' '}
              <p className="text-gray-400 text-sm">London | New York</p>
            </div>
          </div>
        </div>{' '}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {' '}
          <p className="text-gray-400 text-sm">
            © {currentYear} Key Concepts. All rights reserved.
          </p>{' '}
          <div className="flex space-x-6 text-sm">
            {' '}
            <a href="#" className="text-gray-400 hover:text-[#f1592a] transition-colors">
              Privacy Policy
            </a>{' '}
            <a href="#" className="text-gray-400 hover:text-[#f1592a] transition-colors">
              Terms of Service
            </a>{' '}
            <a href="#" className="text-gray-400 hover:text-[#f1592a] transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
export { Footer }
