'use client'

import LayoutWrapper from '@/components/layout-wrapper'
import { motion } from 'motion/react'
import {
  Users,
  Target,
  Award,
  Lightbulb,
  Heart,
  Zap,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import Link from 'next/link'
import { JsonLd } from '@/components/json-ld'
import { organizationSchema } from '@/lib/structured-data'

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We stay ahead of technology trends to deliver cutting-edge solutions for your business growth.',
  },
  {
    icon: Heart,
    title: 'Client-Centric',
    description: 'Your success is our success. We build long-term relationships through trust and transparent delivery.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in every line of code, design asset, and process strategy.',
  },
  {
    icon: Zap,
    title: 'Agility',
    description: 'We adapt quickly to changing market requirements and deliver high-performance solutions.',
  },
]

const team = [
  {
    name: 'Punit Gajera',
    role: 'Founder & CEO',
    initial: 'PG',
    experience: '15+ Years of Industry Experience',
    expertise: 'Enterprise Strategy, Odoo Architecture, Custom Software Consultation & Business Leadership',
  },
  {
    name: 'Prince Prajapati',
    role: 'Head of Development',
    initial: 'PP',
    experience: '10+ Years of Systems Engineering',
    expertise: 'Full-Stack Software Architecture, High-Scale Databases, Cloud Infrastructure & DevOps',
  },
  {
    name: 'Ayushi Mehta',
    role: 'Team Leader',
    initial: 'AM',
    experience: '8+ Years of Web Engineering',
    expertise: 'Modern Web Solutions, Quality Assurance Systems, Client Onboarding & Project Management',
  },
  {
    name: 'Jay Dhimmar',
    role: 'Product Manager',
    initial: 'JD',
    experience: '7+ Years of Agile Product Delivery',
    expertise: 'Agile Methodologies, UI/UX Strategy, Product Roadmaps & Client Relationship Success',
  },
]

const milestones = [
  {
    year: '2009',
    title: 'Company Inception',
    description: 'Key Concepts was founded as a bespoke software and web development company in Surat, starting with a core team of talented developers and a vision to bridge the gap between business processes and digital solutions.',
  },
  {
    year: '2013',
    title: 'Services & Operations Scale',
    description: 'Expanded capabilities to cover custom mobile app development (iOS & Android) and robust corporate web portal architectures, building custom systems for high-growth enterprises.',
  },
  {
    year: '2017',
    title: 'Official Odoo ERP Partner',
    description: 'Achieved official Odoo Partnership status, expanding our custom software engineering to include business-critical enterprise ERP & CRM implementations with end-to-end integration and support.',
  },
  {
    year: '2021',
    title: 'Next-Gen Cloud & AI Integration',
    description: 'Adopted cloud-native technologies, next-gen SaaS frameworks, and custom AI integrations to help businesses scale and adapt dynamically to modern tech standards.',
  },
  {
    year: '2026',
    title: 'Present & Beyond',
    description: 'Recognized as a leading IT company and trusted software development partner, serving 500+ global clients across 15+ countries with a high-performing team of engineers.',
  },
]

export default function AboutPage() {
  return (
    <LayoutWrapper>
      <JsonLd data={organizationSchema()} />
      <div className="pt-20">
        
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#f1592a] rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="max-w-4xl mx-auto text-center"
            >
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
                className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full md:text-sm text-xs font-semibold mb-6"
              >
                About Key Concepts
              </motion.span>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                Leading Software Development Company & IT Partner Since 2009
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                We are a team of passionate technologists dedicated to helping businesses thrive in the
                digital age. As a premier software company, we build custom applications, enterprise ERP networks, and high-performance digital products that scale.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Story Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{
                  opacity: 0,
                  x: -50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
              >
                <span className="inline-block text-[#f1592a] text-sm font-bold uppercase tracking-wider mb-2">Our History</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                  Our Journey as a Software Company
                </h2>
                <div className="space-y-6 text-md md:text-lg text-gray-600 leading-relaxed">
                  <p>
                    Established in 2009, Key Concepts was built on a singular vision: to deliver world-class digital systems and custom software engineering. As a full-service <strong>Software Development Company</strong>, we bridge the gap between complex business processes and cutting-edge technology.
                  </p>
                  <p>
                    Over the last 16+ years, our <strong>IT Company</strong> has empowered more than 500 businesses globally to scale, streamline, and adapt. We build high-performance custom software, bespoke ERP & CRM platforms, native mobile applications, and cloud-native web architectures.
                  </p>
                  <p>
                    As a verified official Odoo Partner, we design and implement integrated ERP solutions that optimize day-to-day enterprise efficiency. Our dedication to digital transformation makes us a trusted <strong>Software Company</strong> partner for fast-growing startups and established market enterprises alike.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  x: 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                className="relative"
              >
                <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
                    alt="Key Concepts developer team collaboration"
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#f1592a]/20 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                className="relative group"
              >
                <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-lg border border-white/60 hover:shadow-2xl transition-all h-full">
                  <div className="relative md:w-16 md:h-16 w-14 h-14 mb-6 group-hover:scale-110 transition-transform">
                    <div className="w-full h-full bg-[#f1592a] rounded-2xl flex items-center justify-center">
                      <Target className="text-white w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full border-2 border-[#f1592a]" />
                  </div>
                  <h3 className="md:text-3xl text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
                  <p className="text-md md:text-lg text-gray-600 leading-relaxed">
                    To empower businesses with innovative technology solutions that drive growth,
                    efficiency, and competitive advantage in an ever-evolving digital landscape. We focus on delivering real business impact through clean software, predictable timelines, and modern architectures.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.2,
                }}
                className="relative group"
              >
                <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-lg border border-white/60 hover:shadow-2xl transition-all h-full">
                  <div className="relative md:w-16 md:h-16 w-14 h-14 mb-6 group-hover:scale-110 transition-transform">
                    <div className="w-full h-full bg-gray-700 rounded-2xl flex items-center justify-center">
                      <Users className="text-white w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full border-2 border-gray-700" />
                  </div>
                  <h3 className="md:text-3xl text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
                  <p className="text-md md:text-lg text-gray-600 leading-relaxed">
                    To be the leading global IT solutions provider recognized for engineering excellence, product innovation, and transformative business impact. We aim to shape the future of enterprise software, helping companies harness AI, Cloud, and ERP integrations effectively.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Journey / Timeline Section */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-[#ff7a45]/10 text-[#f1592a] rounded-full text-xs font-semibold mb-4">
                Our Evolution
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
                Highlighting Our Company Journey
              </h2>
              <p className="text-md lg:text-lg text-gray-600 max-w-2xl mx-auto">
                How we grew from a local startup into a premier global software development company.
              </p>
            </motion.div>

            <div className="relative max-w-5xl mx-auto">
              {/* Central timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#f1592a] via-gray-200 to-gray-200" />

              <div className="space-y-12">
                {milestones.map((item, index) => (
                  <div
                    key={item.year}
                    className={`flex flex-col md:flex-row items-stretch relative ${
                      index % 2 === 0 ? '' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 transform -translate-x-[7px] md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#f1592a] border-4 border-white shadow-md z-10 top-6" />

                    {/* Left side card space (hidden on mobile, placeholder on desktop) */}
                    <div className="hidden md:block w-1/2 px-8" />

                    {/* Content card */}
                    <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 relative group hover:border-[#f1592a]/20"
                      >
                        <span className="inline-block text-4xl font-extrabold text-[#f1592a]/20 mb-2 font-mono group-hover:text-[#f1592a]/30 transition-colors">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#f1592a] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-md">
                          {item.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="text-center mb-16"
            >
              <span className="inline-block text-[#f1592a] text-sm font-bold uppercase tracking-wider mb-2">Our Foundation</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Our Core Values</h2>
              <p className="text-md lg:text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide every software engineer and consultant at Key Concepts
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  className="group text-center"
                  key={value.title}
                >
                  <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-[#f1592a]/20 h-full flex flex-col justify-between">
                    <div>
                      <div className="relative md:w-16 md:h-16 w-14 h-14 mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <div className="w-full h-full bg-gray-50 rounded-xl flex items-center justify-center">
                          <value.icon className="text-gray-700 w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#f1592a] rounded-full border-2 border-white" />
                      </div>
                      <h3 className="md:text-xl text-lg font-bold mb-3 text-gray-900">{value.title}</h3>
                      <p className="text-gray-600 text-md leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership & Expertise Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="text-center mb-16"
            >
              <span className="inline-block text-[#f1592a] text-sm font-bold uppercase tracking-wider mb-2">Our People</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Showcase Leadership & Expertise</h2>
              <p className="text-md lg:text-lg text-gray-600 max-w-2xl mx-auto">
                Experienced professionals dedicated to your technical success and project execution
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  className="group"
                  key={member.name}
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white hover:from-white hover:to-white rounded-3xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:border-[#f1592a]/20 hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-extrabold mx-auto mb-6 shadow-md shadow-[#f1592a]/20 group-hover:scale-105 transition-transform duration-300">
                        {member.initial}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 text-center mb-1 group-hover:text-[#f1592a] transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-sm font-semibold text-gray-500 text-center mb-4">{member.role}</p>
                      
                      <div className="border-t border-gray-100 pt-4 mt-2">
                        <p className="text-xs text-[#f1592a] font-bold uppercase tracking-wider mb-2">{member.experience}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{member.expertise}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  value: '16+',
                  label: 'Years of Excellence',
                },
                {
                  value: '500+',
                  label: 'Projects Delivered',
                },
                {
                  value: '150+',
                  label: 'Enterprise Clients',
                },
                {
                  value: '98%',
                  label: 'Client Satisfaction',
                },
              ].map((stat, index) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="text-center"
                  key={index}
                >
                  <div className="text-3xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/80 text-md md:text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Signals & Partnerships */}
        <section className="py-16 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: ShieldCheck,
                  title: 'Partner Verified',
                  desc: 'Official Odoo Partner status ensuring certified custom CRM & ERP implementations.'
                },
                {
                  icon: CheckCircle2,
                  title: 'Quality Execution',
                  desc: 'Agile project delivery framework with rigorous QA testing and zero-defect focus.'
                },
                {
                  icon: Award,
                  title: 'Proven Success',
                  desc: 'Over 500+ successful deployments for enterprise clients globally since 2009.'
                },
                {
                  icon: Users,
                  title: 'In-House Talent',
                  desc: '100% in-house software engineers and designers. Secure NDA compliance.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                    <item.icon className="text-[#f1592a] w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Consultation CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#f1592a] rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <Sparkles className="text-white w-4 h-4" />
                <span className="text-xs md:text-sm text-white font-medium">Free Strategic Roadmap</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Partner with a Trusted Software Company
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                Ready to start your digital transformation journey? Let's discuss how our custom software solutions, ERP modules, and mobile app engineering can accelerate your business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/50 transition-all flex items-center justify-center space-x-2 font-semibold text-base md:text-lg cursor-pointer"
                  >
                    <span>Schedule a Free Consultation</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </LayoutWrapper>
  )
}
