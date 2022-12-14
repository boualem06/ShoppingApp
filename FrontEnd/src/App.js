


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Detail from "./components/Detail";
import Cart from './components/Cart'
import Admin from './components/Admin'
import Login from "./components/Login";
import SignUp from "./components/Sign_Up";
import PrivateRoutes from "./components/PrivateRoutes";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import NewAdmin from "./components/NewAdmin";
import Test2 from "./components/Test";
function App() {
    let hello ;
    // const [Cart,setCart]=useState(true) ;
    const [element,setElement]=useState({}) ;
    const [cart,setCart]=useState([]) ;
    const [currentUser,setCurrentUser]=useState({}) ;
    const getMe=async()=>{
      let headersList = {
          "Accept": "*/*",
          "accestoken": localStorage.getItem('jwt'),
          "Content-Type": "application/json"
         }
         
         let response = await fetch("http://localhost:5000/me", { 
           method: "GET",
           headers: headersList
         });
         let data = await response.json();
         setCurrentUser(data)
     
        //  getCart() ;
  }

  const getCart=async()=>{
    
    let headersList = {
          "Accept": "*/*",
          "Content-Type": "application/json"
         }
         
         let response = await fetch(`http://localhost:5000/getCart/${currentUser.id}`, { 
           method: "GET",
           headers: headersList
         });
         
         let data = await response.json();
         console.log(data) ;
         setCart((data[0]).userProducts) ;
  }

  useEffect(()=>{
    getMe() ;
  },[])

  useEffect(()=>{
    getCart() ;
  },[currentUser])
  
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
  return (
    <Router>
      <Routes>
      <Route  path={'/'} element={<Home />}></Route>
        <Route element={<PrivateRoutes />}>
          <Route path={'/Home'} element={< Main cart={cart} setCart={setCart} element={element} setElement={setElement}/>} />
          <Route path={'/Admin'} element={<Admin />}></Route>
          <Route path={'/CreateAdmin'} element={<NewAdmin />}></Route>
          <Route path={'/Cart'} element={<Cart cart={cart} setCart={setCart} />}></Route>
          <Route path={'/Detail'} element={<Detail size={size} setSize={setSize} number={number} setNumber={setNumber} additional={additional} setAddittional={setAddittional}  element={element} cart={cart} setCart={setCart}/>}></Route>
        </Route>
        <Route path={'/Login'} element={<Login />}></Route>
        <Route path={'/SignUp'} element={<SignUp />}></Route>
      </Routes>
    </Router>

    // <Test2/>
  )
}




export default App;
