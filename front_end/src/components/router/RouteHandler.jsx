import { Routes, Route } from "react-router-dom";
import Login from "../login/Login.jsx";
import SignUp from "../signUp/SignUp.jsx";
import Hero from "../hero/Hero.jsx";



export const RouteHandler = () =>{
    return(
        <>   
            <Routes>
               <Route exact path="/" element={<Hero/>}/>
               <Route path="/SignUp" element={<SignUp/>}/>
               <Route path="/Login" element={<Login/>}/>
               <Route path="/Hero" element={<Hero/>}/>

            </Routes>
        </>
    );
}