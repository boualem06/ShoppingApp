import Navbar from "./Navbar";
import PersistentDrawerLeft from "./Drawer";
const NavbarResp=({cart})=>{
    
    return(
        <div>
             <div className="hidden md:block">
                <Navbar cart={cart} ></Navbar>
            </div>
            <div className="md:hidden ">
                <PersistentDrawerLeft  ></PersistentDrawerLeft>
            </div>
        </div>
    )
}
export default NavbarResp ;