import { motion } from "motion/react";
import { 
  ArrowRight,
  Heart,
  Users,
  Rocket,
  Award,
  Coffee,
  Zap,
  Target,
  TrendingUp,
  Globe,
  Code,
  Palette,
  Database,
  Smartphone,
  Settings,
  CheckCircle,
  MapPin,
  Clock,
  Briefcase,
  GraduationCap,
  DollarSign,
  Home,
  Eye,
  X,
  FileText,
  Mail,
  Phone,
  Upload,
  User,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Why Work Here Benefits
const whyWorkHere = [
  {
    icon: Rocket,
    title: "Impactful Work",
    description: "Build products that transform businesses and communities. Your code, your designs, your ideas—they all make a real difference."
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Continuous learning opportunities, mentorship programs, and clear paths for advancement. We invest in your professional development."
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with talented, passionate people who value teamwork, open communication, and mutual respect. No egos, just great collaboration."
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "Experiment with cutting-edge technologies, contribute to open-source, and bring bold ideas to life. We encourage innovation at every level."
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Flexible schedules, remote work options, and a culture that values your well-being. We believe great work happens when you're energized."
  },
  {
    icon: Award,
    title: "Competitive Benefits",
    description: "Competitive salary, health insurance, performance bonuses, and team outings. We take care of our people."
  }
];

// Culture & Values
const cultureValues = [];

// Open Roles
const openRoles = [
  {
    id: 1,
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Surat, India",
    type: "Full-Time",
    icon: Code,
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    description: "Build scalable web applications and APIs for our enterprise clients and specialized platforms."
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    location: "Surat, India / Remote",
    type: "Full-Time",
    icon: Palette,
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems"],
    description: "Craft beautiful, intuitive interfaces that delight users and drive engagement across our product portfolio."
  },
  {
    id: 3,
    title: "Odoo ERP Consultant",
    department: "ERP Services",
    location: "Surat, India",
    type: "Full-Time",
    icon: Settings,
    skills: ["Odoo", "Python", "Business Process", "Implementation", "Training"],
    description: "Lead Odoo ERP implementations, customizations, and provide strategic consulting to enterprise clients."
  },
  {
    id: 4,
    title: "Mobile App Developer",
    department: "Engineering",
    location: "Surat, India",
    type: "Full-Time",
    icon: Smartphone,
    skills: ["React Native", "iOS", "Android", "Firebase", "REST APIs"],
    description: "Develop high-performance mobile applications for iOS and Android using React Native and native technologies."
  },
  {
    id: 5,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Surat, India",
    type: "Full-Time",
    icon: Database,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    description: "Build and maintain cloud infrastructure, automate deployments, and ensure system reliability and scalability."
  },
  {
    id: 6,
    title: "Product Manager",
    department: "Product",
    location: "Surat, India",
    type: "Full-Time",
    icon: Target,
    skills: ["Product Strategy", "Roadmapping", "User Research", "Analytics", "Stakeholder Management"],
    description: "Define product vision, prioritize features, and work cross-functionally to deliver exceptional product experiences."
  }
];

// Perks & Benefits
const perksAndBenefits = [
  { icon: DollarSign, text: "Competitive salary & performance bonuses" },
  { icon: Heart, text: "Health & wellness insurance" },
  { icon: Home, text: "Remote work & flexible hours" },
  { icon: GraduationCap, text: "Learning & development budget" },
  { icon: Coffee, text: "Free snacks & beverages" },
  { icon: Users, text: "Team outings & events" },
  { icon: Briefcase, text: "Modern work equipment" },
  { icon: Award, text: "Recognition & rewards program" }
];

// Culture Gallery Images
const cultureImages = [
  {
    url: "https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Team Collaboration"
  },
  {
    url: "https://images.unsplash.com/photo-1758873272809-7947b9a73fe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Creative Brainstorming"
  },
  {
    url: "https://images.unsplash.com/photo-1693386556810-43d9451bdda5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Diverse Team"
  },
  {
    url: "https://images.unsplash.com/photo-1765648580890-732fa6d769c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Modern Workspace"
  },
  {
    url: "https://images.unsplash.com/photo-1758691737584-a8f17fb34475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Team Celebration"
  },
  {
    url: "https://images.unsplash.com/photo-1632910121591-29e2484c0259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Coding Together"
  }
];

// Custom Arrow Components
function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full shadow-xl border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-[#f1592a] hover:text-white hover:border-[#f1592a] transition-all"
    >
      <ArrowRight size={24} strokeWidth={2} />
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full shadow-xl border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-[#f1592a] hover:text-white hover:border-[#f1592a] transition-all"
    >
      <ArrowRight size={24} strokeWidth={2} />
    </button>
  );
}

// Culture Image Slider Component
function CultureImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div style={{ bottom: "-45px" }}>
        <ul className="flex items-center justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <button className="w-2 h-2 rounded-full bg-gray-300 hover:bg-[#f1592a] transition-all" />
    )
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative px-8"
    >
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
        <Slider {...settings}>
          {cultureImages.map((image, index) => (
            <div key={index} className="relative">
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          ))}
        </Slider>
      </div>

      {/* Floating Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="absolute -bottom-6 -left-2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-6"
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-xl flex items-center justify-center">
            <Users className="text-white" size={24} />
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">50+</div>
            <div className="text-sm text-gray-600">Team Members</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="absolute -top-6 -right-2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-6"
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-[#f1592a] to-[#ff7a45] rounded-xl flex items-center justify-center">
            <Award className="text-white" size={24} />
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">4.8/5</div>
            <div className="text-sm text-gray-600">Employee Rating</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function CareersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const openModal = (role) => {
    setSelectedRole(role);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedRole(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -right-32 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-32 w-96 h-96 bg-[#f1592a]/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#f1592a]/20 shadow-lg mb-6"
              >
                <Briefcase className="text-[#f1592a]" size={18} />
                <span className="text-sm font-medium text-gray-700">
                  We're Hiring!
                </span>
              </motion.span>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Build Your Career with{" "}
                <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                  Key Concepts
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-600 mb-8 leading-relaxed"
              >
                Join a team of passionate builders, designers, and problem-solvers who are 
                architecting the digital future. We're on a mission to transform businesses through 
                innovative technology—and we want you to be part of it.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href="#open-roles"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/50 transition-all flex items-center justify-center space-x-2"
                >
                  <span className="font-semibold">View Open Roles</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </motion.a>

                <motion.a
                  href="#why-work-here"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full border-2 border-gray-200 hover:border-[#f1592a] transition-all shadow-lg"
                >
                  <span className="font-semibold">Learn More</span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right: Image Slider */}
            <div className="relative">
              <CultureImageSlider />
            </div>
          </div>
        </div>
      </section>

      {/* Why Work Here */}
      <section id="why-work-here" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why Work at{" "}
              <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                Key Concepts
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're building more than products—we're building careers, relationships, and a culture 
              that celebrates growth, innovation, and collaboration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyWorkHere.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-gradient-to-b from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-[#f1592a]/30 hover:shadow-xl transition-all"
              >
                <div className="relative w-14 h-14 mb-6">
                  <div className="w-full h-full bg-white rounded-xl flex items-center justify-center border border-gray-200 group-hover:border-[#f1592a]/30 transition-all shadow-sm">
                    <benefit.icon className="text-gray-700 group-hover:text-[#f1592a] transition-colors" size={28} strokeWidth={1.5} />
                  </div>
                  <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 bg-[#f1592a] rounded-full border-2 border-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Process */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                Culture & Values
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These aren't just words on a wall—they're the principles that guide how we work, 
              collaborate, and deliver value every single day.
            </p>
          </motion.div>

          {/* Culture Values Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {cultureValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-6"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#f1592a]/10 to-[#ff7a45]/10 rounded-2xl flex items-center justify-center border border-[#f1592a]/20">
                  <value.icon className="text-[#f1592a]" size={28} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process / How We Work */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-gray-200 shadow-xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  How We Work
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-[#f1592a] flex-shrink-0 mt-1" size={20} strokeWidth={2} />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Agile Sprints</h4>
                      <p className="text-gray-600">Two-week development cycles with daily standups and continuous delivery.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-[#f1592a] flex-shrink-0 mt-1" size={20} strokeWidth={2} />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Code Reviews</h4>
                      <p className="text-gray-600">Peer reviews for quality, knowledge sharing, and continuous improvement.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-[#f1592a] flex-shrink-0 mt-1" size={20} strokeWidth={2} />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Design Thinking</h4>
                      <p className="text-gray-600">User-centered approach with prototyping, testing, and iterative refinement.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-[#f1592a] flex-shrink-0 mt-1" size={20} strokeWidth={2} />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Knowledge Sharing</h4>
                      <p className="text-gray-600">Weekly tech talks, documentation culture, and cross-functional learning sessions.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758873272809-7947b9a73fe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Team Collaboration"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Perks &{" "}
              <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                Benefits
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We take care of our team so they can focus on doing their best work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {perksAndBenefits.map((perk, index) => (
              <motion.div
                key={perk.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#f1592a]/30 transition-all"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                  <perk.icon className="text-[#f1592a]" size={20} strokeWidth={2} />
                </div>
                <span className="text-sm text-gray-700 font-medium">{perk.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="open-roles" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Open{" "}
              <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                Positions
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join our team and help us build the future of digital transformation.
            </p>
          </motion.div>

          <div className="space-y-4 max-w-6xl mx-auto">
            {openRoles.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white rounded-2xl border border-gray-200 hover:border-[#f1592a]/30 hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  {/* Left: Job Info */}
                  <div className="flex items-start space-x-4 flex-1">
                    {/* Icon */}
                    

                    {/* Job Details */}
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                        {role.title}
                      </h3>
                      
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-3">
                        <span className="flex items-center space-x-1">
                          <Briefcase size={14} strokeWidth={2} />
                          <span>{role.department}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center space-x-1">
                          <MapPin size={14} strokeWidth={2} />
                          <span>{role.location}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center space-x-1">
                          <Clock size={14} strokeWidth={2} />
                          <span>{role.type}</span>
                        </span>
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-4">
                        {role.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {role.skills.slice(0, 4).map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium border border-gray-200"
                          >
                            {skill}
                          </span>
                        ))}
                        {role.skills.length > 4 && (
                          <span className="px-3 py-1 text-gray-500 text-xs font-medium">
                            +{role.skills.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right: Action Buttons */}
                  <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:min-w-[140px]">
                    <Link to={`/careers/${role.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-white text-gray-700 border-2 border-gray-200 rounded-xl hover:border-[#f1592a] hover:text-[#f1592a] transition-all font-semibold shadow-sm hover:shadow-md"
                      >
                        <Eye size={18} strokeWidth={2} />
                        <span>View</span>
                      </motion.button>
                    </Link>

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => openModal(role)}
                      className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-xl shadow-lg hover:shadow-xl transition-all font-semibold"
                    >
                      <FileText size={18} strokeWidth={2} />
                      <span>Apply</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA Section */}
      <section id="apply" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f1592a]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f1592a]/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <Rocket className="text-[#f1592a]" size={18} />
              <span className="text-sm font-medium text-white">
                Ready to Join Us?
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-[#f1592a] to-[#ff7a45] bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>

            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              Don't see a role that fits? Send us your resume anyway! We're always looking for 
              talented people to join our growing team.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="mailto:careers@keyconcepts.co.in?subject=Job Application"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/50 transition-all flex items-center justify-center space-x-2"
              >
                <span className="font-semibold">Send Your Resume</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.a>

              <motion.a
                href="mailto:careers@keyconcepts.co.in?subject=Question About Careers"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full border-2 border-white/30 hover:border-white/50 transition-all"
              >
                <span className="font-semibold">Have Questions?</span>
              </motion.a>
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 pt-12 border-t border-white/10"
            >
              <p className="text-gray-400 mb-4">Or reach out to us directly:</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white">
                <a href="mailto:careers@keyconcepts.co.in" className="flex items-center space-x-2 hover:text-[#f1592a] transition-colors">
                  <MapPin size={18} />
                  <span>careers@keyconcepts.co.in</span>
                </a>
                <span className="hidden sm:block text-gray-600">|</span>
                <a href="tel:+919374356357" className="flex items-center space-x-2 hover:text-[#f1592a] transition-colors">
                  <MapPin size={18} />
                  <span>+91 9374 356 357</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-4xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Apply for {selectedRole?.title}
              </h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                <X size={24} />
              </button>
            </div>

            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f1592a] focus:border-[#f1592a] sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f1592a] focus:border-[#f1592a] sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f1592a] focus:border-[#f1592a] sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">LinkedIn Profile</label>
                  <input
                    type="url"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f1592a] focus:border-[#f1592a] sm:text-sm"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Cover Letter</label>
                  <textarea
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f1592a] focus:border-[#f1592a] sm:text-sm"
                    rows={4}
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Resume</label>
                  <div className="mt-1 flex items-center">
                    <input
                      type="file"
                      className="sr-only"
                      id="resume"
                    />
                    <label
                      htmlFor="resume"
                      className="inline-flex items-center px-4 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f1592a]"
                    >
                      <Upload size={16} className="mr-2" />
                      Upload Resume
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/50 transition-all font-semibold"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}