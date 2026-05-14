import { useEffect, useState } from 'react'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'

export interface ShowcaseItem {
  id: string
  title: string
  description: string
  imageBase64: string
  category: string
  order: number
  isActive: boolean
  createdAt: string
}

export function useShowcaseItems() {
  const [items, setItems] = useState<ShowcaseItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Hanya orderBy saja — tanpa where() agar tidak butuh composite index.
    // Filter isActive dilakukan di sisi client setelah data diterima.
    const q = query(
      collection(db, 'showcase_items'),
      orderBy('order', 'asc')
    )

    const unsub = onSnapshot(
      q,
      (snap) => {
        const data: ShowcaseItem[] = snap.docs
          .map((d) => ({ id: d.id, ...(d.data() as Omit<ShowcaseItem, 'id'>) }))
          .filter((item) => item.isActive === true) // filter client-side
        setItems(data)
        setLoading(false)
        setError(null)
      },
      (err) => {
        console.error('Firestore error:', err)
        setError(err.message)
        setLoading(false)
      }
    )

    return () => unsub()
  }, [])

  return { items, loading, error }
}
