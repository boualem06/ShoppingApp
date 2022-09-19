import Navbar from "./Navbar";
import PersistentDrawerLeft from "./Drawer";
const NavbarResp=()=>{
    return(
        <div>
             <div className="hidden md:block">
                <Navbar ></Navbar>
            </div>
            <div className="md:hidden ">
                <PersistentDrawerLeft ></PersistentDrawerLeft>
            </div>
        </div>
    )
}
export default NavbarResp ;