// import { useState, useEffect } from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Axios from "axios";
// import UserInfo from "./UserInfo";

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;

// <h1>{fact}</h1>
/* <button onClick={loadFact}>Click to load new Fact</button> */

// var [fact, setFact] = useState("");
//     useEffect(() => {
//         // console.log("mounting");
//         loadFact();
//         // console.log(fact);
//     }, []);

//     function loadFact() {
//         Axios.get("https://catfact.ninja/fact").then((res) => {
//             setFact(res.data.fact);
//         });
//     }

// API calls
/* 

    useEffect(() => {
        console.log("mounting");
        return console.log("unmounting");
    }, []);
    // Mounting
    // unmounting
    // updating

var [showMsg, setshowmessage] = useState(true);
var [msg, setMsg] = useState("");

<button
onClick={(e) => {
    setshowmessage(!showMsg);
}}
>
Clik to Age up!!
</button>
{showMsg ? (
<input
    type="text"
    onChange={(e) => {
        setMsg(e.target.value);
    }}
></input>
) : (
<></>
)}
<h1>{msg}</h1> */
// useEffect Hook

// <div className="App" id="testid" style={{color:'yellow', background: "darkblue"}} name={56}>
//             <h1 >Hello World</h1>
//         </div>

// some main attributes in react.

/* <>
            <UserInfo name={name} age={age} phone={phone}/>
        </> */

//props

// var he = <><h1>Hello from variable</h1></>;
// let a  = 3;
// var users = [
//     { name: "madi", age: 85 },
//     { name: "loki", age: 62 },
// ];
// return (
//     <div className="App">
//         {/* {a%2 === 0  ? <He /> : he} */}
//         {users.map((vals, keys) => {
//             console.log(vals);
//             return (
//                 <h1>
//                     {vals.name} : {vals.age}
//                 </h1>
//             );
//         })}
//     </div>
// );
