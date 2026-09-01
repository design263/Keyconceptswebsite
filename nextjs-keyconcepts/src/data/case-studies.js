export const caseStudies = [
  {
    id: '1',
    slug: 'custom-erp',
    link: '/case-study/custom-erp',
    title: 'Digital Transformation Success: Scaling Operations with Custom ERP',
    client: 'Speciality Chemicals Manufacturer',
    industry: 'Speciality Chemicals · Custom ERP',
    challenge:
      '4 years in business, growing fast - but Purchase, Sales, Production, and Exports were all working from a single shared email inbox and Excel files. Purchase was buying excess stock. Sales was committing orders that weren\'t in inventory. Production had no planning visibility. Exports was drowning in manual paperwork. Two previous software systems had already failed them. We listened first, then built a custom Odoo ERP that finally connected everything.',
    result:
      'We built an integrated Odoo system covering their core operations: intelligent Purchase management that cut overstocking by 35%; real-time Inventory tracking that stopped sales committing unavailable items; Production planning that aligned orders with actual capacity; and automated Export documentation that cut processing time from 4 hours to 25 minutes. Within 6 months, they went from daily chaos and missed deadlines to having one connected system that actually works the way their business runs.',
    image:
      'https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwaW5kdXN0cnl8ZW58MXx8fHwxNzcyNDI4NDY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    metrics: [
      {
        label: 'Efficiency Increase',
        value: '45%',
      },
      {
        label: 'Cost Reduction',
        value: '30%',
      },
      {
        label: 'ROI Timeline',
        value: '6 months',
      },
    ],
    featured: true,
  },
  {
    id: '2',
    slug: 'brand-central',
    link: '/case-study/brand-central',
    title: 'E-commerce Platform Revolutionizing Retail Experience',
    client: 'Brand Central',
    industry: 'E-Commerce · Marketplace · SaaS Platform',
    challenge:
      'Brand Central helps brands sell on Amazon, Myntra, and Ajio - but everything was managed manually. Listings took days to update. Prices were out of sync across platforms. Inventory was overselling because a sale on one platform wasn\'t reflected on others.The same work was being done three times, and still getting it wrong.We built them a single unified dashboard to manage all three platforms - one update, everywhere, instantly.',
    result:
      'Built a scalable web and mobile platform with integrated inventory management and seamless checkout experience.',
    image:
      'https://images.unsplash.com/photo-1764795850248-97a5e986b242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyMzQxODMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    metrics: [
      {
        label: 'Sales Growth',
        value: '120%',
      },
      {
        label: 'Customer Reach',
        value: '3x',
      },
      {
        label: 'Faster Order Processing',
        value: '60%',
      },
    ],
  },
  {
    id: '3',
    slug: 'legaltech',
    link: '/case-study/legaltech',
    title: 'MVP to Market Leader: Taking India\'s Legal Documentation Online',
    client: 'LegalTech Startup, India',
    industry: 'LegalTech · eSign · Identity Validation',
    challenge:
      'A founder saw a massive gap - India\'s entire legal documentation process was manual, paper-based, and wide open to forgery. No one had truly digitised it. We built a complete platform: identity validation, video recording, auto-transcript, eSign, consent capture, third-party integration, and scheduling - all in one secure session. What once required physical presence and paperwork is now done remotely, from anywhere in India, with zero forgery risk.',
    result:
      'Delivered a feature-rich MVP in 12 weeks that secured seed funding and acquired first 1000 users.',
    image:
      'https://images.unsplash.com/photo-1642406415849-a410b5d01a94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN1Y2Nlc3MlMjB0ZWFtfGVufDF8fHx8MTc3MjQyODQ2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    metrics: [
      {
        label: 'Process Digitised',
        value: '100%',
      },
      {
        label: 'Remote Reach',
        value: 'Pan India',
      },
      {
        label: 'Forgery Risk',
        value: 'Zero',
      },
    ],
  },
  {
    id: '4',
    slug: 'cloud-migration',
    link: '/case-study/cloud-migration',
    title: 'Cloud Migration Enhancing Business Continuity',
    client: 'GlobalServices Inc',
    industry: 'Financial Services',
    challenge:
      'Legacy infrastructure causing downtime and limiting scalability for growing financial services company.',
    result:
      'Successfully migrated to cloud infrastructure with zero downtime, ensuring 99.9% uptime and improved performance.',
    image:
      'https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnN8ZW58MXx8fHwxNzcyMzU0MDYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    metrics: [
      {
        label: 'Uptime',
        value: '99.9%',
      },
      {
        label: 'Performance Boost',
        value: '3x',
      },
      {
        label: 'Cost Savings',
        value: '40%',
      },
    ],
  },
];

export function getCaseStudyById(id) {
  return caseStudies.find((cs) => cs.id === id)
}

export function getFeaturedCaseStudy() {
  return caseStudies.find((cs) => cs.featured) ?? caseStudies[0]
}

export function getRegularCaseStudies() {
  const featured = getFeaturedCaseStudy()
  return caseStudies.filter((cs) => cs.id !== featured?.id)
}
