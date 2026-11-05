// Everything on the About page comes from here. It mirrors Lara's resume (LaraBobel-2026.pdf),
// so when the resume changes, update this file.

export const headline = 'Energetic Creative Director + Adventure Seeker';

/** The two trait groups from the top of the resume. */
export const traits = [
  ['Analytical Thinking', 'Logic', 'Reasoning', 'Planning', 'Organizing', 'Process Oriented'],
  ['Emotional Intelligence', 'Color Theory', 'Intuition', 'Imagination', 'Visualization', 'Adventurous'],
];

export interface Job {
  company: string;
  title: string;
  years: string;
  /** Optional "Label: text" pairs. Leave label empty for a plain bullet. */
  highlights: { label?: string; text: string }[];
  clients?: string;
  /** Optional related page on this site. */
  link?: { href: string; label: string };
}

export const experience: Job[] = [
  {
    company: 'Fathom, an IQVIA business',
    title: 'Associate Creative Director',
    years: '2021 – present',
    link: { href: '/case-studies/fathom-brand-audit', label: 'Read the Fathom brand case study' },
    highlights: [
      {
        label: 'Brand Strategy and Evolution',
        text: 'Led the evolution of Fathom’s brand identity, developing creative standards, presentation templates, and scalable resources to establish consistency across marketing, sales, and client communications.',
      },
      {
        label: 'Brand Integration',
        text: 'Played a key role in Fathom’s transition into IQVIA, helping align brand messaging, visual identity, and marketing content with the larger organization while preserving valuable expertise and thought leadership.',
      },
      {
        label: 'Content Strategy and Development',
        text: 'Partnered with subject matter experts and leadership to transform complex healthcare marketing strategies and client successes into compelling case studies, industry insights, videos, and sales enablement materials.',
      },
      {
        label: 'Sales and Business Development',
        text: 'Collaborated with sales and executive leadership to develop strategic presentations, RFP responses, and creative solutions supporting new business opportunities and client relationships.',
      },
      {
        label: 'Integrated Marketing',
        text: 'Directed creative development across digital campaigns, website content, email marketing, social media, and industry events, ensuring consistent messaging and a cohesive brand experience.',
      },
      {
        label: 'Cross-Functional Leadership',
        text: 'Built strong relationships across marketing, sales, client success, and channel teams to translate business objectives into clear, audience-focused creative solutions.',
      },
      {
        label: 'Innovation and Efficiency',
        text: 'Introduced AI-assisted workflows and standardized creative processes to streamline content development, improve consistency, and help teams work more efficiently.',
      },
    ],
  },
  {
    company: 'Dealer Tire',
    title: 'Art Director',
    years: '2011 – 2020',
    highlights: [
      {
        text: 'Initiated concepts that solidified a partnership with Goodyear and Land Rover, resulting in a consumer booth at the unveiling of the new 2020 Defender.',
      },
      { text: 'Created service-oriented concepts for BMW, Jaguar, Mazda, Mercedes-Benz, Nissan, and Volvo (to name a few).' },
      { text: 'Developed the workflow and creative process for the creative team — the server was a mess when I got there.' },
      {
        text: 'Trusted to create and manage annual reports year after year, giving me the ability to fine-tune and streamline our process.',
      },
      {
        text: 'Organized and designed communication for a variety of digital products, resulting in a company-wide overview targeting high-level best practices.',
      },
      {
        text: 'Hosted weekly status meetings to gauge team workload and learn about accomplishments and stress levels so projects could be adjusted accordingly.',
      },
      { text: 'Worked with vendors to confirm production quality and that deliverables were done on time and within budget.' },
    ],
    clients:
      'Audi, BMW, Hyundai, INFINITI, Jaguar, Kia, Land Rover, Lexus, Mazda, Mercedes-Benz, Mitsubishi, MINI, Nissan, Rolls-Royce, Toyota, Volkswagen, Volvo, Bridgestone, Dunlop, Goodyear, Hankook, Kumho, Michelin, Toyo, Yokohama, and Cleveland Sight Center',
  },
  {
    company: 'Antidote Functional Therapies',
    title: 'Freelance Art Director',
    years: '2017 – 2020',
    link: { href: '/work/antidote', label: 'See the Antidote project' },
    highlights: [
      {
        label: 'Brand and website',
        text: 'Worked with the business owner and web developer to create a unique brand, website, and online presence via Instagram.',
      },
    ],
  },
  {
    company: 'The Adcom Group',
    title: 'Associate Art Director',
    years: '2004 – 2011',
    link: { href: '/work/ymca', label: 'See the YMCA campaign' },
    highlights: [
      { text: 'Art directed a five-day photo shoot for a national YMCA of the USA campaign, resulting in over 10,000 images.' },
      {
        text: 'Contributed to creative and layout designs for Sherwin-Williams, giving customers downloadable PDFs for easily accessible information and color themes.',
      },
      {
        text: 'Exceeded client expectations with a new identity to encourage students to enroll and use CSU’s Course Book brochures. The client was accustomed to a straightforward, plain-text format but selected my lively, hand-developed concept, which became the standard for future course book pieces.',
      },
      {
        text: 'Implemented and streamlined a new business proposal design format, providing users with an online portal for resources via the Backpack application.',
      },
      { text: 'Spearheaded the internship program; served as supervisor and mentor to design interns.' },
      { text: 'Hired as an intern in 2004 and earned a few promotions to end as Associate Art Director.' },
    ],
    clients:
      'Cleveland Clinic, KeyBank, YMCA of the USA, General Electric, Cleveland State University, Sherwin-Williams, Cox Cable, AmTrust, Village of Burr Ridge Hotels, First National Bank of Pennsylvania, Healthy Start, Invest In Children, Kaiser Permanente, Muscular Dystrophy Association, and Novar',
  },
  {
    company: 'Bisig Impact Group',
    title: 'Design Intern',
    years: 'Summer 2003',
    highlights: [
      {
        text: 'A standard internship program where I learned what I know about production best practices. This foundation of organization helps guide me, even today.',
      },
    ],
  },
];

export const software = [
  'Adobe InDesign',
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Adobe XD',
  'Sketch',
  'Miro',
  'Microsoft Office',
  'Basic HTML + CSS',
];

export const professionalSkills = [
  'Foundations in Design Thinking — IDEO U',
  'Relationship Management',
  'Critical + Creative Thinking',
  'Deadline-driven',
  'Written + Verbal Communication',
  'Process + Results-Oriented',
  'Relentless Attention to Detail',
  'Love for Typography',
  'Constant Follow-Through',
];

export const managementCourses = [
  'Leadership Essentials',
  'Emotional Intelligence',
  'DiSC® Training',
  'CELEMI Apple + Oranges™',
  'Foundations in Management',
  'Power Presentations, Inc.',
  'Leadership Tool-Kit',
];

export const education = { degree: 'BFA, Visual Communication Design', school: 'Kent State University' };

export const outsideTheOffice = [
  'Adventuring with my family',
  'Roller-skating',
  'Riding my bicycle',
  'Crocheting',
  'Snuggling with my pets',
  'Reading',
  'Journaling',
  'Birding',
];
