import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  hexing,
  mingjiang,
  taiyi,
  explorer,
  udunwallet,
  hexingapp,
  threejs,
  jg,
} from '@/assets'
import { StaticImageData } from 'next/image'

export type NavLink = {
  id: string
  title: string
}

export type Service = {
  title: string
  icon: StaticImageData
}

export type Technology = {
  name: string
  icon: StaticImageData
}

export type Project = {
  name: string
  description: string
  tags: {
    name: string
    color: string
  }[]
  image: StaticImageData
  source_code_link: string
}

export type Experience = {
  title: string
  job_description?: string
  company_name: string
  icon: StaticImageData
  iconBg: string
  date: string
  points: string[]
}

export const navLinks: NavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services: Service[] = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Mobile Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'DevOps Engineer',
    icon: creator,
  },
]

const technologies: Technology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
]

const experiences = [
  {
    title: 'Android Developer',
    company_name: 'MingJiang',
    // job_description: 'As a member of the product development team, my primary duties include:',
    icon: mingjiang,
    iconBg: '#E6DEDD',
    date: '2017.06 - 2018.11',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Senior Mobile Developer',
    company_name: 'HeXing.',
    icon: hexing,
    iconBg: '#383E56',
    date: '2018.12 - 2020.08',
    points: [
      'Led project refactoring efforts, modularizing the codebase to significantly improve team collaboration and development efficiency.',
      'Optimized project performance and stability.',
      'Developed team code standards and submission process guidelines, integrating Gradle scripts for automated testing.',
      'Led technical exchange meetings, regularly conducting knowledge-sharing sessions to guide the team in improving their technical skills.',
    ],
  },
  {
    title: 'Mobile Architect/DevOps',
    company_name: 'Taiyi',
    icon: taiyi,
    iconBg: '#E6DEDD',
    date: '2020.09 - 2021.05',
    points: [
      'Designing and implementing a scalable and flexible mobile application architecture to accommodate future changes and growth',
      'Ensuring the security and privacy of user data by implementing appropriate security measures such as encryption, authentication, and authorization',
      'Optimizing the performance of the mobile application by reducing its size, minimizing network requests, and optimizing the use of device resources',
      'Designing user-friendly interfaces, supporting different devices and platforms, to ensure the usability and accessibility of the mobile application',
    ],
  },
  {
    title: 'Architect',
    company_name: 'Latticelabs',
    icon: jg,
    iconBg: '#383E56',
    date: '2021.06 - Now',
    points: [
      'Designing and implementing secure and scalable blockchain architectures that can support high transaction volumes and complex business logic',
      'Collaborating with cross-functional teams to define and implement blockchain solutions that meet business requirements and align with the overall enterprise architecture',
      'Evaluating and selecting appropriate blockchain platforms, protocols, and consensus mechanisms based on the specific use case and desired business outcomes',
      'Providing technical leadership and guidance to development teams, ensuring adherence to best practices and standards for blockchain development',
    ],
  },
]

const projects = [
  {
    name: 'Lattice Explorer',
    description:
      'A web tool for viewing all blockchain data, including accounts, transactions, contracts, and DApps on consortium chains.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'graphpql',
        color: 'pink-text-gradient',
      },
    ],
    image: explorer,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Udun Enterprise Wallet',
    description:
      "It's a secure and efficient solution for managing large amounts of encrypted assets on digital asset platforms.",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: udunwallet,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'HeXing Carpooling',
    description:
      'A mobile ride-hailing platform that offers users a one-stop solution for safe, fast, comfortable, green, and satisfying travel.',
    tags: [
      {
        name: 'kotlin',
        color: 'blue-text-gradient',
      },
      {
        name: 'Android',
        color: 'green-text-gradient',
      },
      {
        name: 'WebSocket',
        color: 'pink-text-gradient',
      },
    ],
    image: hexingapp,
    source_code_link: 'https://github.com/',
  },
]

export { services, technologies, experiences, projects }
