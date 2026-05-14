export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-brand-900 py-10 px-6 text-center text-sm text-brand-300">
      <p className="font-bold text-white text-base tracking-wide">X.Clusive Gift</p>
      <p className="mt-1 text-brand-300">Custom Florist & Giftshop</p>
      <div className="mx-auto mt-4 mb-4 flex items-center justify-center gap-3">
        <div className="h-px w-8 bg-gold-500 opacity-50" />
        <span className="text-gold-500 text-xs">✦</span>
        <div className="h-px w-8 bg-gold-500 opacity-50" />
      </div>
      <p className="text-xs text-brand-500">
        &copy; {year} Xclusive Gift. All rights reserved.
      </p>
    </footer>
  )
}
