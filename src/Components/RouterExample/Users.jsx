import React from 'react'
import {withRouter} from 'react-router';
import Data from "../Data.json";
import { useLocation,useHistory } from 'react-router-dom'
import {useParams} from "react-router-dom"
function Users(prop) {
  
let ParamsData = useParams();
console.log(ParamsData)

let HistoryData = useHistory();
console.log(HistoryData)


let LocationData = useLocation();
console.log(LocationData)

    console.log("User "+JSON.stringify(prop.match.params.id) )
  return (
    <>
    <table border="1">
      <tbody>
      <tr><td>{Data[prop.match.params.id].id}</td></tr>
      <tr><td>{Data[prop.match.params.id].name}</td></tr>
      <tr><td>{Data[prop.match.params.id].Email}</td></tr>
      <tr><td>{Data[prop.match.params.id].Number}</td></tr>
      </tbody>
    </table>
    </>
    )
}

export default withRouter(Users)