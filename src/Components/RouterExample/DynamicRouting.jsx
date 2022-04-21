import React from 'react'
import Data from "../Data.json"
import {Link} from "react-router-dom"
import { Route } from 'react-router-dom'
import Users from './Users'
export default function DynamicRouting() {
return (<>
    <h1>Dynamic Routing</h1>
    <ul>
        {Data.map((items,i)=><li key={i}>

            <Link to={`/User/${items.name}/${items.id}`}>{items.name} </Link> </li> )} <li>
            <Link to="/">Back to home</Link>
        </li>
    </ul>
    <Route path="/User/:name/:id">
        <Users />
    </Route>

</>
)
};