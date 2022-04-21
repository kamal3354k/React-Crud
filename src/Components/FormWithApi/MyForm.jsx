import React from 'react'
import {Button,Table} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import { useState,useEffect } from 'react';



export default function MyForm(prop) {

// state to store data
const [name, setname] = useState("");
const [number, setnumber] = useState("");
const [counter, setCounter] = useState(0);



// on button click posting the data /
function SubmitData(e){
    console.log({name,number})
    if(name!=="" && number!==""){
        let StringData = {name,number}
    fetch("http://localhost:3000/users",{method:'POST',headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    },
    body:JSON.stringify(StringData)
}).then(result=>console.log(result));
e.preventDefault();
setCounter(counter+1)
}
else{
alert("Please enter the Data")
}
setname("")
setnumber("")
}




return (<>
    <form onSubmit={SubmitData}>
        <h1>Entring Form </h1>
        <input type="text" placeholder='Enter Your Name' name="name" onChange={(e)=>setname(e.target.value)}
        value={name} /><br /><br />
        <input type="number" placeholder='Enter Your Number' name="number"
            value={number}onChange={(e)=>setnumber(e.target.value)} /><br /><br />
        <Button type="submit">Submit</Button>
    </form>
    <DataComponent counter={counter} />
</>
)
}





// other table component to show the data in the table
function DataComponent(prop){
const [GetData, setGetData] = useState("");
useEffect(() => {
fetch("http://localhost:3000/users").then(result=>result.json()).then(res=>{setGetData(res)})

}, [prop.counter])
return(
<>
    <h2>Data Base </h2>
    <br />
    <Table bordered="1" variant='dark' striped hover>
        <tbody>
            {GetData?GetData.map((items,i)=><tr key={i}>
                <td>{items.id}</td>
                <td>{items.name}</td>
                <td>{items.number}</td>
            </tr>):null}
        </tbody>
    </Table>
</>
)
}