import { initializeApp, getApps, cert } from 'firebase-admin/app'

const firebaseConfig = {
    credential: cert({
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
        privateKey: process.env.NEXT_PUBLIC_PRIVATE_KEY,
        clientEmail: process.env.NEXT_PUBLIC_CLIENT_EMAIL
    })
}

export function initFirebaseApp() {
    getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
}
