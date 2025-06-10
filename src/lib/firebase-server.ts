import { initializeApp, getApps, getApp, cert } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'
import { getDatabase } from 'firebase-admin/database'

const firebaseConfig = {
    credential: cert({
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
        privateKey: process.env.NEXT_PUBLIC_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        clientEmail: process.env.NEXT_PUBLIC_CLIENT_EMAIL
    })
}

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)

export function getServerAuth() {
    return getAuth(app)
}

export function getServerFirestore() {
    return getFirestore(app)
}

export function getServerRealtimeDatabase() {
    return getDatabase(app)
}
