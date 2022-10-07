import { useState } from 'react';
import pizza from '../img/pizza.png'
import {Link } from 'react-router-dom'
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
            <div className='grid gap-4 grid-cols- md:grid-cols-3'>
                {PizzaList.map((elem) => (
                <div className='shadow rounded-lg w-auto flex flex-col justify-center items-center border py-1 hover:scale-105 '>
                    <img className='max-w-40 max-h-36 ' src={pizza} alt="Pizza image"></img>
                    <div className=' flex flex-col justify-center items-center'>
                        <h1 className='text-lg font-bold text-red-500'>{elem.name}</h1>
                        <h1 className='font-bold'>${elem.price}</h1>
                        <button className='bg-orange-600 text-white px-2 py-1 rounded  hover:scale-105 hover:font-bold'><Link to={"/"}>Add to Cart</Link></button>
                        {/* <h1 className='text-center mt-2'>{elem.description}</h1> */}
                    </div>
                </div>))}
            </div>

        </div>
    )
}
export default Menu;