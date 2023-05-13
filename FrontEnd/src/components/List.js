// const List=()=>{
//     return(<div>
//         this is the list 
//     </div>)
// }


// export default List ;



import React from 'react';
import { Image } from 'cloudinary-react';

import pizza from '../img/pizza.png'
import { useState } from 'react';
import Cart from './Cart';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';


export default function Item({ cart, setCart, element, setElement }) {



    const [PizzaList, setPizzaList] = useState([])
    const [isClicked, setIsClicked] = useState(false)

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const res = await fetch('http://localhost:5000/getProducts');
                const data = await res.json();
                console.log(data);
                setPizzaList(data);
            } catch (err) {
                console.error(err);
            }
        }
        loadProducts();

    }, [])


    return (

        <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:px-8 md:px-4 px-2' >
            {PizzaList.map((elem, index) => (
                <div className='border shadow-md rounded-lg'>
                    <Image style={{ height: "15rem", width: "100%" }} cloudName="dc7suzbrg" publicId={elem.imageUrl} />


                    <div className=' flex flex-col justify-center items-center w-full'>
                        <h1 className='text-lg font-bold text-red-500'>{elem.name}</h1>
                        <div className='flex justify-between   mt-4 items-center w-full'>
                            <h1 className='font-bold text-3xl text-orange-600 ml-2'>${elem.price}.00</h1>
                            <div className=' px-4'>
                                <button onClick={() => { setElement(elem); setIsClicked(true) }} className=' mb-2 py-2 bg-orange-600 text-white px-2 py-1 rounded    text-lg  hover:shadow-xl '>Add to Cart</button>
                            </div>
                        </div>

                    </div>
                    {isClicked && <Navigate to={"/Detail"}></Navigate>}
                </div>
            ))
            }
        </div>













    );
}