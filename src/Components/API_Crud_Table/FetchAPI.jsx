import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Table,Container,Col,Row,Button } from 'react-bootstrap';

export default function FetchAPI() {

const [FetchData, setFetchData] = useState("");
const [couter ,setcouter] = useState(0);
const [AddMoreBoolean, setAddMoreBoolean] = useState(false);


const [Tranfername, setTranfername] = useState("")
const [TranferID, setTranferID] = useState("")
const [Tranferemail, setTranferemail] = useState("")
const [Tranfernumber, setTranfernumber] = useState("")


useEffect(()=>{
fetch("http://localhost:3000/users").then(result=>result.json()).then(res=>{setFetchData(res)});
},[couter])




// Delete table value on button click

function DeleteFunction(id){
console.log(id,couter)
fetch(`http://localhost:3000/users/${id}`,{method:"DELETE"});
setcouter(couter+1)
}


// Assign Table Value to Registeration Form

function UpdateFunction(id){
let store = FetchData[id-1];
setTranferID(FetchData[id-1].id);
console.log(store)
setTranfername(store.name);
setTranferemail(store.email);
setTranfernumber(store.number);
}



// put method function

function UpdateFun(id,name,email,number){



  
let forString = {id,name,email,number}
fetch(`http://localhost:3000/users/${TranferID}`,{method:"PUT",headers:{
"Accept":"application/json",
"Content-Type":"application/json"
},body:JSON.stringify(forString)}).then(result=>result.json()).then(res=>console.log(res))

if(AddMoreBoolean===true){
fetch(`http://localhost:3000/users`,{method:"POST",headers:{
"Accept":"application/json",
"Content-Type":"application/json"
},body:JSON.stringify(forString)}).then(result=>result.json()).then(res=>console.log(res));
}

setAddMoreBoolean(false)
setcouter(couter+1)
console.log(id)
}






// Add More Data function
function AddMoreFun(id,name,email,number){
setAddMoreBoolean(true)
setTranfername("")
setTranfernumber("")
setTranferemail("")
}


return (
<>
  <Container>
    <Row>
      <Col lg="8">
      <Table variant="light" striped hover>
        <tbody>
          <tr>
            <th width="20%">ID</th>
            <th width="20%">Name</th>
            <th width="20%">Email</th>
            <th width="20%">Number</th>
            <th width="20%" colSpan={2}>Modification</th>
          </tr>

          {
          FetchData?FetchData.map((items,i)=><tr key={i}>
            <td>{items.id}</td>
            <td>{items.name}</td>
            <td>{items.email}</td>
            <td>{items.number}</td>
            <td><Button onClick={()=>{DeleteFunction(items.id)}}>Delete</Button></td>
            <td><Button onClick={()=>{UpdateFunction(items.id)}}>Update</Button></td>
          </tr>):null
          }

        </tbody>
      </Table>
      <Button onClick={()=>{AddMoreFun(TranferID,Tranfername,Tranferemail,Tranfernumber)}}>Add More</Button>
      </Col>
      <Col lg="4">
      <div id="formBox">
        <h3>Form</h3>
        <input type="text" onChange={(e)=>{setTranfername(e.target.value)}} value={Tranfername} placeholder='Enter Your
        Name!' /><br />
        <input type="text" onChange={(e)=>{setTranferemail(e.target.value)}} value={Tranferemail} placeholder='Enter
        Your Email' /><br />
        <input type="text" onChange={(e)=>{setTranfernumber(e.target.value)}} value={Tranfernumber} placeholder='Enter
        Your Number' /><br />
        <Button onClick={()=>{UpdateFun(TranferID,Tranfername,Tranferemail,Tranfernumber)}}>Submit</Button>
      </div>
      </Col>
    </Row>

  </Container>

</>
)
}