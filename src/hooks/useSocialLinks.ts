import { useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'

export interface SocialLinks {
  shopee?: string
  sidePart?: string
  admin1?: string
  admin2?: string
}

export function useSocialLinks() {
  const [links, setLinks] = useState<SocialLinks>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = onSnapshot(
      doc(db, 'app_settings', 'social_links'),
      (snap) => {
        if (snap.exists()) {
          setLinks(snap.data() as SocialLinks)
        }
        setLoading(false)
      },
      (err) => {
        console.error('Social links error:', err)
        setLoading(false)
      }
    )
    return () => unsub()
  }, [])

  return { links, loading }
}
