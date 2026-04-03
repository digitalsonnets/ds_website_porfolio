const en = {
  skip: 'Skip to content',
  backToTop: 'Back to top',
  brand: 'Digital Sonnets',
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    services: 'Services',
    blog: 'Blog',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    badge: 'Backend · APIs · Frontend · Automation',
    title: 'Clear interfaces, solid services, more efficient processes.',
    subtitle:
      'Full-stack development: coherent APIs and data on the backend, integration across layers, workflow automation, and measurable performance.',
    ctaPrimary: 'View projects',
    ctaSecondary: 'Get in touch',
    langLabel: 'Language',
    themeLabel: 'Theme',
    themeLight: 'Light mode',
    themeDark: 'Dark mode',
  },
  about: {
    title: 'About',
    bio:
      'Web developers focused on the backend, with solid experience building and maintaining scalable applications, plus strong frontend skills using HTML, CSS, JavaScript, and React. We specialize in automation, system performance optimization, and improving digital infrastructure. With a strong background in technical support and quality assurance, we focus on efficient, reliable, user-centered solutions.',
    skillsTitle: 'Stack & focus',
    skills: [
      'React & TypeScript',
      'Node.js & REST / GraphQL APIs',
      'Tailwind CSS',
      'PostgreSQL / SQL',
      'CI/CD & scripts',
      'Web Vitals performance',
      'Accessibility (WCAG)',
    ],
    avatarAlt: 'Professional portrait',
  },
  projects: {
    title: 'Projects',
    subtitle: 'Selected work and experiments (placeholders).',
    demo: 'Demo',
    more: 'Learn more',
    items: [
      {
        title: 'Operations dashboard',
        description:
          'Dashboard with live data, saved filters, and scheduled exports.',
        tech: ['React', 'TanStack Query', 'Zod'],
      },
      {
        title: 'CRM ↔ ERP connector',
        description:
          'Bidirectional sync with retries, queues, and error monitoring.',
        tech: ['Node', 'Webhooks', 'PostgreSQL'],
      },
      {
        title: 'Internal design system',
        description:
          'Documented component library, design tokens, and visual tests in CI.',
        tech: ['React', 'Storybook', 'Vitest'],
      },
      {
        title: 'Performance-first landing',
        description:
          'Static page with optimized images, lazy hydration, and green Core Web Vitals.',
        tech: ['Vite', 'Tailwind', 'Lighthouse CI'],
      },
    ],
  },
  services: {
    title: 'Services',
    subtitle: 'How I can help your team or product.',
    items: [
      {
        id: 'api',
        title: 'Backend and API integration',
        description:
          'REST/GraphQL endpoints and server-side data; consuming and orchestrating external APIs. Clear contracts and consistent validation and errors across backend and client.',
      },
      {
        id: 'frontend',
        title: 'Frontend development',
        description:
          'Modular interfaces, strong typing, and scalable patterns aligned with design and business goals.',
      },
      {
        id: 'automation',
        title: 'Process automation',
        description:
          'Scripts, integrations, and flows that remove repetitive tasks and reduce manual errors.',
      },
      {
        id: 'perf',
        title: 'Performance optimization',
        description:
          'Audits, bundle budgets, and measurable improvements to load, interactivity, and visual stability.',
      },
    ],
  },
  blog: {
    title: 'Blog',
    subtitle: 'Short notes on frontend and automation.',
    readMore: 'Read more',
    items: [
      {
        title: 'Accessibility checklist for forms',
        date: '2026-03-12',
        summary:
          'Labels, associated error messages, and visible focus: the minimum to move from “usable” to inclusive.',
      },
      {
        title: 'Automate without breaking the flow',
        date: '2026-02-28',
        summary:
          'When to use webhooks, queues, or cron jobs — and how to document failures so the team trusts the system.',
      },
    ],
  },
  contact: {
    title: 'Contact',
    subtitle: 'Tell me about your idea; I will reply shortly.',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    submit: 'Send message',
    sending: 'Sending…',
    success:
      'Thank you for reaching out! Your message was sent successfully. We will get back to you as soon as possible.',
    errorSend: 'Could not send your message. Please try again later.',
    required: 'Required field',
    invalidEmail: 'Enter a valid email',
    socialWhatsApp: 'WhatsApp',
    socialLinkedIn: 'LinkedIn',
    socialInstagram: 'Instagram',
    socialHint: 'You can also reach me via:',
  },
  footer: {
    locationLabel: 'Location',
    phoneLabel: 'Phone',
    rights: 'All rights reserved.',
  },
  chat: {
    open: 'Open assistant',
    close: 'Close assistant',
    title: 'Portfolio assistant',
    placeholder: 'Ask about services, stack, or projects…',
    send: 'Send',
    welcome:
      'Hi. I am a demo assistant: I can point you to projects, services, APIs, or how to contact.',
    fallback1: 'I can help with projects, automation, APIs, or contact details. What do you need?',
    fallback2: "I don't have that specific detail, but you can check the contact section or ask about services.",
    responses: {
      greeting: 'Hello! Ask about projects, services, or the tech stack.',
      projects:
        'Under Projects you will find four examples: ops dashboard, CRM connector, design system, and optimized landing.',
      services:
        'I offer backend and API integration, frontend development, process automation, and performance optimization.',
      automation:
        'Automation covers scripts, integrations, and flows with retries and monitoring to reduce manual work.',
      api: 'I design and integrate APIs and the backend layer—endpoints, server-side data, and external services—with validation, controlled errors, and clear states.',
      contact: 'Use the form or WhatsApp and social links in the Contact section.',
      stack: 'Typical stack: React, TypeScript, Tailwind, testing with Vitest, and a focus on accessibility.',
      experience:
        'Experience centered on modern frontend, B2B products, and iterative improvements measured with web metrics.',
      price: 'For estimates, use the form or WhatsApp with scope and timelines; I will reply with next steps.',
    },
  },
} as const

export default en
