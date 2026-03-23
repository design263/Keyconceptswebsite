import { motion } from 'motion/react'
import {
  ArrowLeft,
  MapPin,
  Clock,
  Briefcase,
  DollarSign,
  Users,
  CheckCircle,
  FileText,
  Share2,
  Bookmark,
} from 'lucide-react'
import { Link, useParams } from 'react-router'
import { useState } from 'react'
import { Code, Palette, Database, Smartphone, Settings, Target } from 'lucide-react'
const jobData = [
  {
    id: '1',
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Surat, India',
    type: 'Full-Time',
    icon: Code,
    salary: '\u20B96-12 LPA',
    experience: '2-5 years',
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    description:
      'Build scalable web applications and APIs for our enterprise clients and specialized platforms.',
    responsibilities: [
      'Design and develop full-stack web applications using React, Node.js, and TypeScript',
      'Build and maintain RESTful APIs and microservices architecture',
      'Implement responsive, accessible UI components with modern design patterns',
      'Optimize application performance, scalability, and security',
      'Collaborate with product managers, designers, and engineers to deliver features',
      'Write clean, maintainable, and well-documented code',
      'Participate in code reviews and contribute to technical decisions',
      'Mentor junior developers and contribute to team knowledge sharing',
    ],
    requirements: [
      '2+ years of professional experience in full-stack web development',
      'Strong proficiency in React, Node.js, and TypeScript',
      'Experience with relational databases (PostgreSQL, MySQL)',
      'Familiarity with cloud platforms (AWS, Azure, or GCP)',
      'Understanding of RESTful API design and microservices architecture',
      'Experience with Git, CI/CD, and modern development workflows',
      'Excellent problem-solving and communication skills',
      "Bachelor's degree in Computer Science or related field (or equivalent experience)",
    ],
    niceToHave: [
      'Experience with React frameworks (Next.js, Remix)',
      'Knowledge of GraphQL and modern state management (Redux, Zustand)',
      'Familiarity with Docker, Kubernetes, and containerization',
      'Experience with Odoo ERP or similar enterprise platforms',
      'Contributions to open-source projects',
      'Experience with test-driven development (TDD)',
    ],
    benefits: [
      'Competitive salary with performance bonuses',
      'Health & wellness insurance',
      'Flexible work hours and remote work options',
      'Learning & development budget (courses, conferences)',
      'Modern work equipment (MacBook, monitors, etc.)',
      'Team outings and company events',
      'Career growth and mentorship opportunities',
    ],
  },
  {
    id: '2',
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Surat, India / Remote',
    type: 'Full-Time',
    icon: Palette,
    salary: '\u20B95-10 LPA',
    experience: '2-4 years',
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design Systems'],
    description:
      'Craft beautiful, intuitive interfaces that delight users and drive engagement across our product portfolio.',
    responsibilities: [
      'Design intuitive, user-centered interfaces for web and mobile applications',
      'Conduct user research, interviews, and usability testing to inform design decisions',
      'Create wireframes, prototypes, and high-fidelity mockups using Figma and Adobe XD',
      'Develop and maintain design systems, component libraries, and style guides',
      'Collaborate with product managers and engineers to ship features',
      'Present design concepts and rationale to stakeholders',
      'Stay up-to-date with design trends, tools, and best practices',
      'Advocate for user needs and accessibility standards',
    ],
    requirements: [
      '2+ years of experience in UI/UX design for web and mobile applications',
      'Strong portfolio demonstrating user-centered design thinking',
      'Proficiency in Figma, Adobe XD, and prototyping tools',
      'Experience with user research methods and usability testing',
      'Understanding of accessibility standards (WCAG) and responsive design',
      'Excellent visual design skills (typography, color, layout)',
      'Strong communication and presentation skills',
      "Bachelor's degree in Design, HCI, or related field (or equivalent experience)",
    ],
    niceToHave: [
      'Experience designing enterprise SaaS or B2B products',
      'Knowledge of HTML/CSS and front-end development basics',
      'Familiarity with design tokens and design system architecture',
      'Experience with motion design and micro-interactions',
      'Understanding of design thinking and service design',
      'Experience with user analytics tools (Hotjar, Mixpanel)',
    ],
    benefits: [
      'Competitive salary with performance bonuses',
      'Health & wellness insurance',
      'Flexible work hours and remote work options',
      'Learning & development budget (courses, conferences)',
      'Modern work equipment (MacBook, monitors, etc.)',
      'Team outings and company events',
      'Career growth and mentorship opportunities',
    ],
  },
  {
    id: '3',
    title: 'Odoo ERP Consultant',
    department: 'ERP Services',
    location: 'Surat, India',
    type: 'Full-Time',
    icon: Settings,
    salary: '\u20B95-10 LPA',
    experience: '2-4 years',
    skills: ['Odoo', 'Python', 'Business Process', 'Implementation', 'Training'],
    description:
      'Lead Odoo ERP implementations, customizations, and provide strategic consulting to enterprise clients.',
    responsibilities: [
      'Lead end-to-end Odoo ERP implementation projects for enterprise clients',
      'Analyze client business processes and recommend Odoo modules and configurations',
      'Customize Odoo modules using Python, XML, and JavaScript',
      'Integrate Odoo with third-party systems and APIs',
      'Provide training and support to clients on Odoo best practices',
      'Troubleshoot technical issues and optimize system performance',
      'Document implementation processes, customizations, and workflows',
      'Stay updated with Odoo releases and new features',
    ],
    requirements: [
      '2+ years of experience with Odoo ERP (implementation or consulting)',
      'Strong understanding of business processes (Sales, Inventory, Accounting, CRM)',
      'Proficiency in Python and Odoo framework development',
      'Experience with Odoo modules customization and development',
      'Ability to gather requirements and translate them into technical solutions',
      'Excellent client-facing and communication skills',
      'Problem-solving mindset and attention to detail',
      "Bachelor's degree in IT, Business, or related field",
    ],
    niceToHave: [
      'Odoo certification or official training',
      'Experience with PostgreSQL database administration',
      'Knowledge of front-end technologies (JavaScript, XML, QWeb)',
      'Experience with Odoo migration and upgrades',
      'Familiarity with DevOps and deployment practices',
      'Understanding of manufacturing or e-commerce workflows',
    ],
    benefits: [
      'Competitive salary with performance bonuses',
      'Health & wellness insurance',
      'Flexible work hours',
      'Learning & development budget (courses, conferences)',
      'Modern work equipment',
      'Team outings and company events',
      'Career growth and mentorship opportunities',
    ],
  },
  {
    id: '4',
    title: 'Mobile App Developer',
    department: 'Engineering',
    location: 'Surat, India',
    type: 'Full-Time',
    icon: Smartphone,
    salary: '\u20B96-12 LPA',
    experience: '2-5 years',
    skills: ['React Native', 'iOS', 'Android', 'Firebase', 'REST APIs'],
    description:
      'Develop high-performance mobile applications for iOS and Android using React Native and native technologies.',
    responsibilities: [
      'Develop cross-platform mobile applications using React Native',
      'Build native modules and bridge native code when needed (iOS/Android)',
      'Implement responsive, performant UI components with smooth animations',
      'Integrate with RESTful APIs and third-party services',
      'Optimize app performance, memory usage, and battery consumption',
      'Implement push notifications, deep linking, and offline capabilities',
      'Write unit and integration tests for mobile applications',
      'Collaborate with designers and backend engineers to deliver features',
    ],
    requirements: [
      '2+ years of experience in mobile app development with React Native',
      'Strong proficiency in JavaScript/TypeScript and React',
      'Experience with iOS and Android native development (Swift/Kotlin)',
      'Familiarity with mobile app architecture patterns (MVVM, Redux)',
      'Understanding of mobile UI/UX best practices',
      'Experience with Firebase, push notifications, and analytics',
      'Knowledge of app store submission and release processes',
      "Bachelor's degree in Computer Science or related field",
    ],
    niceToHave: [
      'Experience with Expo and React Navigation',
      'Knowledge of native performance optimization techniques',
      'Familiarity with GraphQL and real-time data synchronization',
      'Experience with CI/CD for mobile apps (Fastlane, CodePush)',
      'Understanding of mobile security best practices',
      'Published apps in App Store and Google Play',
    ],
    benefits: [
      'Competitive salary with performance bonuses',
      'Health & wellness insurance',
      'Flexible work hours and remote work options',
      'Learning & development budget (courses, conferences)',
      'Modern work equipment (MacBook, monitors, etc.)',
      'Team outings and company events',
      'Career growth and mentorship opportunities',
    ],
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Surat, India',
    type: 'Full-Time',
    icon: Database,
    salary: '\u20B97-14 LPA',
    experience: '3-6 years',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    description:
      'Build and maintain cloud infrastructure, automate deployments, and ensure system reliability and scalability.',
    responsibilities: [
      'Design, build, and maintain cloud infrastructure on AWS',
      'Implement CI/CD pipelines for automated testing and deployment',
      'Manage containerized applications using Docker and Kubernetes',
      'Automate infrastructure provisioning using Terraform or CloudFormation',
      'Monitor system performance, availability, and security',
      'Implement logging, alerting, and incident response processes',
      'Optimize cloud costs and resource utilization',
      'Collaborate with development teams to improve deployment workflows',
    ],
    requirements: [
      '3+ years of experience in DevOps, SRE, or cloud engineering',
      'Strong proficiency with AWS services (EC2, S3, RDS, Lambda, etc.)',
      'Experience with Docker, Kubernetes, and container orchestration',
      'Proficiency in scripting languages (Python, Bash, or Go)',
      'Experience with CI/CD tools (Jenkins, GitLab CI, GitHub Actions)',
      'Understanding of infrastructure as code (Terraform, Ansible)',
      'Knowledge of monitoring and logging tools (Prometheus, Grafana, ELK)',
      "Bachelor's degree in Computer Science or related field",
    ],
    niceToHave: [
      'AWS certifications (Solutions Architect, DevOps Engineer)',
      'Experience with multi-cloud environments (Azure, GCP)',
      'Knowledge of service mesh (Istio, Linkerd)',
      'Familiarity with security best practices and compliance (SOC 2, ISO)',
      'Experience with database administration (PostgreSQL, MongoDB)',
      'Understanding of network architecture and VPC design',
    ],
    benefits: [
      'Competitive salary with performance bonuses',
      'Health & wellness insurance',
      'Flexible work hours and remote work options',
      'Learning & development budget (courses, conferences)',
      'Modern work equipment (MacBook, monitors, etc.)',
      'Team outings and company events',
      'Career growth and mentorship opportunities',
    ],
  },
  {
    id: '6',
    title: 'Product Manager',
    department: 'Product',
    location: 'Surat, India',
    type: 'Full-Time',
    icon: Target,
    salary: '\u20B98-16 LPA',
    experience: '3-6 years',
    skills: [
      'Product Strategy',
      'Roadmapping',
      'User Research',
      'Analytics',
      'Stakeholder Management',
    ],
    description:
      'Define product vision, prioritize features, and work cross-functionally to deliver exceptional product experiences.',
    responsibilities: [
      'Define product vision, strategy, and roadmap aligned with business goals',
      'Conduct user research, interviews, and data analysis to identify opportunities',
      'Prioritize features and manage product backlog',
      'Write detailed product requirements and user stories',
      'Collaborate with design and engineering teams to ship features',
      'Analyze product metrics and user feedback to drive improvements',
      'Communicate product updates and releases to stakeholders',
      'Advocate for user needs and balance business, technical, and UX requirements',
    ],
    requirements: [
      '3+ years of experience in product management for B2B SaaS or enterprise software',
      'Strong analytical and problem-solving skills',
      'Experience with user research, usability testing, and data-driven decision making',
      'Proficiency with product management tools (Jira, Linear, Notion)',
      'Understanding of agile development methodologies',
      'Excellent communication and stakeholder management skills',
      'Ability to work cross-functionally with design, engineering, and business teams',
      "Bachelor's degree in Business, Computer Science, or related field (MBA preferred)",
    ],
    niceToHave: [
      'Technical background or engineering experience',
      'Experience with analytics tools (Mixpanel, Amplitude, Google Analytics)',
      'Knowledge of design thinking and product discovery frameworks',
      'Familiarity with Odoo ERP or similar enterprise platforms',
      'Experience launching products from 0 to 1',
      'Understanding of enterprise sales cycles and B2B buying processes',
    ],
    benefits: [
      'Competitive salary with performance bonuses',
      'Health & wellness insurance',
      'Flexible work hours and remote work options',
      'Learning & development budget (courses, conferences)',
      'Modern work equipment (MacBook, monitors, etc.)',
      'Team outings and company events',
      'Career growth and mentorship opportunities',
    ],
  },
]
function JobDetailPage() {
  const { id } = useParams()
  const job = jobData.find((j) => j.id === id)
  const [isModalOpen, setIsModalOpen] = useState(false)
  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {' '}
        <div className="text-center">
          {' '}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Job Not Found</h1>{' '}
          <Link to="/careers" className="text-[#f1592a] hover:underline">
            Back to Careers
          </Link>
        </div>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-white">
      {' '}
      <section className="pt-32 pb-12 bg-gradient-to-b from-gray-50 to-white">
        {' '}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {' '}
          <Link to="/careers">
            {' '}
            <motion.button
              whileHover={{
                x: -5,
              }}
              className="flex items-center space-x-2 text-gray-600 hover:text-[#f1592a] transition-colors mb-8"
            >
              {' '}
              <ArrowLeft size={20} /> <span className="font-medium">Back to Careers</span>
            </motion.button>
          </Link>{' '}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            {' '}
            <div className="flex-1">
              {' '}
              <div className="flex items-start space-x-4 mb-6">
                {' '}
                <div>
                  {' '}
                  <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
                    {job.title}
                  </h1>{' '}
                  <div className="flex flex-wrap gap-3 text-gray-600">
                    {' '}
                    <span className="flex items-center space-x-1">
                      {' '}
                      <Briefcase size={16} strokeWidth={2} /> <span>{job.department}</span>
                    </span>{' '}
                    <span>•</span>{' '}
                    <span className="flex items-center space-x-1">
                      {' '}
                      <MapPin size={16} strokeWidth={2} /> <span>{job.location}</span>
                    </span>{' '}
                    <span>•</span>{' '}
                    <span className="flex items-center space-x-1">
                      {' '}
                      <Clock size={16} strokeWidth={2} /> <span>{job.type}</span>
                    </span>
                  </div>
                </div>
              </div>{' '}
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{job.description}</p>{' '}
              <div className="flex flex-wrap gap-4">
                {' '}
                <div className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-xl">
                  {' '}
                  <DollarSign className="text-[#f1592a]" size={18} strokeWidth={2} />{' '}
                  <span className="text-sm font-semibold text-gray-700">{job.salary}</span>
                </div>{' '}
                <div className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-xl">
                  {' '}
                  <Users className="text-[#f1592a]" size={18} strokeWidth={2} />{' '}
                  <span className="text-sm font-semibold text-gray-700">{job.experience}</span>
                </div>
              </div>
            </div>{' '}
            <div className="lg:sticky lg:top-32 space-y-4">
              {' '}
              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={() => setIsModalOpen(true)}
                className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-xl shadow-xl hover:shadow-2xl transition-all font-semibold"
              >
                {' '}
                <FileText size={20} strokeWidth={2} /> <span>Apply for this Position</span>
              </motion.button>{' '}
              <div className="flex gap-3">
                {' '}
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-[#f1592a] transition-all"
                >
                  {' '}
                  <Share2 size={18} strokeWidth={2} />{' '}
                  <span className="text-sm font-semibold">Share</span>
                </motion.button>{' '}
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-[#f1592a] transition-all"
                >
                  {' '}
                  <Bookmark size={18} strokeWidth={2} />{' '}
                  <span className="text-sm font-semibold">Save</span>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>{' '}
      <section className="py-12">
        {' '}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {' '}
          <div className="max-w-4xl mx-auto border border-gray-200 rounded-3xl shadow-lg p-8 md:p-12 bg-white">
            {' '}
            <div className="mb-12">
              {' '}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Required Skills</h2>{' '}
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <span
                    className="px-4 py-2 bg-gradient-to-r from-[#f1592a]/10 to-[#ff7a45]/10 text-[#f1592a] rounded-full text-sm font-semibold border border-[#f1592a]/20"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>{' '}
            <div className="mb-12">
              {' '}
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Responsibilities</h2>{' '}
              <div className="space-y-3">
                {job.responsibilities.map((item, index) => (
                  <div className="flex items-start space-x-3" key={index}>
                    {' '}
                    <CheckCircle
                      className="text-[#f1592a] flex-shrink-0 mt-1"
                      size={20}
                      strokeWidth={2}
                    />{' '}
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>{' '}
            <div className="mb-12">
              {' '}
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h2>{' '}
              <div className="space-y-3">
                {job.requirements.map((item, index) => (
                  <div className="flex items-start space-x-3" key={index}>
                    {' '}
                    <CheckCircle
                      className="text-[#f1592a] flex-shrink-0 mt-1"
                      size={20}
                      strokeWidth={2}
                    />{' '}
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>{' '}
            <div className="mb-12">
              {' '}
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Nice to Have</h2>{' '}
              <div className="space-y-3">
                {job.niceToHave.map((item, index) => (
                  <div className="flex items-start space-x-3" key={index}>
                    {' '}
                    <div className="w-2 h-2 bg-[#f1592a] rounded-full flex-shrink-0 mt-2" />{' '}
                    <p className="text-gray-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>{' '}
            <div className="mb-12">
              {' '}
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h2>{' '}
              <div className="grid md:grid-cols-2 gap-4">
                {job.benefits.map((benefit, index) => (
                  <div
                    className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-200"
                    key={index}
                  >
                    {' '}
                    <CheckCircle
                      className="text-[#f1592a] flex-shrink-0 mt-0.5"
                      size={18}
                      strokeWidth={2}
                    />{' '}
                    <p className="text-gray-700 text-sm leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>{' '}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center">
              {' '}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Apply?
              </h3>{' '}
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our team and help us build the future of digital transformation. We're excited
                to learn more about you!
              </p>{' '}
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-full shadow-2xl hover:shadow-[#f1592a]/50 transition-all font-semibold"
              >
                Apply for {job.title}
              </motion.button>
            </div>
          </div>
        </div>
      </section>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          {' '}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          >
            {' '}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 z-10">
              {' '}
              <div className="flex items-center justify-between">
                {' '}
                <h2 className="text-2xl font-bold text-gray-900">Apply for {job.title}</h2>{' '}
                <button
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  onClick={() => setIsModalOpen(false)}
                >
                  {' '}
                  <motion.div
                    whileHover={{
                      rotate: 90,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    {' '}
                    <FileText size={24} />
                  </motion.div>
                </button>
              </div>
            </div>{' '}
            <div className="p-6 md:p-8">
              {' '}
              <form className="space-y-6">
                {' '}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {' '}
                  <div>
                    {' '}
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>{' '}
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>{' '}
                  <div>
                    {' '}
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>{' '}
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>{' '}
                  <div>
                    {' '}
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>{' '}
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-transparent transition-all"
                      placeholder="+91 1234567890"
                    />
                  </div>{' '}
                  <div>
                    {' '}
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      LinkedIn Profile
                    </label>{' '}
                    <input
                      type="url"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-transparent transition-all"
                      placeholder="linkedin.com/in/johndoe"
                    />
                  </div>
                </div>{' '}
                <div>
                  {' '}
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Cover Letter *
                  </label>{' '}
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:border-transparent transition-all resize-none"
                    placeholder="Tell us why you're excited about this role and what makes you a great fit..."
                  />
                </div>{' '}
                <div>
                  {' '}
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Resume/CV *
                  </label>{' '}
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[#f1592a] transition-all">
                    {' '}
                    <input
                      type="file"
                      required
                      className="hidden"
                      id="resume-upload"
                      accept=".pdf,.doc,.docx"
                    />{' '}
                    <label
                      htmlFor="resume-upload"
                      className="cursor-pointer flex flex-col items-center space-y-3"
                    >
                      {' '}
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        {' '}
                        <FileText className="text-gray-600" size={24} />
                      </div>{' '}
                      <div>
                        {' '}
                        <span className="text-[#f1592a] font-semibold hover:underline">
                          Click to upload
                        </span>{' '}
                        <span className="text-gray-600"> or drag and drop</span>
                      </div>{' '}
                      <p className="text-xs text-gray-500">PDF, DOC, DOCX (max 5MB)</p>
                    </label>
                  </div>
                </div>{' '}
                <div className="flex items-start space-x-3">
                  {' '}
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 text-[#f1592a] border-gray-300 rounded focus:ring-[#f1592a]"
                    id="terms"
                  />{' '}
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the processing of my personal data and consent to being contacted
                    regarding this application. *
                  </label>
                </div>{' '}
                <div className="flex gap-4 pt-4">
                  {' '}
                  <motion.button
                    type="button"
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 px-6 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                  >
                    Cancel
                  </motion.button>{' '}
                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="flex-1 px-6 py-4 bg-gradient-to-r from-[#f1592a] to-[#ff7a45] text-white rounded-xl shadow-xl hover:shadow-2xl transition-all font-semibold"
                  >
                    Submit Application
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
export { JobDetailPage }
