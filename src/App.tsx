import { FloatingChat } from './components/chat/FloatingChat'
import { BackToTop } from './components/ui/BackToTop'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { About } from './components/sections/About'
import { Blog } from './components/sections/Blog'
import { Contact } from './components/sections/Contact'
import { Hero } from './components/sections/Hero'
import { SITE_SECTIONS } from './data/site'
import { Projects } from './components/sections/Projects'
import { Services } from './components/sections/Services'
import { LocaleProvider, useLocale } from './context/LocaleContext'
import { ThemeProvider } from './context/ThemeContext'

function SkipLink() {
  const { t } = useLocale()
  return (
    <a
      href="#main"
      className="skip-link sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
    >
      {t.skip}
    </a>
  )
}

function AppShell() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        {SITE_SECTIONS.showProjects ? <Projects /> : null}
        <Services />
        {SITE_SECTIONS.showBlog ? <Blog /> : null}
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <FloatingChat />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <AppShell />
      </LocaleProvider>
    </ThemeProvider>
  )
}
