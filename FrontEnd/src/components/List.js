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


export default function Item({cart,setCart,element,setElement}) {


   
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
            name: "Campagnoia",
            price: "19.90",
            description: "Lorem ipsum dolor sit amet, consectetur  elit "
        },
    ])
    const [isClicked,setIsClicked]=useState(false)
   
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
        
    },[])
    

    return (


        // <div className='flex w-full'>
            
             <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' >
            {PizzaList.map((elem,index) => (
                <div key={index}  className='shadow rounded-lg     flex flex-col justify-center items-center  py-1 border-2 '>
                    {/* <img className='max-w-40 max-h-36 ' src={pizza} alt="Pizza image"></img> */}
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
                        <button onClick={()=>{setElement(elem);setIsClicked(true)}} className=' mb-2 bg-orange-600 text-white px-2 py-1 rounded  hover:scale-105 hover:font-bold'>Add to Cart</button>
                    </div>
                    {isClicked && <Navigate to={"/Detail"}></Navigate>}
                </div>))}
        </div>
        // </div>
       











    );
}