import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "..//firebase";
import { Login } from "../components/Login/Login";
import { Home } from "../components/home/Home";
import { Signup } from "../components/registro/Signup";
import { useEffect, useState } from "react";

export function MyRoutes()
{
    const[Usuario,setUsuario] = useState([])
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user){
                setUsuario(user.displayName)
            }
            else setUsuario("")
        })
    }, [])
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home name={Usuario} />}/>
                <Route exact path="/Login" element={<Login />}/>
                <Route exact path="/signup" element={<Signup />}/>
            </Routes>
        </Router>
    )
}