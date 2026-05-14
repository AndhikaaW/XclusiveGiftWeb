import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDkgXlRjq2R0VoKDOIe9WAu4EOWHemeIek',
  authDomain: 'xclusive-gift.firebaseapp.com',
  projectId: 'xclusive-gift',
  storageBucket: 'xclusive-gift.firebasestorage.app',
  messagingSenderId: '617800912133',
  appId: '1:617800912133:web:76b58e9df4e4f17b623b6c',
  measurementId: 'G-C51ZKXQ8MZ',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
