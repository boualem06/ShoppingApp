import Navbar from "./Navbar";
import Menu from "./Menu";
import Footer from "./Footer";
import Body from "./Body";
import PersistentDrawerLeft from "./Drawer";
const Home = () => {
    return (

        <div className="">
            <div className="hidden md:block">
                <Navbar ></Navbar>
            </div>
            <div className="md:hidden ">
                <PersistentDrawerLeft ></PersistentDrawerLeft>
            </div>
            {/* <div className="pt-28 md:mt-10"> */}
            <Body></Body>
            {/* </div> */}
            <Menu></Menu>
            <Footer></Footer>
        </div>)
}
export default Home;