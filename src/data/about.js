// Mirrors assets/Resume.pdf — keep the two in sync when the resume changes.

// The lead is split so the middle phrase can be picked out in the accent
// colour. It now carries the whole introduction on its own.
export const bioLead = {
  before: "I'm João, a ",
  highlight: 'Product & Web Designer',
  after:
    " and I'm passionate about creating engaging, user-centered digital products that solve real problems.",
}

export const experience = [
  {
    title: 'Lead Product Designer - Aemyon',
    date: '2026–Present',
    subtitle: 'Co-founder at Aemyon.com',
    text: 'Leading design on ZDZ, a social ticketing platform, and Wave, a software suite to run events.',
  },
  {
    title: 'Graphic & Web Designer - Freelance',
    date: '2023–Present',
    text: 'Designed several brand identities and digital products, including responsive websites and app interfaces for academic and client-based projects, from user research and wireframing to final visual design and prototyping in Figma.',
  },
]

export const education = [
  {
    title: "Bachelor's in Design & Multimedia Communications",
    text: 'ESEC, Coimbra 2026',
  },
]

export const skills = [
  {
    category: 'Design',
    items: ['UX/UI Design', 'Interaction Design', 'Prototyping', 'User Research'],
  },
  {
    category: 'Dev',
    items: ['HTML/CSS', 'Tailwind CSS', 'Javascript', 'React'],
  },
  {
    category: 'Tools',
    items: ['Figma', 'Adobe Suite'],
  },
]

export const EMAIL = 'joaoilharco06@gmail.com'
export const RESUME_URL = '/assets/Resume.pdf'
