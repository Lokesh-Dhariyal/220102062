import { createContext } from "react";
import axios from "./axios";

export const UserContext = createContext();

export const UserProvider = ({childern})=>{

    const registerUeser = async(formData)=>{
        try {
            const res = axios.post("http://localhost:8000/register",formData)
            return res.data
        } catch (error) {
            throw Error("Something went wrong while logging In",error)
        }
    }

    const loginUser = async(formData)=>{
        try {
            const res = axios.post("http://localhost:8000/login",formData)
            return res.data
        } catch (error) {
            throw Error("Something went wrong while logging In",error)
        }
    }

    return <UserContext.Provider value={{registerUeser,loginUser}}>
        {childern}
    </UserContext.Provider>
}