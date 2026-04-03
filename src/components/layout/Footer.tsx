import { useLocale } from '../../context/LocaleContext'
import { CONTACT } from '../../data/contact'
import { BrandNameInline } from '../ui/BrandWordmark'
import {
  siteShellBg,
  siteShellBorderTop,
  siteShellContainer,
  siteShellVerticalPadding,
} from './siteShell'

export function Footer() {
  const { t } = useLocale()

  return (
    <footer className={`${siteShellBorderTop} ${siteShellBg} ${siteShellVerticalPadding}`}>
      <div className={`flex flex-col items-center gap-4 text-center ${siteShellContainer}`}>
        {CONTACT.showPhone ? (
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-medium text-slate-800 dark:text-slate-200">{t.footer.phoneLabel}: </span>
            <a href={`tel:${CONTACT.phoneTel}`} className="underline-offset-2 hover:underline">
              {CONTACT.phoneDisplay}
            </a>
          </p>
        ) : null}
        <p className="max-w-2xl font-sans text-sm text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()}{' '}
          <BrandNameInline className="text-slate-600 dark:text-slate-400" />. {t.footer.rights}{' '}
          {CONTACT.location}
        </p>
      </div>
    </footer>
  )
}
