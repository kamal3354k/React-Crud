// import { RouterExample } from "./Components/MyExamples/RouterExample";
// import {BrowserRouter as Router} from "react-router-dom"
// import DynamicRouting from "./Components/RouterExample/DynamicRouting";
// import MyForm from "./Components/FormWithApi/MyForm";
import DataFetch from "./Components/API_Crud_Table/CombinedDataFetch";
// import Parent from "./Components/NewComponents/Parent";
// import PortalExample from "./Components/PortalExample";
// import React,{createContext, useState} from "react"
// import OnRemoved from "./Components/UseEffectComponent/OnRemoved";
// import Child from "./Components/Context/Child";
// import ComponentWillUnmountByButton from "./Components/UseEffectComponent.jsx/ComponentWillUnmount";


// export const ContextData = createContext(); 


function App() {
    // const [color, setcolor] = useState("green")
return (
    // <ContextData.Provider value={{ Appcolor:color,SetMyColor:setcolor }}>
    <div className="App">
    {/* <Router> */}
    {/* <RouterExample/> */}
    {/* <DynamicRouting/> */}
    {/* </Router> */}
    {/* <MyForm/> */}
<DataFetch/>

{/* <Child/> */}


{/* <ComponentWillUnmountByButton/> */}
{/* <OnRemoved/> */}


{/* <PortalExample/> */}
{/* <Parent/> */}
</div>
// </ContextData.Provider>
);
}

export default App;