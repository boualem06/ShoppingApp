import { useState } from 'react';
import pizza from '../img/pizza.png'
import {Link } from 'react-router-dom'
import { useEffect } from 'react';
import { Image } from 'cloudinary-react';
const Menu = () => {
    
    const [PizzaList, setPizzaList] = useState([]) ;

    useEffect(()=>{
        const loadProducts=async ()=>{
            try {
                const res = await fetch('http://localhost:5000/getProducts');
                const data = await res.json();
                console.log(data);
                setPizzaList(data);
            } catch (err) {
                console.error(err);
            }
        }
        loadProducts() ;
        
    },[]) ;
    return (
        <div className="w-full  px-4  md:px-32 lg:px-50 mt-28">
            <h1 className="w-full flex justify-center items-center text-xl md:text-4xl font-bold mb-4 font-lobster">THE   BEST   PIZZA   IN   TOWN</h1>
            <p className=' text-center mb-10 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.</p>
            <div className='grid gap-4 grid-cols- md:grid-cols-3'>
                {PizzaList.map((elem,index) => (
                <div key={index} className='shadow rounded-lg w-auto flex  flex-col justify-center items-center border py-1 hover:scale-105 '>
                     <Image
                           key={index}
                           cloudName={"dc7suzbrg"}
                           publicId={elem.imageUrl}
                           width="300"
                           crop="scale"
                       /> 
                    <div className=' flex flex-col justify-center items-center'>
                        <h1 className='text-lg font-bold text-red-500'>{elem.name}</h1>
                        <h1 className='font-bold'>${elem.price}</h1>
                        <button className='bg-orange-600 text-white px-2 py-1 rounded  hover:scale-105 hover:font-bold'><Link to={"/Home"}>Add to Cart</Link></button>
                        {/* <h1 className='text-center mt-2'>{elem.description}</h1> */}
                    </div>
                </div>))}
            </div>

        </div>
    )
}
export default Menu;