"use client";

import { motion } from 'motion/react'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'
import { useState } from 'react'
import { SEO } from '../components/ui/seo'
import { api } from '../lib/api'

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/contact-leads", {
      name: formData.name,
      email: formData.email,
      subject: formData.service || "General Inquiry",
      message: `${formData.message}${formData.company ? `\nCompany: ${formData.company}` : ""}${formData.phone ? `\nPhone: ${formData.phone}` : ""}`,
    });
    setFormData({ name: "", email: "", company: "", phone: "", service: "", message: "" });
  }
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }
  return (
    <>
      <SEO 
        title="Contact Us"
        description="Get in touch with Key Concepts for your next IT project. We offer Odoo ERP, web and mobile development, and digital marketing services."
      />
      <div className="min-h-screen bg-white">
      {' '}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-gray-50 to-[#f7f7f7] overflow-hidden">
        {' '}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {' '}
          <div className="absolute top-20 -right-32 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl" />{' '}
          <div className="absolute bottom-0 -left-32 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl" />
        </div>{' '}
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {' '}
          <div className="max-w-5xl mx-auto text-center">
            {' '}
            <motion.span
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#f1592a]/20 shadow-lg mb-6"
            >
              {' '}
              <MessageSquare className="text-[#f1592a]" size={18} />{' '}
              <span className="text-sm font-medium text-gray-700">Get in Touch</span>
            </motion.span>{' '}
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
              }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Let's Start{' '}
              <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                Building Together
              </span>
            </motion.h1>{' '}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
              }}
              className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              We're here to help transform your business with cutting-edge ERP solutions, custom
              development, and intelligent technology services.
            </motion.p>
          </div>
        </div>
      </section>{' '}
      <section className="py-24 bg-white">
        {' '}
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          {' '}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {' '}
            <motion.div
              initial={{
                opacity: 0,
                x: -50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.3,
              }}
            >
              {' '}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200">
                {' '}
                <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>{' '}
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you shortly.
                </p>{' '}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {' '}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {' '}
                    <div>
                      {' '}
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>{' '}
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-1 border-gray-200 focus:border-[#f1592a] focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>{' '}
                    <div>
                      {' '}
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>{' '}
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-1 border-gray-200 focus:border-[#f1592a] focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>{' '}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {' '}
                    <div>
                      {' '}
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Company Name
                      </label>{' '}
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-1 border-gray-200 focus:border-[#f1592a] focus:outline-none transition-colors"
                        placeholder="Your Company"
                      />
                    </div>{' '}
                    <div>
                      {' '}
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>{' '}
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-1 border-gray-200 focus:border-[#f1592a] focus:outline-none transition-colors"
                        placeholder="+91 9374 356 357"
                      />
                    </div>
                  </div>{' '}
                  <div>
                    {' '}
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Service Interested In *
                    </label>{' '}
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-1 border-gray-200 focus:border-[#f1592a] focus:outline-none transition-colors"
                    >
                      {' '}
                      <option value="">Select a service</option>{' '}
                      <option value="odoo-erp">Odoo ERP Solutions</option>{' '}
                      <option value="custom-development">Custom Product Development</option>{' '}
                      <option value="mvp-studio">MVP Studio</option>{' '}
                      <option value="web-mobile">Web & Mobile Development</option>{' '}
                      <option value="api-integration">API Integration</option>{' '}
                      <option value="digital-marketing">Digital Marketing</option>{' '}
                      <option value="seo-smo">SEO/SMO Services</option>{' '}
                      <option value="support-maintenance">Support & Maintenance</option>{' '}
                      <option value="other">Other</option>
                    </select>
                  </div>{' '}
                  <div>
                    {' '}
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>{' '}
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border-1 border-gray-200 focus:border-[#f1592a] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>{' '}
                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="group w-full px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 font-semibold"
                  >
                    {' '}
                    <span>Book a Descovery Call</span>{' '}
                    <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                  </motion.button>
                </form>
              </div>
            </motion.div>{' '}
            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.4,
              }}
              className="space-y-8"
            >
              {' '}
              <div>
                {' '}
                <h2 className="text-3xl font-bold mb-4">Contact Information</h2>{' '}
                <p className="text-lg text-gray-600 leading-relaxed">
                  Have questions? We're here to help. Reach out to us through any of these channels.
                </p>
              </div>{' '}
              <div className="space-y-6">
                {' '}
                <motion.div
                  whileHover={{
                    x: 10,
                  }}
                  className="group flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-200"
                >
                  {' '}
                  <div className="relative w-12 h-12 flex-shrink-0">
                    {' '}
                    <div className="w-full h-full bg-[#f1592a] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {' '}
                      <MapPin className="text-white" size={24} strokeWidth={1.5} />
                    </div>{' '}
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-[#f1592a]" />
                  </div>{' '}
                  <div>
                    {' '}
                    <h3 className="font-semibold text-gray-900 mb-2">Head Office</h3>{' '}
                    <p className="text-gray-600 leading-relaxed">
                      301, Highfield Ascot, Opp. Palm Avenue, VIP Road, <br />
                      Vesu, Surat - 395007. Gujarat, India
                    </p>
                  </div>
                </motion.div>{' '}
                <motion.div
                  whileHover={{
                    x: 10,
                  }}
                  className="group flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-200"
                >
                  {' '}
                  <div className="relative w-12 h-12 flex-shrink-0">
                    {' '}
                    <div className="w-full h-full bg-[#f1592a] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {' '}
                      <Mail className="text-white" size={24} strokeWidth={1.5} />
                    </div>{' '}
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-[#f1592a]" />
                  </div>{' '}
                  <div>
                    {' '}
                    <h3 className="font-semibold text-gray-900 mb-1">Reach Us</h3>{' '}
                    <div>
                      {' '}
                      <a
                        href="https://wa.me/919374356357?text=Hello%20Sir%2FMam%20I%20would%20like%20to%20enquire%20about%20your%20products%20and%20services"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#f1592a] transition-colors"
                      >
                        +91 9374 356 357
                      </a>
                    </div>{' '}
                    <div>
                      {' '}
                      <a
                        href="mailto:info@keyconcepts.co.in"
                        className="text-gray-600 hover:text-[#f1592a] transition-colors"
                      >
                        info@keyconcepts.co.in
                      </a>
                    </div>
                  </div>
                </motion.div>{' '}
                <motion.div
                  whileHover={{
                    x: 10,
                  }}
                  className="group flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-200"
                >
                  {' '}
                  <div className="relative w-12 h-12 flex-shrink-0">
                    {' '}
                    <div className="w-full h-full bg-gray-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {' '}
                      <Phone className="text-white" size={24} strokeWidth={1.5} />
                    </div>{' '}
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-gray-700" />
                  </div>{' '}
                  <div>
                    {' '}
                    <h3 className="font-semibold text-gray-900 mb-1">For Career Enquire</h3>{' '}
                    <div>
                      {' '}
                      <a
                        href="https://wa.me/919376356357?text=Hello%20Sir%2FMam%20I%20would%20like%20to%20enquire%20about%20career%20opportunities"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#f1592a] transition-colors"
                      >
                        +91 9376 356 357
                      </a>
                    </div>{' '}
                    <div>
                      {' '}
                      <a
                        href="mailto:hr@keyconcepts.co.in"
                        className="text-gray-600 hover:text-[#f1592a] transition-colors"
                      >
                        hr@keyconcepts.co.in
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>{' '}
      <section className="pt-12 bg-white">
        {' '}
        <div className="max-w-full">
          {' '}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="overflow-hidden border border-gray-200"
          >
            {' '}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1106.343275721204!2d72.77929890319963!3d21.141237449811474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04c3673c602d7%3A0xcefa2d39c2268022!2sKey%20Concepts!5e0!3m2!1sen!2sin!4v1772429902290!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{
                border: 0,
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Key Concepts Office Location"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>
    </div>
    </>
  )
}
export { ContactPage }
