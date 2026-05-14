import { useSocialLinks } from '../hooks/useSocialLinks'

interface LinkCardProps {
  href?: string
  icon: React.ReactNode
  label: string
  sublabel?: string
  accentColor?: string
}

function LinkCard({ href, icon, label, sublabel, accentColor = 'bg-brand-600' }: LinkCardProps) {
  if (!href) return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-2 rounded-2xl bg-white px-5 py-5 text-center shadow-sm border border-brand-100 transition-all hover:shadow-md hover:-translate-y-1 hover:border-brand-300 flex-1 min-w-[110px]"
    >
      <span className={`flex h-12 w-12 items-center justify-center rounded-full text-white ${accentColor} shadow-sm group-hover:scale-110 transition-transform`}>
        {icon}
      </span>
      <div>
        <p className="text-sm font-bold text-brand-800 leading-tight">{label}</p>
        {sublabel && <p className="text-xs text-brand-400 mt-0.5">{sublabel}</p>}
      </div>
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
    <section className="bg-brand-50/60 border-y border-brand-100 py-10 px-6">
      <div className="mx-auto max-w-3xl">
        {/* Heading compact */}
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-4 py-1 mb-3">
            <span className="text-gold-400 text-xs">✦</span>
            <span className="text-white text-xs font-semibold uppercase tracking-widest">Temukan Kami Di</span>
            <span className="text-gold-400 text-xs">✦</span>
          </div>
          <p className="text-sm text-brand-500">Belanja online atau hubungi admin untuk pemesanan khusus</p>
        </div>

        {/* Cards horizontal */}
        <div className="flex flex-wrap justify-center gap-3">
          {links.shopee && (
            <LinkCard
              href={links.shopee}
              icon={<ShopeeIcon />}
              label="Shopee"
              sublabel="Belanja online"
              accentColor="bg-orange-500"
            />
          )}
          {links.sidePart && (
            <LinkCard
              href={links.sidePart}
              icon={<PackageIcon />}
              label="Side Part"
              sublabel="Seserahan"
              accentColor="bg-brand-600"
            />
          )}
          {links.admin1 && (
            <LinkCard
              href={links.admin1}
              icon={<MessageIcon />}
              label="Admin 1"
              sublabel="WhatsApp"
              accentColor="bg-green-600"
            />
          )}
          {links.admin2 && (
            <LinkCard
              href={links.admin2}
              icon={<PhoneIcon />}
              label="Admin 2"
              sublabel="WhatsApp"
              accentColor="bg-green-700"
            />
          )}
        </div>
      </div>
    </section>
  )
}

