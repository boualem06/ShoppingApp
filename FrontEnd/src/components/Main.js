import NavbarResp from "./NavbarResp";
import { useState } from "react";
import pizza from '../img/pizza.png'
import Footer from "./Footer";
import  Item from "./List";
const Main = ({Cart,setCart}) => {
    
    // const [Cart,setCart]=useState([]) ;

    return (

        <div className="w-full">
            <div className="position fixed top-0 w-full"><NavbarResp Cart={Cart}></NavbarResp></div>
            <h1 className="text-7xl text-center font-lobster mt-20 mb-6 text-orange-600">Choose your Food</h1>
            <Item Cart={Cart} setCart={setCart} ></Item>
            <Footer></Footer>
        </div>
    )
}

export default Main;



