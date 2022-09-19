


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Detail from "./components/Detail";
import Cart from './components/Cart'
function App() {
  
  return (
    // <Router>
    //   <Routes>
    //     <Route element={<PrivateRoutes />}>
    //       <Route path={'/'} element={<BlogList />} />
    //       <Route path={'/NewBlog'} element={<NewBlog initialblog={initial} />} />
    //       <Route path={'/MyBlogs'} element={< MyBlogs/>} />
    //       MyBlogs
    //     </Route>
    //     <Route path={'/Signup'} element={<SignUp />} />
    //     <Route exact path={'/login'} element={<Login />} />
    //   </Routes>
    // </Router>

    <Cart></Cart>
  )
}




export default App;
