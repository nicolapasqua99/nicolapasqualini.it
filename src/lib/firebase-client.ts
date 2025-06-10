import { initializeApp, getApps } from 'firebase/app'
import { getAuth, NextOrObserver, onAuthStateChanged, onIdTokenChanged, User } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL
}

export function getClientAuth() {
    return getAuth(getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig))
}

export function getClientFirestore() {
    return getFirestore(getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig))
}

export function getClientRealtimeDatabase() {
    return getDatabase(getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig))
}

export function getClientOnAuthStateChanged(callback: NextOrObserver<User>) {
  return onAuthStateChanged(getClientAuth(), callback);
}

export function getClientOnIdTokenChanged(callback: NextOrObserver<User>) {
  return onIdTokenChanged(getClientAuth(), callback);
}