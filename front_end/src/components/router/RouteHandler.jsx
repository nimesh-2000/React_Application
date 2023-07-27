import { Routes, Route } from "react-router-dom";
import Login from "../login/Login.jsx";
import SignUp from "../signUp/SignUp.jsx";
import Hero from "../hero/Hero.jsx";
import AdminLogin from "../admin/AdminLogin.jsx";
import AdminDash from "../admin/AdminDash.jsx";
import ItemUpdate from "../items/ItemUpdate.jsx";
import Cart from "../cart/Cart.jsx";
import OrdersCart from "../orders/OrdersCart.jsx";
import ViewOrders from "../orderView/ViewOrders.jsx";



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
               <Route path="/cart" element={<Cart/>}/>
               <Route path="/ordersCart" element={<OrdersCart/>}/>
               <Route path="/viewOrders" element={<ViewOrders/>}/>
               <Route path="/payments" element={<ViewOrders/>}/>
            </Routes>
        </>
    );
}