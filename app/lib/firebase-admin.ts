import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth';

const firebaseConfig = {
    credential: cert({
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
        privateKey: process.env.NEXT_PUBLIC_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        clientEmail: process.env.NEXT_PUBLIC_CLIENT_EMAIL
    })
}

export function initFirebaseApp() {
    getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig)
}

export function adminAuth() {
    return getAuth(getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig))
}