


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Detail from "./components/Detail";
import Cart from './components/Cart'
import Admin from './components/Admin'
import PersistentDrawerLeft from "./components/Drawer";
import NavbarResp from "./components/NavbarResp";
import Login from "./components/Login";
import SignUp from "./components/Sign_Up";
import PrivateRoutes from "./components/PrivateRoutes";
import Main from "./components/Main";
import Test from "./components/Main";
import List from "./components/List";
import { useState } from "react";
import Test2 from "./components/Test";
import NewProduct from "./components/NewProduct";
function App() {
    let hello ;
    // const [Cart,setCart]=useState(true) ;
    const [element,setElement]=useState({}) ;
    const [cart,setCart]=useState([
      
        {
          name: "Campagnoia",
          extras: "Spicy Sauce, Garlic Sauce",
          quantity: 2,
          price: "19.90",
  
      },
      {
          name: "Neapolitan",
          extras: "Spicy Sauce, Garlic Sauce",
          quantity: 2,
          price: "22.90",
      },
      {
          name: "Campagnoia",
          extras: "Spicy Sauce, Garlic Sauce",
          quantity: 2,
          price: "19.90",
  
      },
      {
        name: "Campagnoia",
        extras: "Spicy Sauce, Garlic Sauce",
        quantity: 2,
        price: "19.90",

    },
    {
        name: "Neapolitan",
        extras: "Spicy Sauce, Garlic Sauce",
        quantity: 2,
        price: "22.90",
    },
    {
        name: "Campagnoia",
        extras: "Spicy Sauce, Garlic Sauce",
        quantity: 2,
        price: "19.90",

    },
    {
      name: "Campagnoia",
      extras: "Spicy Sauce, Garlic Sauce",
      quantity: 2,
      price: "19.90",

  },
  {
      name: "Neapolitan",
      extras: "Spicy Sauce, Garlic Sauce",
      quantity: 2,
      price: "22.90",
  },
  {
      name: "Campagnoia",
      extras: "Spicy Sauce, Garlic Sauce",
      quantity: 2,
      price: "19.90",

  },
    ]) ;

    const [size, setSize] = useState("Small")
    const getSize = (e) => {
        setSize(e.target.textContent)
    }

    const [additional, setAddittional] = useState({
        Double_ingredients: false,
        Extra_cheese: false,
        spicy_sauce: false,
        garlic_sauce: false
    });


    const [number,setNumber]=useState(1) ;



    // console.log(cart.length)
    // console.log(element)
  return (
    <Router>
      <Routes>
      <Route  path={'/'} element={<Home />}></Route>
        <Route element={<PrivateRoutes />}>
          <Route path={'/Home'} element={< Main cart={cart} setCart={setCart} element={element} setElement={setElement}/>} />
          <Route path={'/Admin'} element={<Admin />}></Route>
          <Route path={'/Cart'} element={<Cart cart={cart} setCart={setCart} />}></Route>
          <Route path={'/Detail'} element={<Detail size={size} setSize={setSize} number={number} setNumber={setNumber} additional={additional} setAddittional={setAddittional}  element={element} cart={cart} setCart={setCart}/>}></Route>
        </Route>
        <Route path={'/Login'} element={<Login />}></Route>
        <Route path={'/SignUp'} element={<SignUp />}></Route>
      </Routes>
    </Router>

    // <Test2></Test2>


  )
}




export default App;
