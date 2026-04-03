import { useLocale } from '../../context/LocaleContext'

const LOGO_NAV = 'isotipo_ds.png'

/** Sube al reemplazar el PNG en `public/`. */
const NAV_LOGO_VERSION = '3'

const logoUrlNav = `/${LOGO_NAV}?v=${NAV_LOGO_VERSION}`

export const BRAND_LOGO_SRC = logoUrlNav

type Size = 'nav' | 'footer'

type Props = {
  size?: Size
  className?: string
}

const boxNavImg =
  'relative inline-flex h-12 max-h-14 w-auto max-w-[min(92vw,240px)] shrink-0 items-center sm:h-14 sm:max-h-16 md:h-16 md:max-w-[min(92vw,288px)]'
const boxNavLockup =
  'inline-flex max-w-[min(100%,min(92vw,500px))] shrink-0 items-center gap-1.5 sm:gap-2'
const navWordmark =
  'inline-block w-max font-sans leading-none text-lg font-semibold tracking-tight text-slate-900 dark:text-white sm:text-xl md:text-2xl'
const navWordmarkLines = 'flex flex-col gap-y-0.5'
const navWordmarkRule =
  'mt-1 block h-px w-full shrink-0 bg-slate-900 dark:bg-white'
const boxFooterImg =
  'relative inline-flex h-8 max-h-9 w-auto max-w-[min(92vw,180px)] shrink-0 items-center sm:h-9 sm:max-h-10 md:max-w-[min(92vw,220px)]'
const imgFillNav = 'h-full w-auto max-h-full max-w-full object-contain object-left'

export function BrandLockup({ size = 'nav', className = '' }: Props) {
  const { t } = useLocale()
  const intrinsic =
    size === 'nav' ? { width: 128, height: 128 } : { width: 96, height: 96 }

  const img = (
    <img
      src={logoUrlNav}
      alt=""
      width={intrinsic.width}
      height={intrinsic.height}
      decoding="async"
      className={imgFillNav}
    />
  )

  if (size === 'footer') {
    return (
      <span className={`${boxFooterImg} ${className}`}>{img}</span>
    )
  }

  const words = t.brand.trim().split(/\s+/)
  const first = words[0] ?? t.brand
  const rest = words.slice(1).join(' ')

  return (
    <span className={`${boxNavLockup} ${className}`}>
      <span className={boxNavImg}>{img}</span>
      <span className={navWordmark}>
        <span className={navWordmarkLines}>
          <span className="block">{first}</span>
          {rest ? <span className="block">{rest}</span> : null}
        </span>
        <span aria-hidden className={navWordmarkRule} />
      </span>
    </span>
  )
}

export function BrandNameInline({ className = '' }: { className?: string }) {
  const { t } = useLocale()
  return (
    <span className={`font-sans font-semibold tracking-tight ${className}`}>
      {t.brand}
    </span>
  )
}
