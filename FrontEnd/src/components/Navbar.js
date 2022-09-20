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

const Navbar = () => {
    return (
        <div className='bg-gradient-to-r from-orange-600    to-orange-700 px-4'>
            <div className=" flex justify-between items-center lg:px-16 ">

                <div className='flex items-center text-white'>
                    <CallTwoTone fontSize='large'></CallTwoTone>
                    <div className='ml-2 text-white text-sm flex flex-col'>
                        <span>ORDER NOW!</span>
                        <span className='font-bold '>012 345 678</span>
                    </div>
                </div>


                <div>
                    <span className='text-white mr-8 lg:text-lg  cursor-pointer md:hover:text-lg hover:font-bold lg:hover:text-xl'>Home page</span>
                    <span className='text-white mr-8 lg:text-lg  cursor-pointer md:hover:text-lg hover:font-bold lg:hover:text-xl'>Products</span>
                    <span className='text-white mr-8 lg:text-lg  cursor-pointer md:hover:text-lg hover:font-bold lg:hover:text-xl'>Menu </span>
                    <span className='text-white text-xl  cursor-pointer mr-8  font-lobster lg:text-2xl md:hover:text-2xl hover:font-bold lg:hover:text-3xl'>ShoppingApp</span>
                    <span className='text-white mr-8 lg:text-lg  cursor-pointer md:hover:text-lg hover:font-bold lg:hover:text-xl'>Events</span>
                    <span className='text-white mr-8 lg:text-lg  cursor-pointer md:hover:text-lg hover:font-bold lg:hover:text-xl'>Blog</span>
                    <span className='text-white mr-8 lg:text-lg  cursor-pointer md:hover:text-lg hover:font-bold lg:hover:text-xl'>Contact</span>
                </div>
                
                <Link to={"/Cart"}>
                <div >
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={8} color="secondary">
                              
                            <div className='text-white '>
                                <ShoppingCartIcon fontSize='large' />
                            </div>
                            
                        </StyledBadge>
                    </IconButton>
                </div>
                </Link>
                
            </div>
        </div>
       

    )
}

export default Navbar; 