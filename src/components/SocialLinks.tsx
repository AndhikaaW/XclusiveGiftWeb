import { useSocialLinks } from '../hooks/useSocialLinks'

interface LinkButtonProps {
  href?: string
  icon: React.ReactNode
  label: string
  sublabel?: string
}

function LinkButton({ href, icon, label, sublabel }: LinkButtonProps) {
  if (!href) return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 rounded-2xl bg-white/10 px-5 py-4 text-white backdrop-blur-sm border border-white/10 transition hover:bg-white/20 hover:shadow-lg hover:border-gold-400/40"
    >
      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-brand-500/50 text-white border border-gold-400/30">
        {icon}
      </span>
      <div className="text-left">
        <p className="font-semibold leading-tight">{label}</p>
        {sublabel && <p className="text-sm text-brand-200">{sublabel}</p>}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ml-auto h-5 w-5 text-gold-400/70"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  )
}

const ShopeeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
)
const PackageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
  </svg>
)
const MessageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
)
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

export default function SocialLinks() {
  const { links, loading } = useSocialLinks()

  if (loading) return null

  const hasAny = links.shopee || links.sidePart || links.admin1 || links.admin2
  if (!hasAny) return null

  return (
    <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 py-16 px-6">
      <div className="mx-auto max-w-xl">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-white">Temukan Kami Di</h2>
          {/* Garis emas dekoratif */}
          <div className="mx-auto mt-3 mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-gold-400 opacity-60" />
            <span className="text-gold-400 text-xs uppercase tracking-widest font-semibold">X.Clusive Gift</span>
            <div className="h-px w-10 bg-gold-400 opacity-60" />
          </div>
          <p className="text-brand-200">
            Belanja online atau hubungi admin untuk pemesanan khusus
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {links.shopee && (
            <LinkButton href={links.shopee} icon={<ShopeeIcon />} label="Shopee" sublabel="Belanja di Shopee" />
          )}
          {links.sidePart && (
            <LinkButton href={links.sidePart} icon={<PackageIcon />} label="Side Part" sublabel="X.Clusive_Seserahan" />
          )}
          {links.admin1 && (
            <LinkButton href={links.admin1} icon={<MessageIcon />} label="Booking Admin 1" sublabel="Chat via WhatsApp" />
          )}
          {links.admin2 && (
            <LinkButton href={links.admin2} icon={<PhoneIcon />} label="Booking Admin 2" sublabel="Chat via WhatsApp" />
          )}
        </div>
      </div>
    </section>
  )
}

