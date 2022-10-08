import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CallTwoTone from '@material-ui/icons/CallTwoTone'
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

const Navbar = ({ cart }) => {
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
                            <StyledBadge badgeContent={10} color="secondary">

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