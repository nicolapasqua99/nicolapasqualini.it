import { initializeApp, getApps, getApp, cert, App } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'
import { getDatabase } from 'firebase-admin/database'

const firebaseConfig = {
    credential: cert({
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        clientEmail: process.env.CLIENT_EMAIL
    })
}

function getAppInstance(): App {
    return getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)
}

export function getServerAuth() {
    return getAuth(getAppInstance())
}

export function getServerFirestore() {
    return getFirestore(getAppInstance())
}

export function getServerRealtimeDatabase() {
    return getDatabase(getAppInstance())
}
