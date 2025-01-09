import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth, db } from "../firebase/config"
import { toast } from "react-toastify"
import { doc, setDoc } from "firebase/firestore"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export const useAuthenticate=()=>{
    const {dispatch}=useContext(AuthContext)

    const signUp=(data)=>{
        createUserWithEmailAndPassword(auth,data.email,data.password)
        .then((res)=>{
            const user=res.user
            const userDoc=doc(db,'postUser',user.uid)
            setDoc(userDoc,{firstName:data.fName,lastName:data.lName, email:data.email,password:data.password}) 
            dispatch({type:'LOGIN', payload:user})
            toast.success('successfully signUp')
        })
        .catch((err)=>{
            toast.error(err.code)
        })
    }

    const signIn=(data)=>{
        signInWithEmailAndPassword(auth,data.email,data.password)
        .then((res)=>{
            const user=res.user
            console.log(auth, user, 'auth') 
            dispatch({type:'LOGIN', payload:user})
            toast.success('successfully signIn')
        })
        .catch((err)=>{
            toast.error(err.code)
        })
    }

    const logOut=()=>{
        signOut(auth)
        .then((res)=>{
            toast.success('Successfully User LogOut')
            dispatch({type:'LOGOUT'})
        })
        .catch((err)=>{
            toast.error(err.code)
        })
    }

    return{
        signUp,
        signIn,
        logOut
    }
}