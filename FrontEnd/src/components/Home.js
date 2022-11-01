import NavbarResp from "./NavbarResp";
import Menu from "./Menu";
import Footer from "./Footer";
import Body from "./Body";

const Home = ({cart}) => {
    return (

        <div className="">
            <NavbarResp cart={cart}></NavbarResp>
            <Body></Body>
            <Menu></Menu>
            <Footer></Footer>
        </div>)
}
export default Home;