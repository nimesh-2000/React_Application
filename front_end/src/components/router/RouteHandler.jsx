import { Routes, Route } from "react-router-dom";
import Login from "../login/Login.jsx";
import SignUp from "../signUp/SignUp.jsx";
import Hero from "../hero/Hero.jsx";
import AdminLogin from "../admin/AdminLogin.jsx";
import AdminDash from "../admin/AdminDash.jsx";
import ItemUpdate from "../items/ItemUpdate.jsx";



export const RouteHandler = () =>{
    return(
        <>   
            <Routes>
               <Route exact path="/" element={<Hero/>}/>
               <Route path="/SignUp" element={<SignUp/>}/>
               <Route path="/Login" element={<Login/>}/>
               <Route path="/Hero" element={<Hero/>}/>
               <Route path="/admin" element={<AdminLogin/>}/>
               <Route path="/adminDash" element={<AdminDash/>}/>
               <Route path="/itemUpdate/:id" element={<ItemUpdate/>}/>
            </Routes>
        </>
    );
}