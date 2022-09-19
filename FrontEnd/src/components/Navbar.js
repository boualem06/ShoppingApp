import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CallTwoTone from '@material-ui/icons/CallTwoTone'
import { withStyles } from '@material-ui/core/styles';
import pizza from '../img/pizza.png'
import bike from '../img/bike.png'
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
        // <div className='bg-gradient-to-r from-orange-600    to-orange-700 px-4 '>
        <div className='bg-gradient-to-r from-orange-600    to-orange-700 px-4'>
            {/* the navbar page  */}
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
                    <span className='text-white mr-8 lg:text-lg  cursor-pointer md:hover:text-lg hover:font-bold lg:hover:text-xl'>Menu</span>
                    <span className='text-white text-xl  cursor-pointer mr-8  font-lobster lg:text-2xl md:hover:text-2xl hover:font-bold lg:hover:text-3xl'>ShoppingApp</span>
                    <span className='text-white mr-8 lg:text-lg  cursor-pointer md:hover:text-lg hover:font-bold lg:hover:text-xl'>Events</span>
                    <span className='text-white mr-8 lg:text-lg  cursor-pointer md:hover:text-lg hover:font-bold lg:hover:text-xl'>Blog</span>
                    <span className='text-white mr-8 lg:text-lg  cursor-pointer md:hover:text-lg hover:font-bold lg:hover:text-xl'>Contact</span>
                </div>

                <div >
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={8} color="secondary">
                            <div className='text-white'>
                                <ShoppingCartIcon fontSize='large' />
                            </div>
                        </StyledBadge>
                    </IconButton>
                </div>
            </div>



            {/* the ordering pizza page  */}
            <div className='flex items-center justify-between px-10 lg:px-40 '>
                <div className='flex flex-col mr-16'>
                    <span className='text-white font-bold ml-4 text-2xl lg:text-4xl'>HOT  SPICY</span>
                    <span className='text-white font-bold mb-12 text-7xl lg:text-9xl'>PIZZA</span>
                    <span className='text-white underline ml-8 font-bold text-2xl lg:text-4xl'>50% OFF </span>
                    <span className='text-white underline ml-4 font-bold text-2xl lg:text-4xl'>ORDER NOW</span>
                </div>

                <img src={pizza} alt='pizza'></img>
            </div>
        </div>
        // </div>

    )
}

export default Navbar; 