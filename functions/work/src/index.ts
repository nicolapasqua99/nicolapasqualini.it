import { onRequest } from 'firebase-functions/v2/https'
import { initializeApp } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

initializeApp()

exports.getPeopleData = onRequest({ cors: true }, async (req, res) => {
    const collectionData = await getFirestore().collection('people').get()
    if (collectionData) {
        let data: any = []
        collectionData.forEach((collectionElement: any) => {
            data.push(collectionElement.data())
        })
        res.json({ result: data })
    } else {
        res.json('Data requested not found')
    }
})

exports.getNotes = onRequest({ cors: true }, async (req, res) => {
    const collectionData = await getFirestore().collection('notes').get()
    if (collectionData) {
        let data: any = []
        collectionData.forEach((collectionElement: any) => {
            data.push(collectionElement.data())
        })
        res.json({ result: data })
    } else {
        res.json('Data requested not found')
    }
})