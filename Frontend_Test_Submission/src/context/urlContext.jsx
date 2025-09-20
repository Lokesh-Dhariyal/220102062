import { createContext } from "react";
import axios from "./axios";

export const UserContext = createContext();

export const UserProvider = ({childern})=>{

    const shortningUrl = async(formData)=>{
        try {
            const res = axios.post("http://localhost:8000/shorturls",formData)
            return res.data
        } catch (error) {
            throw Error("Something went wrong while logging In",error)
        }
    }

    const getUrl = async()=>{
        try {
            const res = axios.get("http://localhost:8000/shorturls/:shortcode")
            return res.data
        } catch (error) {
            throw Error("Something went wrong while logging In",error)
        }
    }

    return <UserContext.Provider value={{shortningUrl,getUrl}}>
        {childern}
    </UserContext.Provider>
}