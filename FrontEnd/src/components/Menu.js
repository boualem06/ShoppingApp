import { useState } from 'react';
import pizza from '../img/pizza.png'
const Menu = () => {
    const [PizzaList, setPizzaList] = useState([
        {
            name: "Campagnoia",
            price: "19.90",
            description: "Lorem ipsum dolor sit amet, consectetur  elit "
        },
        {
            name: "Neapolitan",
            price: "22.90",
            description: "Lorem ipsum dolor sit amet, consectetur  elit "
        },
        {
            name: "Sicillian",
            price: "18.90",
            description: "Lorem ipsum dolor sit amet, consectetur  elit "
        },
        {
            name: "St. Louis",
            price: "22.90",
            description: "Lorem ipsum dolor sit amet, consectetur  elit "
        },
        {
            name: "Campagnoia",
            price: "19.90",
            description: "Lorem ipsum dolor sit amet, consectetur  elit "
        },
        {
            name: "Neapolitan",
            price: "22.90",
            description: "Lorem ipsum dolor sit amet, consectetur  elit "
        },
        {
            name: "Sicillian",
            price: "18.90",
            description: "Lorem ipsum dolor sit amet, consectetur  elit "
        },
        {
            name: "St. Louis",
            price: "22.90",
            description: "Lorem ipsum dolor sit amet, consectetur  elit "
        },
        {
            name: "Sicillian",
            price: "18.90",
            description: "Lorem ipsum dolor sit amet, consectetur  elit "
        }
    ])
    return (
        <div className="w-full px-4  md:px-32 lg:px-50 mt-28">
            <h1 className="w-full flex justify-center items-center text-xl md:text-4xl font-bold mb-4 font-lobster">THE   BEST   PIZZA   IN   TOWN</h1>
            <p className=' text-center mb-10 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.</p>
            <div className='grid gap-4 grid-cols-2 md:grid-cols-3'>
                {PizzaList.map((elem) => (<div className='flex flex-col justify-center items-center'>
                    <img className='w-26 h-28' src={pizza} alt="Pizza image"></img>
                    <div className=' flex flex-col justify-center items-center'>
                        <h1 className='text-lg font-bold text-red-500'>{elem.name}</h1>
                        <h1 className='font-bold'>${elem.price}</h1>
                        <h1 className='text-center mt-2'>{elem.description}</h1>
                    </div>

                </div>))}
            </div>

        </div>
    )
}
export default Menu;