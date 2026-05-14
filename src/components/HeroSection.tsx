export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-brand-100/40 to-cream py-24 px-6">
      {/* Lingkaran dekoratif selaras logo */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-brand-200 opacity-30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-12 -left-12 h-56 w-56 rounded-full bg-brand-300 opacity-20 blur-2xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400 opacity-10 blur-2xl" />

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Badge */}
        <p className="mb-4 inline-block rounded-full bg-brand-700 px-5 py-1.5 text-sm font-semibold tracking-wide text-white shadow">
          ✦ Hadiah Eksklusif untuk Momen Spesialmu
        </p>

        {/* Logo teks */}
        <h1 className="mb-5 text-5xl font-extrabold leading-tight tracking-tight text-brand-800 md:text-6xl">
          X<span className="text-gold-500">clusive</span>{' '}
          <span className="text-brand-700">Gift</span>
        </h1>

        {/* Garis emas dekoratif */}
        <div className="mx-auto mb-6 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-gold-500 opacity-60" />
          <span className="text-gold-500 text-xs uppercase tracking-widest font-semibold">Florist & Giftshop</span>
          <div className="h-px w-16 bg-gold-500 opacity-60" />
        </div>

        <p className="mx-auto mb-10 max-w-xl text-lg text-brand-800/80">
          Buket bunga, seserahan, dan hadiah personal yang cantik &amp; berkesan.
          Dipesan mudah, dikirim dengan kasih sayang.
        </p>
        <a
          href="#showcase"
          className="inline-block rounded-full bg-brand-700 px-9 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-brand-800 hover:shadow-xl"
        >
          Lihat Koleksi ↓
        </a>
      </div>
    </section>
  )
}
