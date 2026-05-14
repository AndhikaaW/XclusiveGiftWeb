import { useShowcaseItems } from '../hooks/useShowcaseItems'

export default function ProductShowcase() {
  const { items, loading, error } = useShowcaseItems()

  return (
    <section id="showcase" className="bg-white py-16 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-brand-800">
            Koleksi <span className="text-gold-500">Produk</span>
          </h2>
          <div className="mx-auto mt-3 mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-brand-300" />
            <span className="text-brand-500 text-xs uppercase tracking-widest font-semibold">Xclusive Gift</span>
            <div className="h-px w-12 bg-brand-300" />
          </div>
          <p className="text-brand-600/70">
            Pilihan hadiah terbaik untuk setiap momen
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-200 border-t-brand-700" />
          </div>
        )}

        {/* Error dengan pesan lebih detail di console */}
        {error && (
          <div className="mx-auto max-w-sm rounded-xl border border-red-100 bg-red-50 px-6 py-8 text-center">
            <p className="text-red-500 font-medium">Gagal memuat produk.</p>
            <p className="mt-1 text-xs text-red-400">Periksa koneksi dan konfigurasi Firestore.</p>
          </div>
        )}

        {/* Kosong */}
        {!loading && !error && items.length === 0 && (
          <div className="mx-auto max-w-sm rounded-xl border border-brand-100 bg-brand-50 px-6 py-12 text-center">
            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
              </svg>
            </div>
            <p className="text-brand-700 font-medium">Belum ada produk yang ditampilkan.</p>
            <p className="mt-1 text-sm text-brand-500">Tambahkan item etalase melalui aplikasi admin.</p>
          </div>
        )}

        {/* Grid produk */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm transition hover:shadow-lg hover:-translate-y-1"
            >
              {/* Gambar */}
              {item.imageBase64 ? (
                <div className="overflow-hidden">
                  <img
                    src={`data:image/jpeg;base64,${item.imageBase64}`}
                    alt={item.title}
                    className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="flex h-56 items-center justify-center bg-brand-50 text-brand-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}

              {/* Info */}
              <div className="p-4">
                {item.category && (
                  <span className="mb-2 inline-block rounded-full bg-brand-100 px-3 py-0.5 text-xs font-semibold text-brand-700">
                    {item.category}
                  </span>
                )}
                <h3 className="mt-1 font-bold text-brand-800 leading-snug">{item.title}</h3>
                {item.description && (
                  <p className="mt-1 line-clamp-2 text-sm text-brand-600/70">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
