import Navbar from "./Navbar";
import PersistentDrawerLeft from "./Drawer";
const NavbarResp=({Cart})=>{
    return(
        <div>
             <div className="hidden md:block">
                <Navbar Cart={Cart} ></Navbar>
            </div>
            <div className="md:hidden ">
                <PersistentDrawerLeft ></PersistentDrawerLeft>
            </div>
        </div>
    )
}
export default NavbarResp ;