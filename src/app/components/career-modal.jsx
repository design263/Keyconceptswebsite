import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { motion, AnimatePresence } from "motion/react";
import { X, Mail, Phone, User, FileText, Briefcase, Upload } from "lucide-react";
import { useState } from "react";
function CareerModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    coverLetter: "",
    resume: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        coverLetter: "",
        resume: null
      });
      setSubmitSuccess(false);
      onClose();
    }, 2e3);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setFormData({
      ...formData,
      resume: file
    });
  };
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: onClose,
        className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.9, y: 20 },
        transition: { type: "spring", duration: 0.5 },
        className: "relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl pointer-events-auto max-h-[90vh] overflow-y-auto",
        onClick: (e) => e.stopPropagation(),
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: onClose,
              className: "absolute top-3 right-3 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10",
              children: /* @__PURE__ */ jsx(X, { className: "text-gray-600", size: 18 })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-br from-[#f1592a] to-[#ff7a45] p-5 md:p-6 rounded-t-2xl", children: /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.2 },
              children: [
                /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-2xl font-bold text-white mb-1.5", children: "Join Our Team" }),
                /* @__PURE__ */ jsx("p", { className: "text-white/90 text-xs md:text-sm", children: "Start your career journey with Key Concepts" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "p-5 md:p-6", children: submitSuccess ? /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              className: "text-center py-8",
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "w-8 h-8 text-green-600",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M5 13l4 4L19 7"
                      }
                    )
                  }
                ) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Application Received!" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: "Thank you for your interest. We'll review your application and get back to you soon." })
              ]
            }
          ) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(
                  "label",
                  {
                    htmlFor: "name",
                    className: "block text-xs font-semibold text-gray-700 mb-1.5",
                    children: "Full Name *"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx(
                    User,
                    {
                      className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",
                      size: 18
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      id: "name",
                      name: "name",
                      required: true,
                      value: formData.name,
                      onChange: handleChange,
                      className: "w-full pl-10 pr-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-transparent transition-all",
                      placeholder: "John Doe"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(
                  "label",
                  {
                    htmlFor: "email",
                    className: "block text-xs font-semibold text-gray-700 mb-1.5",
                    children: "Email Address *"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx(
                    Mail,
                    {
                      className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",
                      size: 18
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "email",
                      id: "email",
                      name: "email",
                      required: true,
                      value: formData.email,
                      onChange: handleChange,
                      className: "w-full pl-10 pr-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-transparent transition-all",
                      placeholder: "john@example.com"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(
                  "label",
                  {
                    htmlFor: "phone",
                    className: "block text-xs font-semibold text-gray-700 mb-1.5",
                    children: "Phone Number *"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx(
                    Phone,
                    {
                      className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",
                      size: 18
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "tel",
                      id: "phone",
                      name: "phone",
                      required: true,
                      value: formData.phone,
                      onChange: handleChange,
                      className: "w-full pl-10 pr-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-transparent transition-all",
                      placeholder: "+1 (555) 000-0000"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(
                  "label",
                  {
                    htmlFor: "position",
                    className: "block text-xs font-semibold text-gray-700 mb-1.5",
                    children: "Position Applying For *"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx(
                    Briefcase,
                    {
                      className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",
                      size: 18
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "select",
                    {
                      id: "position",
                      name: "position",
                      required: true,
                      value: formData.position,
                      onChange: handleChange,
                      className: "w-full pl-10 pr-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-transparent transition-all appearance-none",
                      children: [
                        /* @__PURE__ */ jsx("option", { value: "", children: "Select a position" }),
                        /* @__PURE__ */ jsx("option", { value: "frontend-developer", children: "Frontend Developer" }),
                        /* @__PURE__ */ jsx("option", { value: "backend-developer", children: "Backend Developer" }),
                        /* @__PURE__ */ jsx("option", { value: "fullstack-developer", children: "Full Stack Developer" }),
                        /* @__PURE__ */ jsx("option", { value: "ui-ux-designer", children: "UI/UX Designer" }),
                        /* @__PURE__ */ jsx("option", { value: "project-manager", children: "Project Manager" }),
                        /* @__PURE__ */ jsx("option", { value: "business-analyst", children: "Business Analyst" }),
                        /* @__PURE__ */ jsx("option", { value: "odoo-developer", children: "Odoo Developer" }),
                        /* @__PURE__ */ jsx("option", { value: "other", children: "Other" })
                      ]
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(
                  "label",
                  {
                    htmlFor: "experience",
                    className: "block text-xs font-semibold text-gray-700 mb-1.5",
                    children: "Years of Experience *"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx(
                    FileText,
                    {
                      className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",
                      size: 18
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "select",
                    {
                      id: "experience",
                      name: "experience",
                      required: true,
                      value: formData.experience,
                      onChange: handleChange,
                      className: "w-full pl-10 pr-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-transparent transition-all appearance-none",
                      children: [
                        /* @__PURE__ */ jsx("option", { value: "", children: "Select experience level" }),
                        /* @__PURE__ */ jsx("option", { value: "0-1", children: "0-1 years (Fresher)" }),
                        /* @__PURE__ */ jsx("option", { value: "1-3", children: "1-3 years" }),
                        /* @__PURE__ */ jsx("option", { value: "3-5", children: "3-5 years" }),
                        /* @__PURE__ */ jsx("option", { value: "5-8", children: "5-8 years" }),
                        /* @__PURE__ */ jsx("option", { value: "8+", children: "8+ years" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(
                  "label",
                  {
                    htmlFor: "resume",
                    className: "block text-xs font-semibold text-gray-700 mb-1.5",
                    children: "Upload Resume *"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx(
                    Upload,
                    {
                      className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10",
                      size: 18
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "file",
                      id: "resume",
                      name: "resume",
                      required: true,
                      onChange: handleFileChange,
                      className: "w-full pl-10 pr-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-transparent transition-all file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:bg-[#f1592a] file:text-white hover:file:bg-[#d94d24] file:cursor-pointer",
                      accept: ".pdf,.doc,.docx"
                    }
                  )
                ] }),
                formData.resume && /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-500 mt-1", children: [
                  "Selected: ",
                  formData.resume.name
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "coverLetter",
                  className: "block text-xs font-semibold text-gray-700 mb-1.5",
                  children: "Why do you want to join us? *"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx(
                  FileText,
                  {
                    className: "absolute left-3 top-3 text-gray-400",
                    size: 18
                  }
                ),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    id: "coverLetter",
                    name: "coverLetter",
                    required: true,
                    value: formData.coverLetter,
                    onChange: handleChange,
                    rows: 3,
                    className: "w-full pl-10 pr-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-transparent transition-all resize-none",
                    placeholder: "Tell us about yourself and why you're interested..."
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              motion.button,
              {
                type: "submit",
                disabled: isSubmitting,
                whileHover: { scale: isSubmitting ? 1 : 1.02 },
                whileTap: { scale: isSubmitting ? 1 : 0.98 },
                className: `w-full py-3 text-sm bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`,
                children: isSubmitting ? /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-center", children: [
                  /* @__PURE__ */ jsxs(
                    "svg",
                    {
                      className: "animate-spin -ml-1 mr-3 h-4 w-4 text-white",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      children: [
                        /* @__PURE__ */ jsx(
                          "circle",
                          {
                            className: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            strokeWidth: "4"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "path",
                          {
                            className: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          }
                        )
                      ]
                    }
                  ),
                  "Submitting..."
                ] }) : "Submit Application"
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-center text-xs text-gray-500 pt-1", children: "We respect your privacy. Your information will never be shared." })
          ] }) })
        ]
      }
    ) })
  ] }) });
}
export {
  CareerModal
};
