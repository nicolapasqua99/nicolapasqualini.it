import { initializeApp, getApps, getApp, cert, App } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'
import { getDatabase } from 'firebase-admin/database'

const firebaseConfig = {}

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
