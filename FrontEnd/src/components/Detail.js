import pizza from '../img/pizza.png'
import Checkbox from '@material-ui/core/Checkbox';
import NavbarResp from './NavbarResp';
import { useEffect, useState } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));
const Detail = ({ element , size ,setSize ,number,setNumber,additional ,setAddittional,cart,setCart }) => {
    const classes = useStyles();
    // const [size, setSize] = useState("Small")
    const getSize = (e) => {
        setSize(e.target.textContent)
    }

    const AddToCart=()=>{
        let add="" ;
        if(additional.Double_ingredients) {add=add.concat("Double Ingredients  ")}
        if(additional.Extra_cheese) {add=add.concat("  Extra Cheese  ") } ;
        if(additional.spicy_sauce) {add=add.concat("  Spicy Sauce  ")} ;
        if(additional.garlic_sauce) {add=add.concat("  Garlic Sauce  ")}  ;
        let ccart={
            name: element.name,
            extras: add,
            quantity: number,
            price: element.price,
        }

        console.log(ccart) ;
    //    setCart([...cart,{
    //     name: element.name,
    //     extras: "Spicy Sauce, Garlic Sauce",
    //     quantity: 2,
    //     price: "19.90",
    //    }])
    }
    // const [additional, setAddittional] = useState({
    //     Double_ingredients: false,
    //     Extra_cheese: false,
    //     spicy_sauce: false,
    //     garlic_sauce: false
    // });

    // const [number,setNumber]=useState("1") ;


    return (
        <div>

            <NavbarResp></NavbarResp>
            <div className="grid gap-2 md:gap-20 grid-cols-1 md:grid-cols-2 py-2 px-4 lg:px-16 md:px-6 flex flex-col items-center justify-center">
                <div className='   flex items-center justify-center mt-16'>
                    <img src={pizza} alt="picture"></img>
                </div>
                <div className='mt-16 text-center md:text-left'>
                    <h1 className='text-2xl font-bold mb-6 lg:mb-10 '>{element.name}</h1>
                    <h1 className='text-red-500 underline font-bold text-2xl mb-6 lg:mb-10'>$ {element.price}</h1>
                    <p className='mb-6 lg:mb-10'>{element.description}</p>
                    <div className='mb-6 lg:mb-10'>
                        <h1 className='text-xl font-bold mb-2 '>Choose the size</h1>
                        <div className='flex grid gap-4 grid-cols-3 '>
                            <button className={(size === "Small") ? "border py-1 rounded-full border-orange-500 bg-gradient-to-r from-orange-600    to-orange-700 text-white" : "border py-1 rounded-full border-orange-500 hover:bg-gradient-to-r hover:from-orange-600    hover:to-orange-700 hover:text-white"} onClick={(e) => { getSize(e) }}  >Small</button>
                            <button onClick={(e) => { getSize(e) }} className={(size === "Medium") ? "border py-1 rounded-full border-orange-500 bg-gradient-to-r from-orange-600    to-orange-700 text-white" : "border py-1 rounded-full border-orange-500 hover:bg-gradient-to-r hover:from-orange-600    hover:to-orange-700 hover:text-white"}>Medium</button>
                            <button onClick={(e) => { getSize(e) }} className={(size === "Large") ? "border py-1 rounded-full border-orange-500 bg-gradient-to-r from-orange-600    to-orange-700 text-white" : "border py-1 rounded-full border-orange-500 hover:bg-gradient-to-r hover:from-orange-600    hover:to-orange-700 hover:text-white"}>Large</button>
                        </div>
                    </div>

                    <div className='mb-6 lg:mb-10'>
                        <h1 className='text-xl font-bold mb-2'>Choose additional ingredients</h1>
                        <div className='grid gap-2 grid-cols-4'>
                            <div className='flex justify-center items-center'>
                                <Checkbox
                                    onClick={(e) => { additional.Double_ingredients ? setAddittional({ ...additional, Double_ingredients: false }) : setAddittional({ ...additional, Double_ingredients: true }) }}
                                    value="checkedA"
                                    inputProps={{ 'aria-label': 'Checkbox A' }}
                                />
                                <h1 className=''>  Double Ingredients </h1>

                            </div>

                            <div className='flex justify-center items-center'>
                                <Checkbox
                                    onClick={(e) => { additional.Extra_cheese ? setAddittional({ ...additional, Extra_cheese: false }) : setAddittional({ ...additional, Extra_cheese: true }) }}
                                    value="checkedA"
                                    inputProps={{ 'aria-label': 'Checkbox A' }}
                                />
                                <h1>  Extra Cheese </h1>
                            </div>
                            <div className='flex justify-center items-center'>
                                <Checkbox
                                    onClick={(e) => { additional.spicy_sauce ? setAddittional({ ...additional, spicy_sauce: false }) : setAddittional({ ...additional, spicy_sauce: true }) }}
                                    value="checkedA"
                                    inputProps={{ 'aria-label': 'Checkbox A' }}
                                />
                                <h1>  Spicy Sauce </h1>

                            </div>
                            <div className='flex justify-center items-center'>
                                <Checkbox
                                    onClick={(e) => { additional.garlic_sauce ? setAddittional({ ...additional, garlic_sauce: false }) : setAddittional({ ...additional, garlic_sauce: true }) }}
                                    value="checkedA"
                                    inputProps={{ 'aria-label': 'Checkbox A' }}
                                />
                                <h1>Garlic Sauce</h1>
                            </div>
                        </div>
                    </div>
                    < div className='flex justify-center items-center md:'>
                        <div>
                            <select onChange={(e) => {setNumber(e.target.value)}} name="number" id="number" className='mr-4  border rounded px-2 py-1'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                            <button onClick={()=>{AddToCart()}}  className='hover-shadow px-2 border rounded-lg border-orange-500 bg-gradient-to-r from-orange-600   to-orange-700 text-white py-2'>Add to cart</button>
                        </div>
                    </div>
                </div>

            </div>

        </div >
    )
}
export default Detail;