import { useState, useLayoutEffect } from "react"
import { useDispatch} from "react-redux"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
        faTrash,
        faDollarSign
       } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

import '../cart.css'
import { delCart, editCart } from "../../../redux/reducer/cartSlice"


function CatrItem({cartId, amount,totalPrice,id}){
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(amount)
    const [cartItem, setCartItem] = useState({})
    const [total, setTotal] = useState(totalPrice)

    // get info product from api 
    useLayoutEffect(()=>{
        const getDataDetail = async()=>{
            try {
                const re = await axios.get(`https://ig-food-menus.herokuapp.com/our-foods/${cartId}`)
                setCartItem(re.data)
            }
            catch(error){
                console.error(error);
            }
        }
        getDataDetail()

    },[cartId,quantity])

    // handle event addtion quantity product
    const handleChangeQuantity =(e)=>{
        let newQuantity = quantity;
        let newTotal;
        if(e.target.value==='+'){
            newQuantity = quantity +1
            setQuantity(newQuantity)
        }
        else {
            if(quantity <=1 ){
                newQuantity = 0
                setQuantity(0)
            }
            else{
                newQuantity=quantity-1
                setQuantity(newQuantity)
            }
        }
        newTotal = newQuantity*cartItem.price
        dispatch(editCart({newQuantity,newTotal, id}))
        setTotal(newTotal)

        
    }
    
    // handle delete product to cart
    const handleDel =(id) =>{
        dispatch(delCart(id))
    }

    return (
        <div  className="cart-item">
            <div className="cart-item-box_img">
                <img className="cart-item_img" alt="img cart item" src={cartItem.img} />
            </div>
            <div className="cart-item-info">
                <div className="cart-item-header">
                    <div className="cart-item_title">
                        <Link
                            to={`/shop/${cartItem.id}`}
                            
                        >
                            <div className="cart-item_title-name">{cartItem.name}</div>
                        </Link>
                        <div className="cart-item_title-price">Price: <FontAwesomeIcon icon={faDollarSign} />{cartItem.price}
                        </div>
                    </div>
                    <div className="cart-item_total-price">
                        Total Price: <FontAwesomeIcon icon={faDollarSign} />{total}
                    </div>
                </div>
                <div className="cart-item-body">
                    <div className="cart-item_select">
                        <input
                            className="btn-change-quantity"
                            type='button'
                            value='-'
                            onClick={e => handleChangeQuantity(e)}
                        />
                        <div className="input-quantity">{quantity}</div>
                        <input
                            className="btn-change-quantity"
                            type='button'
                            value='+'
                            onClick={e => handleChangeQuantity(e)}
                        />
                    </div>
                    <button className="btn-delProduct"
                        onClick={() => handleDel(id)}    
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CatrItem
