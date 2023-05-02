import pizza from '../img/pizza.png'
const Body=()=>{
    return(
        <div className='bg-gradient-to-r from-orange-600 flex flex-col items-center justify-center grid gap-10 md:flex  md:flex-row md:justify-between md:items-center  to-orange-700  text-center px-10 lg:px-40 pt-20 md:pt-0 '>
                <div className='flex flex-col '>
                    <span className='text-white font-bold ml-4 text-2xl lg:text-4xl'>HOT  SPICY</span>
                    <span className='text-white font-bold mb-12 text-7xl lg:text-9xl'>PIZZA</span>
                    <span className='text-white underline ml-8 font-bold text-2xl lg:text-4xl'>50% OFF </span>
                    <span className='text-white underline ml-4 font-bold text-2xl lg:text-4xl'>ORDER NOW</span>
                </div>

                <img src={pizza} alt='pizza'></img>
            </div>
    )
}

export default Body ;