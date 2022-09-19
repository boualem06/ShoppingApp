import pizza from '../img/pizza.png'
import Checkbox from '@material-ui/core/Checkbox';
const Detail = () => {
    return (
        <div className="grid gap-20 grid-cols-2 py-2 lg:px-16 md:px-6">
            <div className='flex items-center justify-center'>
                <img src={pizza} alt="picture"></img>
            </div>
            <div className=''>
                <h1 className='text-2xl font-bold mb-6 lg:mb-10'>CAMPAGNOLA</h1>
                <h1 className='text-red-500 underline font-bold text-2xl mb-6 lg:mb-10'>$19.9</h1>
                <p className='mb-6 lg:mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante</p>
                <div className='mb-6 lg:mb-10'>
                    <h1 className='text-xl font-bold mb-2 '>Choose the size</h1>
                    <div className='flex grid gap-4 grid-cols-3 '>
                        <button className='border rounded-full border-orange-500 hover:bg-gradient-to-r hover:from-orange-600    hover:to-orange-700 hover:text-white   ' >Small</button>
                        <button className='border rounded-full border-orange-500 hover:bg-gradient-to-r hover:from-orange-600    hover:to-orange-700 hover:text-white'>Medium</button>
                        <button className='border rounded-full border-orange-500 hover:bg-gradient-to-r hover:from-orange-600    hover:to-orange-700 hover:text-white'>Large</button>
                    </div>
                </div>

                <div className='mb-6 lg:mb-10'>
                    <h1 className='text-xl font-bold mb-2'>Choose additional ingredients</h1>
                    <div className='grid gap-2 grid-cols-4'>
                        <div className='flex justify-center items-center'>
                            <Checkbox
                                value="checkedA"
                                inputProps={{ 'aria-label': 'Checkbox A' }}
                            />
                            <h1 className=''>  Double Ingredients </h1>

                        </div>

                        <div className='flex justify-center items-center'>
                            <Checkbox
                                value="checkedA"
                                inputProps={{ 'aria-label': 'Checkbox A' }}
                            />
                            <h1>  Extra Cheese </h1>
                        </div>
                        <div className='flex justify-center items-center'>
                            <Checkbox
                                value="checkedA"
                                inputProps={{ 'aria-label': 'Checkbox A' }}
                            />
                            <h1>  Spicy Sauce </h1>

                        </div>
                        <div className='flex justify-center items-center'>
                            <Checkbox
                                value="checkedA"
                                inputProps={{ 'aria-label': 'Checkbox A' }}
                            />
                            <h1>Garlic Sauce</h1>
                        </div>
                    </div>
                </div>
                < div className='flex'>
                    <div>
                        <input className='border rounded-lg mr-4' size={2} ></input>
                        <button className='hover-shadow px-2 border rounded-lg border-orange-500 bg-gradient-to-r from-orange-600   to-orange-700 text-white '>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Detail;