import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../firebase/config'

export const useFetchCollection = (fbCollection) => {
    const [document, setDocument] = useState({
        data: [],
        loading: true
    })
    const collectionRef = collection(db, fbCollection)
    const queryRef=query(collectionRef, orderBy('createdAt','desc')) //desc means descending, asc means ascending

    useEffect(() => {
        const unSubscribe = onSnapshot(queryRef, (snapShot) => {
            const getDataFromDb = snapShot.docs.map((item) => {
                return { ...item.data(), id: item.id }
            })
            setDocument({ data: getDataFromDb, loading: false })
        })

        return()=>unSubscribe()
    }, [fbCollection])
    return {
        document
    }
}
