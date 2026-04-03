/** Visibilidad de bloques de la página (un solo lugar para activar/desactivar secciones). */
export const SITE_SECTIONS = {
  /** `false` oculta la sección Proyectos y los enlaces a #projects (el CTA principal del hero pasa a #services). */
  showProjects: false,
  /** `false` oculta la sección Blog y los enlaces a #blog. */
  showBlog: false,
} as const

/** Enlaces del listado bajo el hero (solo visible desde `md`). `contact` también controla el botón secundario (p. ej. Contactar). */
export const HERO_QUICK_NAV = {
  about: false,
  services: false,
  contact: false,
  /** Botón principal del hero (p. ej. Ver proyectos / ir a #projects o #services). */
  primaryCta: false,
} as const
