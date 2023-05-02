import NavbarResp from "./NavbarResp";
import Menu from "./Menu";
import Footer from "./Footer";
import Body from "./Body";

const Home = ({ cart }) => {
    return (

        <div style={{minHeight:"100%"}} className="flex flex-col ">
            <NavbarResp cart={cart}></NavbarResp>
            <div className="">
                <Body></Body>
                <Menu></Menu>
            </div>

            <div className="mt-auto">
                <Footer ></Footer>
            </div>

        </div>)
}
export default Home;