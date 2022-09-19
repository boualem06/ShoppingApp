import bg from '../img/bg.png'
const Footer = () => {
    return (
        <div className="grid gap-4 grid-cols-3  overflow-hidden bg-black mt-20 ">
            {/* <img src={bg} className=' h-full'></img> */}
            {/* <div style={{ backgroundImage: `url(${bg})`, height: "100vh" }} className="bg-cover"></div> */}
            <h1 className='text-xl font-bold text-white text-center flex justify-center items-center'>OH YES,WE DID YOUR PIZZA,WELL BAKED SLICE OF PIZZA</h1>
            <div className='grid grid-rows-5 gap-2  py-4'>
                <h1 className='text-yellow-500'>
                    FIND OUR RESTAURANTS
                </h1>
                <h1 className='text-white'> 1654 R. Don Road #304, NewYORK,85022 (602)867-1010</h1>
                <h1 className='text-white'> 2356 K. Laquie Rd #235,NewYORK,85022 (602)867-1010 </h1>
                <h1 className='text-white'> 1614 E.Erwin St #104, NewYORK,85022 (602)867-1010 </h1>
                <h1 className='text-white'> 1614 W.Caroll st #125 , NewYORK,85022 (602)867-1010 </h1>
            </div>

            <div className='grid grid-rows-4 gap-2 py-4 '>
                <h1 className='text-yellow-500 mb-3'>WORKING HOURS</h1>
                <h1 className='text-white'>MONDAY UNTIL FRIDAY</h1>
                <h1 className='text-white'>9:00-22:00 </h1>
                <h1 className='text-white'>SATURDAY-SUNDAY</h1>
                <h1 className='text-white'>12:00-24:00</h1>
            </div>
        </div>
    )
}
export default Footer;