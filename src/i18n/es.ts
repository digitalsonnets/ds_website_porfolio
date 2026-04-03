const es = {
  skip: 'Saltar al contenido',
  backToTop: 'Volver arriba',
  brand: 'Digital Sonnets',
  nav: {
    home: 'Inicio',
    about: 'Nosotros',
    projects: 'Proyectos',
    services: 'Servicios',
    blog: 'Blog',
    contact: 'Contacto',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },
  hero: {
    badge: 'Frontend · Automatización · APIs',
    title: 'Interfaces claras, procesos más eficientes.',
    subtitle:
      'Desarrollo frontend enfocado en integración de APIs, automatización de flujos y rendimiento medible.',
    ctaPrimary: 'Ver proyectos',
    ctaSecondary: 'Contactar',
    langLabel: 'Idioma',
    themeLabel: 'Tema',
    themeLight: 'Modo claro',
    themeDark: 'Modo oscuro',
  },
  about: {
    title: 'Nosotros',
    bio:
      'Desarrolladores frontend con interés en productos digitales que reducen fricción: componentes reutilizables, pipelines de datos fiables y experiencias accesibles. Combinamos TypeScript, React y herramientas de automatización para entregar valor de forma continua.',
    skillsTitle: 'Stack y enfoque',
    skills: [
      'React & TypeScript',
      'Tailwind CSS',
      'APIs REST / GraphQL',
      'CI/CD & scripts',
      'Rendimiento Web Vitals',
      'Accesibilidad (WCAG)',
    ],
    avatarAlt: 'Retrato profesional',
  },
  projects: {
    title: 'Proyectos',
    subtitle: 'Selección de trabajos y experimentos (placeholders).',
    demo: 'Demo',
    more: 'Ver más',
    items: [
      {
        title: 'Panel de operaciones',
        description:
          'Dashboard con datos en tiempo real, filtros guardados y exportación programada.',
        tech: ['React', 'TanStack Query', 'Zod'],
      },
      {
        title: 'Conector CRM ↔ ERP',
        description:
          'Sincronización bidireccional con reintentos, colas y monitorización de errores.',
        tech: ['Node', 'Webhooks', 'PostgreSQL'],
      },
      {
        title: 'Design system interno',
        description:
          'Biblioteca de componentes documentada, tokens y pruebas visuales en CI.',
        tech: ['React', 'Storybook', 'Vitest'],
      },
      {
        title: 'Landing performance-first',
        description:
          'Página estática con imágenes optimizadas, lazy hydration y métricas Core Web Vitals en verde.',
        tech: ['Vite', 'Tailwind', 'Lighthouse CI'],
      },
    ],
  },
  services: {
    title: 'Servicios',
    subtitle: 'Cómo puedo ayudar a tu equipo o producto.',
    items: [
      {
        id: 'frontend',
        title: 'Desarrollo frontend',
        description:
          'Interfaces modulares, tipado fuerte y patrones escalables alineados con diseño y negocio.',
      },
      {
        id: 'automation',
        title: 'Automatización de procesos',
        description:
          'Scripts, integraciones y flujos que eliminan tareas repetitivas y reducen errores manuales.',
      },
      {
        id: 'api',
        title: 'Integración de APIs',
        description:
          'Consumo y orquestación de servicios externos con manejo robusto de errores y estados.',
      },
      {
        id: 'perf',
        title: 'Optimización de rendimiento',
        description:
          'Auditorías, budgets de bundle y mejoras medibles en carga, interactividad y estabilidad visual.',
      },
    ],
  },
  blog: {
    title: 'Blog',
    subtitle: 'Notas breves sobre frontend y automatización.',
    readMore: 'Leer más',
    items: [
      {
        title: 'Checklist de accesibilidad en formularios',
        date: '2026-03-12',
        summary:
          'Etiquetas, mensajes de error asociados y foco visible: lo mínimo para pasar de “usable” a inclusivo.',
      },
      {
        title: 'Automatizar sin romper el flujo',
        date: '2026-02-28',
        summary:
          'Cuándo usar webhooks, colas o cron jobs — y cómo documentar fallos para que el equipo confíe en el sistema.',
      },
    ],
  },
  contact: {
    title: 'Contacto',
    subtitle: 'Cuéntame tu idea; respondo en breve.',
    name: 'Nombre',
    email: 'Email',
    message: 'Mensaje',
    submit: 'Enviar mensaje',
    sending: 'Enviando…',
    success:
      '¡Gracias por escribirnos! Tu mensaje se ha enviado correctamente. Te responderemos lo antes posible.',
    errorSend: 'No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.',
    required: 'Campo obligatorio',
    invalidEmail: 'Introduce un email válido',
    socialWhatsApp: 'WhatsApp',
    socialLinkedIn: 'LinkedIn',
    socialInstagram: 'Instagram',
    socialHint: 'También puedes escribirme por:',
  },
  footer: {
    locationLabel: 'Ubicación',
    phoneLabel: 'Teléfono',
    rights: 'Todos los derechos reservados.',
  },
  chat: {
    open: 'Abrir asistente',
    close: 'Cerrar asistente',
    title: 'Asistente del portafolio',
    placeholder: 'Pregunta por servicios, stack o proyectos…',
    send: 'Enviar',
    welcome:
      'Hola. Soy un asistente de demostración: puedo orientarte sobre proyectos, servicios, APIs o cómo contactar.',
    fallback1: 'Puedo ayudarte con proyectos, automatización, APIs o datos de contacto. ¿Qué te interesa?',
    fallback2: 'No tengo esa información concreta, pero puedes revisar la sección de contacto o preguntarme por servicios.',
    responses: {
      greeting: '¡Hola! Pregunta por proyectos, servicios o stack tecnológico.',
      projects: 'En Proyectos verás cuatro ejemplos: panel operativo, conector CRM, design system y landing optimizada.',
      services:
        'Ofrezco desarrollo frontend, automatización, integración de APIs y optimización de rendimiento.',
      automation:
        'La automatización incluye scripts, integraciones y flujos con reintentos y monitorización para reducir trabajo manual.',
      api: 'Integro APIs REST/GraphQL con validación de datos, manejo de errores y estados de carga claros para el usuario.',
      contact: 'Usa el formulario o los enlaces a WhatsApp y redes en la sección Contacto.',
      stack: 'Stack habitual: React, TypeScript, Tailwind, pruebas con Vitest y foco en accesibilidad.',
      experience:
        'Experiencia centrada en frontend moderno, productos B2B y mejoras iterativas medidas con métricas web.',
      price: 'Para presupuestos, escribe por el formulario o WhatsApp con el alcance y plazos; responderé con siguientes pasos.',
    },
  },
} as const

export default es
