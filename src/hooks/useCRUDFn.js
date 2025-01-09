import { addDoc, collection, deleteDoc, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import { toast } from 'react-toastify'

export const useCRUDFn = (fbCollection) => {
    const collectionRef = collection(db, fbCollection)

    const addDocument=async(addData)=>{
        try {
            const docRef=await addDoc(collectionRef,{...addData,createAt:serverTimestamp()})
            toast.success('successfully added data')
            
        } catch (error) {
            toast.error(error.messages)
        }
    }


    const deleteDocument =async (id) => {
        const docRef=doc(db,fbCollection,id);
        try {
            const deleteDocRef=await deleteDoc(docRef)
            toast.success('successfully deleted data')
        } catch (error) {
            toast.error(error.messages)
        }
        
    }


    const updateDocument =async (id,data) => {
        const docRef=doc(db,fbCollection,id)
        try {
            const updateDocRef=await updateDoc(docRef,{...data,createdAt:serverTimestamp()})
            toast.success('successfully updated data')
        } catch (error) {
            toast.error(error.messages)
        }
    }


    return {addDocument, deleteDocument, updateDocument}
}
