import React,{useContext} from 'react'
import { ContextData } from '../../App'
function SuperChild() {
    const contextGetData = useContext(ContextData)
   
  return (
 <>
    <div style={{background:contextGetData.Appcolor}}>SuperChild</div>
    <button onClick={()=>{contextGetData.SetMyColor("red")}}>Click</button>
 </>
  )
}

export default SuperChild