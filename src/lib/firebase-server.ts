import { initializeApp, getApps, getApp, cert, App } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'
import { getDatabase } from 'firebase-admin/database'
import { credential } from 'firebase-admin'

const serviceAccount = require("../../firebase-service-account.json")

const firebaseConfig = {
    credential: credential.cert(serviceAccount),
    databaseURL: "https://nicolapasqualini-portfolio-default-rtdb.europe-west1.firebasedatabase.app"
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
