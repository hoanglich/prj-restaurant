import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollar } from '@fortawesome/free-solid-svg-icons'

import '../cart.css'

function CartCategory({sumAllPrice}){

    return (
        <div className="cart-category">
            <div className="cart-category_header">
                Order
            </div>
            <div className="cart-category_of-sales">
                <div className="of-sales_header">Enter code coupons</div>
                <input
                    type='text'
                    placeholder="enter code..."
                    className="of-sales_input"
                />
                <button className="of-sales_apply">apply coupon</button>
            </div>
            <div className="cart-category_price">
                <div className="price-not-applied-yet">
                    <span>Price not applied yet:</span>
                    <p><FontAwesomeIcon icon={faDollar}/> {sumAllPrice}</p>
                </div>
                <div className="price-of-sales">
                    <span>Reduce:</span>
                    <p> 0</p>
                </div>
            </div>
            <div className="cart-category_price-total">
                <div className="price-total">
                    <span>Total: </span>
                    <p><FontAwesomeIcon icon={faDollar}/> {sumAllPrice}</p>
                </div>
                <button className="price-pay-btn">Pay</button>
            </div>
        </div>
    )
}

export default CartCategory