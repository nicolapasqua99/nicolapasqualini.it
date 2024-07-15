import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase-admin/firestore'

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL
}


export function initFirebaseApp() {
    getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)
}

export function auth() {
    return getAuth(getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig))
}

export function firestore() {
    return getFirestore(getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig))
}
