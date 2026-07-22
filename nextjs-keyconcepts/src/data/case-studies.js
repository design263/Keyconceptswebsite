// export const caseStudies = [
//   {
//     id: '1',
//     title: 'Digital Transformation Success: Scaling Operations with Custom ERP',
//     client: 'TechCorp Industries',
//     industry: 'Manufacturing',
//     challenge:
//       'A manufacturing company struggling with disparate systems and inefficient processes needed a unified solution to streamline operations and improve productivity.',
//     result:
//       'We implemented a custom Odoo ERP solution that integrated all business processes, resulting in significant improvements in efficiency and cost savings.',
//     image:
//       'https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwaW5kdXN0cnl8ZW58MXx8fHwxNzcyNDI4NDY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//     metrics: [
//       {
//         label: 'Efficiency Increase',
//         value: '45%',
//       },
//       {
//         label: 'Cost Reduction',
//         value: '30%',
//       },
//       {
//         label: 'ROI Timeline',
//         value: '6 months',
//       },
//     ],
//     featured: true,
//   },
//   {
//     id: '2',
//     title: 'E-commerce Platform Revolutionizing Retail Experience',
//     client: 'RetailMax Group',
//     industry: 'Retail',
//     challenge:
//       'Traditional retailer needed a modern e-commerce platform to compete in the digital marketplace.',
//     result:
//       'Built a scalable web and mobile platform with integrated inventory management and seamless checkout experience.',
//     image:
//       'https://images.unsplash.com/photo-1764795850248-97a5e986b242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyMzQxODMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//     metrics: [
//       {
//         label: 'Sales Growth',
//         value: '120%',
//       },
//       {
//         label: 'Customer Reach',
//         value: '3x',
//       },
//       {
//         label: 'Faster Order Processing',
//         value: '60%',
//       },
//     ],
//   },
//   {
//     id: '3',
//     title: 'MVP to Market Leader: Startup Success Story',
//     client: 'InnovateTech Startup',
//     industry: 'SaaS',
//     challenge:
//       'Early-stage startup needed to validate product-market fit quickly with limited resources.',
//     result:
//       'Delivered a feature-rich MVP in 12 weeks that secured seed funding and acquired first 1000 users.',
//     image:
//       'https://images.unsplash.com/photo-1642406415849-a410b5d01a94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN1Y2Nlc3MlMjB0ZWFtfGVufDF8fHx8MTc3MjQyODQ2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//     metrics: [
//       {
//         label: 'Time to Market',
//         value: '12 weeks',
//       },
//       {
//         label: 'Funding Raised',
//         value: '$2M',
//       },
//       {
//         label: 'User Growth',
//         value: '1000+',
//       },
//     ],
//   },
//   {
//     id: '4',
//     title: 'Cloud Migration Enhancing Business Continuity',
//     client: 'GlobalServices Inc',
//     industry: 'Financial Services',
//     challenge:
//       'Legacy infrastructure causing downtime and limiting scalability for growing financial services company.',
//     result:
//       'Successfully migrated to cloud infrastructure with zero downtime, ensuring 99.9% uptime and improved performance.',
//     image:
//       'https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnN8ZW58MXx8fHwxNzcyMzU0MDYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//     metrics: [
//       {
//         label: 'Uptime',
//         value: '99.9%',
//       },
//       {
//         label: 'Performance Boost',
//         value: '3x',
//       },
//       {
//         label: 'Cost Savings',
//         value: '40%',
//       },
//     ],
//   },
// ]

// export function getCaseStudyById(id) {
//   return caseStudies.find((cs) => cs.id === id)
// }

// export function getFeaturedCaseStudy() {
//   return caseStudies.find((cs) => cs.featured) ?? caseStudies[0]
// }

// export function getRegularCaseStudies() {
//   const featured = getFeaturedCaseStudy()
//   return caseStudies.filter((cs) => cs.id !== featured?.id)
// }
