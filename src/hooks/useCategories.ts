import { useEffect, useState } from 'react'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'

export interface Category {
  id: string
  nama: string
}

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const q = query(
      collection(db, 'categories'),
      orderBy('nama', 'asc')
    )

    const unsub = onSnapshot(
      q,
      (snap) => {
        const data: Category[] = snap.docs.map((d) => ({
          id: d.id,
          nama: (d.data().nama as string) ?? '',
        }))
        setCategories(data)
        setLoading(false)
      },
      () => {
        setLoading(false)
      }
    )

    return () => unsub()
  }, [])

  return { categories, loading }
}
