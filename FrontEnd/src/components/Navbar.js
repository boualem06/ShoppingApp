import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CallTwoTone from '@material-ui/icons/CallTwoTone'
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

const Navbar = ({cart}) => {
    const [currentUser, setCurrentUser] = useState({});
    useEffect(() => {
        const getMe = async () => {
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
            console.log(data)
        }
        getMe();
    }, [])

    return (
        <div className='bg-gradient-to-r from-orange-600  py-1  to-orange-700 px-4'>
            <div className=" flex justify-between items-center lg:px-16 ">

                <div className='flex items-center text-white'>
                    <CallTwoTone fontSize='large'></CallTwoTone>
                    <div className='ml-2 text-white text-sm flex flex-col'>
                        <span>ORDER NOW!</span>
                        <span className='font-bold '>012 345 678</span>
                    </div>
                </div>

                <div>
                    <span className='text-white text-5xl  cursor-pointer mr-8  font-lobster l hover:font-bold '>ShoppingApp</span>
                </div>

                <div className='flex justify-center items-center'>
                    

                    {currentUser.admin && <div>
                            <span className='text-white mr-8 text-xl  cursor-pointer  hover:font-bold'><Link to={"/Admin"}>Admin Panel</Link></span>
                    </div>}

                    {currentUser.admin && <div>
                            <span className='text-white mr-8 text-xl  cursor-pointer  hover:font-bold'><Link to={"/CreateAdmin"}>Create Admin</Link></span>
                    </div>}

                    {!localStorage.getItem('jwt') ?
                        <div className=''>
                            <span className='text-white mr-8 text-xl  cursor-pointer  hover:font-bold '><Link to={"/Login"}>Login</Link></span>
                            <span className='text-white mr-8 text-xl  cursor-pointer  hover:font-bold  '><Link to={"/SignUp"}>Sign Up</Link> </span>
                        </div> :
                        <div>
                            <span className='text-white mr-8 text-xl  cursor-pointer  hover:font-bold'><Link to={"/Home"}>Home</Link></span>
                            <span onClick={() => { localStorage.removeItem('jwt'); window.location.reload() }} className='text-white mr-8 text-xl  cursor-pointer  hover:font-bold'>Logout</span>
                        </div>

                    }

                    {localStorage.getItem('jwt') && <Link to={"/Cart"}>
                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={cart.length } color="secondary">
                                <div className='text-white '>
                                    <ShoppingCartIcon fontSize='large' />
                                </div>
                            </StyledBadge>
                        </IconButton>
                    </Link>}

                </div>


            </div>
        </div>


    )
}

export default Navbar; 