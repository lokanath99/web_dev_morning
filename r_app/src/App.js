import { useState, useEffect } from "react";
import "./App.css";

// import UserInfo from "./UserInfo";

function App() {
    var [showMsg, setshowmessage] = useState(true);
    var [msg, setMsg] = useState("");
    useEffect(() => {
        console.log("mounting");
        return console.log("unmounting");
    }, []);
    // Mounting
    // unmounting
    // updating

    // var age = 0;
    return (
        <div className="App">
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
            <h1>{msg}</h1>
        </div>
    );
}

export default App;

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
