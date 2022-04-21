import React, { useState,useEffect } from 'react'
function OnRemoved() {
    const [bool, setbool] = useState(true);
    // const changeState = (bool) => {
    //   setbool(!bool);
    //   console.log(bool)
    // }
    // console.log("change")
    useEffect(() => {
      // document.querySelector('body').style.background = "yellow"
      // console.log('mounted');
      console.log("Mounted")
    
      return () => {
        console.log("Un-Mounted")
          // document.querySelector('body').style.background = "red"
          console.warn("xfvz",bool)
        
      }
    }, [])
    
  return (
 <>
 {bool ? <Example/> : null}
 <button onClick={()=>setbool(!bool)}>Removed Toggle</button>
 </>
  )
}

export default OnRemoved;





export  function Example() {
  const [X, setX] = useState(0)
  const [Y, setY] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)


function logMuse(e){
  setX(e.clientX)
  setY(e.clientY)
}
function size(){
  setWindowWidth(window.innerWidth)
}

useEffect(()=>{
  console.log("UseEffect")
  window.addEventListener("mousemove",logMuse)
  window.addEventListener("resize",size)
  
  console.log(window.innerWidth)
  
  return()=>{
    window.removeEventListener("mousemove",logMuse)
    console.log("Unmount")
  }
},[])

  return (
    <>
    <h1>X Axis : {X}/Y Axis : {Y}</h1>
    <h2>{windowWidth}</h2>
    </>
  )
}
