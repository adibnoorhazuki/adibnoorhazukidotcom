import type { Skill, SkillItem, Language } from "@/@types/skill";

export const skills: Skill[] = [
  {
    type: "Programming Languages",
    items: [
      {
        name: 'HTML',
        icon: 'logos:html-5',
        rating: 5,
      }, {
        name: 'PHP',
        icon: 'logos:php',
        rating: 5,
      }, {
        name: 'CSS',
        icon: 'logos:css-3',
        rating: 4,
      }, {
        name: 'SASS',
        icon: 'logos:sass',
        rating: 3,
      }, {
        name: 'Javascript',
        icon: 'logos:javascript',
        rating: 3,
      }, {
        name: 'MySQL',
        icon: 'logos:mysql',
        rating: 3,
      }, {
        name: 'Dart',
        icon: 'logos:dart',
        rating: 2,
      },
    ],
  },
  {
    type: "Framework",
    items: [{
      name: 'Laravel',
      icon: 'logos:laravel',
      rating: 4,
    }, {
      name: 'Bootstrap',
      icon: 'logos:bootstrap',
      rating: 4,
    }, {
      name: 'TailwindCSS',
      icon: 'logos:tailwindcss-icon',
      rating: 4,
    }, {
      name: 'Flutter',
      icon: 'logos:flutter',
      rating: 3,
    }, {
      name: 'AlpineJS',
      icon: 'logos:alpinejs-icon',
      rating: 2.5,
    }, {
      name: 'Livewire',
      icon: 'devicon:livewire',
      rating: 2.5,
    }, {
      name: 'InertiaJs',
      icon: 'devicon:inertiajs',
      rating: 2.5,
    }, {
      name: 'VueJs',
      icon: 'logos:vue',
      rating: 1.5,
    }],
  },
  {
    type: "Database",
    items: [
      { name: "MySQL", icon: "logos:mysql", rating: 4.5 },
      { name: "PostgreSQL", icon: "logos:postgresql", rating: 1.5 }
    ]
  },
  {
    type: "Content Management System",
    items: [
      { name: "Wordpress", icon: "skill-icons:wordpress", rating: 2.5 }
    ]
  },
  {
    type: "Cloud Computing Platform",
    items: [
      { name: "Amazon Web Services", icon: "skill-icons:aws-light", rating: 2.5 },
      { name: "Alibaba Cloud", icon: "ah:alibabacloud", rating: 2 }
    ]
  },
  {
    type: "Serverless Computing Service",
    items: [
      { name: "AWS Lambda", icon: "logos:aws-lambda", rating: 2.5 },
      { name: "Alibaba ECS", icon: "ah:alibabaecs", rating: 2 },
      { name: "Laravel Vapor", icon: "logos:laravel", rating: 3.5 },
      { name: "AWS EC2", icon: "logos:aws-ec2", rating: 2 }
    ]
  },
  {
    type: "Cloud Queue Service",
    items: [
      { name: "Amazon SQS", icon: "logos:aws-sqs", rating: 2.5 },
      { name: "Alibaba SMQ", icon: "ah:alibabamns", rating: 2 }
    ]
  },
  {
    type: "Version Control System",
    items: [
      { name: "Gitlab", icon: "devicon:gitlab", rating: 4 },
      { name: "Github", icon: "devicon:github", rating: 4 }
    ]
  },
  {
    type: "Cloud Storage Service",
    items: [
      { name: "AWS S3", icon: "logos:aws-s3", rating: 4 },
      { name: "Alibaba OSS", icon: "ah:alibabaoss", rating: 3 }
    ]
  },
  {
    type: "Cloud Database Service",
    items: [
      { name: "AWS Aurora & RDS", icon: "logos:aws-aurora", rating: 2.5 }
    ]
  },
  {
    type: "Cloud Short Message Service",
    items: [
      { name: "Alibaba SMS", icon: "ah:alibabadysms", rating: 2.5 }
    ]
  },
  {
    type: "Third-Party Integration",
    items: [
      { name: "Facebook API", icon: "logos:facebook", rating: 2 },
      { name: "WhatsApp API", icon: "logos:whatsapp-icon", rating: 1.5 },
      { name: "Google Map API", icon: "logos:google-maps", rating: 2 },
      { name: "2C2P Payment Gateway", icon: "ah:2c2p", rating: 3 },
      { name: "Billplz Payment Gateway", icon: "ah:billplz", rating: 3 },
      { name: "SMS Service", icon: "flat-color-icons:sms", rating: 2 }
    ]
  } 
];

export const languages: Language[]  = [
  {
    name: 'Bahasa Malaysia',
    proficiencies: {
      spoken: 'Advanced',
      written: 'Advanced'
    }
  },
  {
    name: 'English',
    proficiencies: {
      spoken: 'Intermediate',
      written: 'Intermediate'
    }
  }
]

export const areaOfExpertises: SkillItem[] = [
  { name: "Software Development", rating: 4.5 },
  { name: "Troubleshooting", rating: 4 },
  { name: "Technical Support", rating: 3.5 },
  { name: "Project Management", rating: 3 },
  { name: "Resource Management", rating: 3 },
  { name: "Software Development Life Cycle (SDLC)", rating: 3 },
  { name: "Leadership", rating: 3 },
  { name: "Mentorship", rating: 3 },
]
