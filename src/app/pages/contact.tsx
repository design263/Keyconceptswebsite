import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useState } from "react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#f1592a] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-6"
            >
              <MessageSquare size={18} />
              <span>Get in Touch</span>
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We're here to help transform your business with cutting-edge technology solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#f1592a] focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#f1592a] focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#f1592a] focus:outline-none transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#f1592a] focus:outline-none transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#f1592a] focus:outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="erp-solutions">ERP Solutions (Odoo)</option>
                      <option value="web-mobile">Web & Mobile Development</option>
                      <option value="api-integration">API Integration</option>
                      <option value="seo-smo">SEO/SMO Services</option>
                      <option value="ai-solutions">AI-Powered Solutions</option>
                      <option value="cloud-native">Cloud-Native Development</option>
                      <option value="security">Digital Security</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#f1592a] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group w-full px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 font-semibold"
                  >
                    <span>Send Message</span>
                    <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Have questions? We're here to help. Reach out to us through any of these channels.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="group flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <div className="w-full h-full bg-[#f1592a] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="text-white" size={24} strokeWidth={1.5} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-[#f1592a]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600">info@keyconcepts.com</p>
                    <p className="text-gray-600">sales@keyconcepts.com</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="group flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <div className="w-full h-full bg-gray-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="text-white" size={24} strokeWidth={1.5} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="group flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <div className="w-full h-full bg-[#f1592a] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MapPin className="text-white" size={24} strokeWidth={1.5} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-[#f1592a]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-gray-600">
                      123 Tech Street, Innovation Hub,<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Business Hours */}
              <div className="p-6 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-2xl text-white shadow-xl">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-sm text-white/90">
                    24/7 Emergency Support Available
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-96 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="text-gray-400 mx-auto mb-4" size={48} />
            <p className="text-gray-500">Interactive Map Would Be Here</p>
            <p className="text-sm text-gray-400">123 Tech Street, San Francisco, CA 94105</p>
          </div>
        </div>
      </section>
    </div>
  );
}