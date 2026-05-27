const baseUrl = import.meta.env.BASE_URL

export const portfolioData = {
  profile: {
    name: 'Emman',
    fullName: 'Jose Emmanuel M. Mendoza',
    birthDate: '2003-08-01',
    greeting: "Hey there! 👋",
    greetingShort: 'Hello!',
    intro: "I'm Emman",
    role: 'Network & Hardware Specialist',
    summary:
      'I help teams build reliable IT infrastructure, troubleshoot critical hardware systems, and deliver polished web experiences with modern HTML, CSS, and Bootstrap.',
    location: 'Cuenca, Batangas',
    email: 'emmanuelmendoza589@gmail.com',
    phone: '+63 9672965584',
    photo: `${baseUrl}profile.jpg`,
  },
  about: {
    degree:
      'Bachelor of Science in Information Technology major in Network Technology',
    school:
      'Batangas State University - The National Engineering University Lipa Campus.',
    summary:
      'I specialize in hardware and networking, with knowledge in computer troubleshooting, network configuration, and IT infrastructure. I also have experience in software development using Python, Node.js, React, HTML, and Bootstrap. I am passionate about technology and continuously improving my skills in both networking and development.',
    techStack: [
      'Python',
      'JavaScript',
      'React',
      'Node.js',
      'HTML & CSS',
      'Bootstrap',
      'Git / GitHub',
      'Networking & Hardware',
    ],
    skills: [
      'IT Support and Troubleshooting',
      'Network Configuration',
      'Hardware Maintenance',
      'Technical Documentation',
      'Customer Communication',
      'Collaborative Problem Solving',
    ],
  },
  experience: [
    {
      role: 'IT Support Intern',
      company: 'Batangas State University TNEU - Lipa Campus',
      period: 'February 2026 - May 2026',
      highlights: [
        'Provided IT support and troubleshooting for internet connectivity, printers, computers, and office technology services across departments.',
        'Diagnosed and resolved hardware, software, and network-related issues to minimize technical downtime.',
        'Managed ICT inventory and documentation, including monitoring and updating records of devices and technical assets.',
      ],
    },
    {
      role: 'Web Developer Intern',
      company: 'Tech Executive Labs',
      period: 'February 2025 - May 2025',
      highlights: [
        'Collaborated with the development team using GitHub for version control and team-based web development.',
        'Applied modern web development technologies and tools in real project work.',
        'Contributed to collaborative coding and project development tasks within a team environment.',
      ],
    },
  ],
  projects: [
    {
      name: 'WINYFI',
      label: 'Network Monitoring Platform',
      description:
        'A Python-based network monitoring tool developed for Batangas State University Lipa. The system helps monitor network devices, router status, connectivity, and infrastructure performance through a modern monitoring dashboard.',
      stack: ['Python', 'Tkinter', 'MySQL', 'Network Monitoring', 'IT Infrastructure'],
      icon: 'network',
    },
    {
      name: 'NutriAI',
      label: 'AI Meal Planning Web App',
      description:
        'A web-based meal planning application that generates personalized meal plans and includes an AI-powered chat feature for food suggestions, nutrition details, and meal recommendations.',
      stack: ['HTML', 'CSS', 'Bootstrap', 'Node.js', 'AI Chat'],
      icon: 'nutrition',
    },
  ],
  skills: [
    {
      category: 'Technical Support',
      items: [
        'IT Support and Technical Troubleshooting',
        'Hardware and Software Support',
        'Network and Internet Troubleshooting',
        'Administrative Support',
      ],
    },
    {
      category: 'Professional Skills',
      items: [
        'Excellent Communication Skill',
        'Adaptability',
        'Team Collaboration',
        'Professional Work Attitude and Etiquette',
      ],
    },
    {
      category: 'Development Tools',
      items: ['GitHub', 'Collaborative Coding Workflows', 'Web Development Tools'],
    },
  ],
  education: [
    {
      degree: 'Bachelor of Science in Information Technology, Major in Network Technology',
      school: 'Batangas State University - TNEU Lipa',
      period: '2022 - 2026',
    },
    {
      degree: 'Science, Technology, Engineering, and Mathematics',
      school: 'Cuenca Senior High School',
      period: '2020 - 2022',
    },
  ],
  certifications: [
    {
      name: 'AWS Academy Graduate - Cloud Foundations Training Badge',
      year: '2025',
      details:
        'Completed foundational training in cloud architecture, security, storage, networking, and core AWS services.',
      issuer: 'Amazon Web Services Training and Certification',
      issuerUrl:
        'https://www.amazon.com/AWS-Training-Certification',
      skills: [
        'AWS Architecture',
        'AWS Cloud',
        'AWS Core Services',
        'AWS Pricing',
        'AWS Support',
      ],
      embedWidth: 150,
      embedHeight: 270,
      embedBadgeId: '3dd50ad2-0497-423d-a658-71bab586807a',
      publicUrl: 'https://www.credly.com/badges/3dd50ad2-0497-423d-a658-71bab586807a/public_url',
    },
    {
      name: 'Red Hat Application Development I: Programming in Java EE (AD183 - RHA) Version 7.0',
      year: '2025',
      details:
        'Completed training in Java enterprise application development, web applications, and backend fundamentals using Red Hat technologies.',
      issuer: 'Red Hat',
      issuerUrl: 'https://www.redhat.com',
      skills: [
        'Java Enterprise Edition (JEE)',
        'Red Hat',
        'Red Hat Academy',
        'Red Hat Application Development',
      ],
      embedWidth: 150,
      embedHeight: 270,
      embedBadgeId: '67734b3c-0960-45fc-a183-9e99560fbc84',
      publicUrl: 'https://www.credly.com/badges/67734b3c-0960-45fc-a183-9e99560fbc84/public_url',
    },
  ],
  contact: {
    email: 'emmanuelmendoza589@gmail.com',
    linkedin: 'https://www.linkedin.com/in/jose-emmanuel-mendoza-521b1634a/',
    github: 'https://github.com/man-gg',
    resumeUrl: `${baseUrl}RESUME_MENDOZA.pdf`,
  },
}