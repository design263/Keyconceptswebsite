import { motion, AnimatePresence } from "motion/react";
import { X, Mail, Phone, User, FileText, Briefcase, Upload } from "lucide-react";
import { useState, FormEvent } from "react";

interface CareerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CareerModal({ isOpen, onClose }: CareerModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    coverLetter: "",
    resume: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        coverLetter: "",
        resume: null,
      });
      setSubmitSuccess(false);
      onClose();
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({
      ...formData,
      resume: file,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl pointer-events-auto max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <X className="text-gray-600" size={18} />
              </button>

              {/* Header */}
              <div className="bg-gradient-to-br from-[#f1592a] to-[#ff7a45] p-5 md:p-6 rounded-t-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-1.5">
                    Apply for This Role
                  </h2>
                  <p className="text-white/90 text-xs md:text-sm">
                    Our team will review your application and be in touch.
                  </p>
                </motion.div>
              </div>

              {/* Form */}
              <div className="p-5 md:p-6">
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg
                        className="w-8 h-8 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Application Received!
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Thank you for applying! Our team will review your application and be in touch.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Row 1: Name and Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-semibold text-gray-700 mb-1.5"
                        >
                          Full Name *
                        </label>
                        <div className="relative">
                          <User
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            size={18}
                          />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-transparent transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-semibold text-gray-700 mb-1.5"
                        >
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            size={18}
                          />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-transparent transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Phone and Position */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-semibold text-gray-700 mb-1.5"
                        >
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            size={18}
                          />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-transparent transition-all"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>

                      {/* Position */}
                      <div>
                        <label
                          htmlFor="position"
                          className="block text-xs font-semibold text-gray-700 mb-1.5"
                        >
                          Position Applying For *
                        </label>
                        <div className="relative">
                          <Briefcase
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            size={18}
                          />
                          <select
                            id="position"
                            name="position"
                            required
                            value={formData.position}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-transparent transition-all appearance-none"
                          >
                            <option value="">Select a position</option>
                            <option value="frontend-developer">Frontend Developer</option>
                            <option value="backend-developer">Backend Developer</option>
                            <option value="fullstack-developer">Full Stack Developer</option>
                            <option value="ui-ux-designer">UI/UX Designer</option>
                            <option value="project-manager">Project Manager</option>
                            <option value="business-analyst">Business Analyst</option>
                            <option value="odoo-developer">Odoo Developer</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Experience and Resume */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Experience */}
                      <div>
                        <label
                          htmlFor="experience"
                          className="block text-xs font-semibold text-gray-700 mb-1.5"
                        >
                          Years of Experience *
                        </label>
                        <div className="relative">
                          <FileText
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            size={18}
                          />
                          <select
                            id="experience"
                            name="experience"
                            required
                            value={formData.experience}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-transparent transition-all appearance-none"
                          >
                            <option value="">Select experience level</option>
                            <option value="0-1">0-1 years (Fresher)</option>
                            <option value="1-3">1-3 years</option>
                            <option value="3-5">3-5 years</option>
                            <option value="5-8">5-8 years</option>
                            <option value="8+">8+ years</option>
                          </select>
                        </div>
                      </div>

                      {/* Resume Upload */}
                      <div>
                        <label
                          htmlFor="resume"
                          className="block text-xs font-semibold text-gray-700 mb-1.5"
                        >
                          Upload Resume *
                        </label>
                        <div className="relative">
                          <Upload
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10"
                            size={18}
                          />
                          <input
                            type="file"
                            id="resume"
                            name="resume"
                            required
                            onChange={handleFileChange}
                            className="w-full pl-10 pr-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-transparent transition-all file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:bg-[#f1592a] file:text-white hover:file:bg-[#d94d24] file:cursor-pointer"
                            accept=".pdf,.doc,.docx"
                          />
                        </div>
                        {formData.resume && (
                          <p className="text-xs text-gray-500 mt-1">
                            Selected: {formData.resume.name}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Cover Letter - Full Width */}
                    <div>
                      <label
                        htmlFor="coverLetter"
                        className="block text-xs font-semibold text-gray-700 mb-1.5"
                      >
                        Why do you want to join us? *
                      </label>
                      <div className="relative">
                        <FileText
                          className="absolute left-3 top-3 text-gray-400"
                          size={18}
                        />
                        <textarea
                          id="coverLetter"
                          name="coverLetter"
                          required
                          value={formData.coverLetter}
                          onChange={handleChange}
                          rows={3}
                          className="w-full pl-10 pr-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-transparent transition-all resize-none"
                          placeholder="Tell us about yourself and why you're interested..."
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className={`w-full py-3 text-sm bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all ${
                        isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        "Submit Application"
                      )}
                    </motion.button>

                    <p className="text-center text-xs text-gray-500 pt-1">
                      We respect your privacy. Your information will never be shared.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}