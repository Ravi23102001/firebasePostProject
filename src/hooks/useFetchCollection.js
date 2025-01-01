import { collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase/config'

export const useFetchCollection = (fbCollection) => {
    const [document, setDocument] = useState()
    const collectionRef = collection(db, fbCollection)

    useEffect(() => {
        const unSubscribe = onSnapshot(collectionRef, (snapShot) => {
            const getDataFromDb = snapShot.docs.map((item) => {
                return { ...item.data(), id: item.id }
            })
            console.log(getDataFromDb)
            setDocument(getDataFromDb)
        })

        return()=>unSubscribe()
    }, [fbCollection])
    return {
        document
    }
}
