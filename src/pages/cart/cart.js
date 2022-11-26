import { useEffect } from "react"
import { useSelector } from "react-redux"

import Header from "../../component/header/header"
import Footer from "../../component/footer/footer"
import { image} from "../../component/access/image"
import './cart.css'
import CatrItem from "./CartItem/cartItem"
import CartCategory from "./cartCategory/cartCategory"
import { cartSelector } from "../../redux/selector"
function Cart(){
    const cartList = useSelector(cartSelector)

    // sum all of price
    const sumAllPrice=(cartList) =>{
        if(cartList.length !== 0){
            let sumAllPrice = cartList.reduce((acc, product)=>{
                return acc+= product.total
            },0)
            
            return sumAllPrice
        }
        else{
            return 0
        }
    }

    useEffect(() => {
        window.scrollTo(0, 400);
    }, []);
    return (
        <div className="cart">
            <Header/>
            <div className="product-Slide" style={{background: `url(${image.backgroundNotify}) no-repeat center center fixed`}}>
                <span className="cart-slide_text">Cart Foodig Shop </span>      
            </div>
            <div className="cart-wrapper">
                <div className="gird wide">
                    <div className="row">
                        <div className="col l-8">
                            <div className="cart-list">
                                <div className="cart-list_product">
                                        <div className="cart-list_header">Cart</div>
                                        <div className="cart-list_count">Product total : {cartList.length}</div>
                                        {cartList.map((item, index) => (
                                            <CatrItem 
                                                key={index}
                                                cartId={item.idProducts}
                                                amount={item.quantity}
                                                totalPrice={item.total}
                                                id={item.id}
                                            />
                                        ))}
                                </div>
                            </div>

                        </div>
                        <div className="col l-4">
                            <CartCategory 
                                sumAllPrice={sumAllPrice(cartList)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart