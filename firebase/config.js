import {initializeApp, getApps} from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyA-Xu5pUfPBsUbkMjl6xkDjN4dftDS5PZo',
  authDomain: 'check-dict.firebaseapp.com',
  databaseURL:
    'https://check-dict-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'check-dict',
  storageBucket: 'check-dict.appspot.com',
  messagingSenderId: '305847711567',
  appId: '1:305847711567:web:a96fea3afe9d17209a373a',
  //   appId: process.env.appId,
  //   apiKey: process.env.apiKey,
  //   authDomain: process.env.apiKey,
  //   databaseURL: process.env.databaseURL,
  //   projectId: process.env.projectId,
  //   storageBucket: process.env.storageBucket,
  //   messagingSenderId: process.env.messagingSenderId,
}

// Initialize Firebase
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

export default firebase_app
