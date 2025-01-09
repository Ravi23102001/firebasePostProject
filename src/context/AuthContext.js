import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useReducer } from "react";
import { auth, db } from "../firebase/config";
import { toast } from "react-toastify";
import { doc, getDoc } from "firebase/firestore";

export const AuthContext = createContext()

const initialState = { user: null, isAuthenticated: false, userName: null };
const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload, isAuthenticated: true };
        case "LOGOUT":
            return { ...state, user: null, useName:null };
        case 'ON_AUTHREADY':
            return { ...state, user: action.payload, isAuthenticated: true };
        case 'GET_USER':
            return { ...state, userName: action.payload };
        default:
            return state;
    }
};


export const AuthContexProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState)


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, async (user) => {
            dispatch({ type: 'ON_AUTHREADY', payload: user })
            const docRef = doc(db, 'postUser', user.uid);
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                dispatch({ type: 'GET_USER', payload:docSnap.data()})
                toast.info( `Hai 👋 ${docSnap.data().firstName}`)
            }

        })

        return () => {
            unSubscribe()
        }
    }, [])
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}