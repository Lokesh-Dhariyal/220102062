import { useContext } from "react";
import { UserContext } from "../context/userContext";

export const useUser = useContext(UserContext)
if(!useUser){
    throw new Error("User the function in element that is wrapped around it")
}