


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
function App() {

  // const [Cart,setCart]=useState([]) ;

  return (
    <Router>
      <Routes>
      <Route  path={'/'} element={<Home />}></Route>
        <Route element={<PrivateRoutes />}>
          <Route path={'/Home'} element={< Main  />} />
          <Route path={'/Admin'} element={<Admin />}></Route>
          <Route path={'/Cart'} element={<Cart />}></Route>
          <Route path={'/Detail'} element={<Detail />}></Route>
        </Route>
        <Route path={'/Login'} element={<Login />}></Route>
        <Route path={'/SignUp'} element={<SignUp />}></Route>
      </Routes>
    </Router>

    // <List></List>
    



  )
}




export default App;
