import React,{useContext} from "react";
import { ContextData } from "../../App";
export function SuperSibling(){
    const GetContextData = useContext(ContextData);
    return(
        <>
        <h1 style={{background:GetContextData.Appcolor}}>SuperSibling.</h1>
        <button onClick={()=>GetContextData.SetMyColor("blue")}>Click</button>
        </>
    )
}