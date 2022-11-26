import { useState, useLayoutEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,
         faDollarSign 
        } from '@fortawesome/free-solid-svg-icons'

import { useDispatch } from 'react-redux'
import './dropDownList.css'
import { delCart } from '../../redux/reducer/cartSlice'
function DropDownList({id,idProducts}){

    const dispatch = useDispatch(delCart)
    const [cartItem, setCartItem] = useState({})
     useLayoutEffect(()=>{
        const getDataDetail = async()=>{
            try {
                const re = await axios.get(`https://ig-food-menus.herokuapp.com/our-foods/${idProducts}`)
                setCartItem(re.data)
            }
            catch(error){
                console.error(error);
            }
        }
        getDataDetail()

    },[idProducts])

    // handle del 
    const handleDel =(item) =>{
        dispatch(delCart(item))
    }

    return (
        <div className="dropDownList-item">
           <div className="dropDownList-item-box_img">
                <img className="dropDownList-item_img" alt="product" src={cartItem.img} />
            </div>
            <div className="dropDownList-item-info">
                <div className="dropDownList-item-header">
                    <div className="dropDownList-item_title">
                        <div
                            to={`/shop/${cartItem.id}`}
                            className="dropDownList-item_title-name"
                        >
                            {cartItem.name}
                        </div>
                    </div>
                </div>
                <div className="dropDownList-item-body">

                    <div className="dropDownList-item_title-price">
                        <p>Price:</p>
                        <FontAwesomeIcon icon={faDollarSign} /> {cartItem.price}
                    </div>
                    <button className=" dropDown-btn"
                        onClick={() => handleDel(id)}    
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DropDownList