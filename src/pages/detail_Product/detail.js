import axios from 'axios'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { FontAwesomeIcon,} from '@fortawesome/react-fontawesome'
import {
    faMinus, 
    faStar,
    faDollarSign,
    faTruck,
    faNoteSticky,
    faCartArrowDown,
    faTrash,
    faUser,
    faPlus
} from '@fortawesome/free-solid-svg-icons'
import {toast,ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from 'react-redux'

import { addCart, editCart } from '../../redux/reducer/cartSlice'
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'
import './detail.css'
import Button from '../../component/button/button'
import { cartSelector } from '../../redux/selector'


function Detail(){
    const param = useParams()
    const [product, setProduct] = useState([])
    const [countProduct, setCountProduct] = useState(0)
    const [content, setContent] = useState([...JSON.parse(localStorage.getItem('list') ?  localStorage.getItem('list') : '[]')])
    const [review, setReview] = useState('')
    const dispatch = useDispatch()
    const cartList = useSelector(cartSelector)
    const err= document.querySelector('.err-enter-quantity');
    //get product through api
    useEffect(()=>{
        const getDataDetail = async()=>{
            try {
                const re = await axios.get(`https://ig-food-menus.herokuapp.com/our-foods/${param.id}`)
                setProduct(re.data)
            }
            catch(error){
                console.error(error);
            }
        }
        getDataDetail()

    },[param.id])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // even on click "-"
    const handleAbatementCount =()=>{
        if(countProduct < 1){
            setCountProduct(0)
        }
        else {
            setCountProduct(prevState => prevState - 1)
        }
    }
    //even on click "+"
    const handleAugmentCount =()=>{
        err.style.display = "none"
        setCountProduct(prevState => prevState + 1)
    }

    //  product reivew

    // get value tag input and transmit to setcontent
    const handleOnChangeReivew = (e) =>{
        setReview(e.target.value)
        document.querySelector('.product-review_errorEmpty').style.display = 'none'
    }

    // handle event push onclik of btn ADD
    const handlePushReview =() => {
        if(review === '') {
            document.querySelector('.product-review_errorEmpty').style.display = 'block'
        }
        else{
            setContent([...content,review])
            localStorage.setItem('list', JSON.stringify([...content,review]))
            document.querySelector('.product-review_input').value = ''
            setReview('') 
        }
    }

    // handle event delete of once tag li
    const handleDelteReview =(index) => {
        let newContent = [...content]
        newContent.splice(index,1)
        setContent(newContent)
        localStorage.setItem('list', JSON.stringify(newContent))
    }

    // add cart 

    // initvalue data api
    let dataCart = {
        idProducts: product?.id,
        quantity: countProduct,
        price: product?.price,
        total: countProduct*product.price
    }

    // add cart  
    const handleEventAddCart=(prodcut)=>{
        
        if(countProduct >0){
            
            if(cartList.length > 0){
                // check if the product is duplicated
                let newCartList = cartList.find(item => item.idProducts === prodcut.id)
                if(newCartList){
                        let newQuantity = countProduct + newCartList.quantity;
                        let newTotal = newQuantity*prodcut.price;
                        let id = newCartList.id
                        dispatch(editCart({newQuantity,newTotal,id}))
                        toast.success('Update to Cart successfully!')
                    }
                else {
                    dispatch(addCart(dataCart))
                    toast.success('Add to Cart successfully!')
                }
            }
            else{
                dispatch(addCart(dataCart))
                toast.success('Add to Cart successfully!')
            }
        }
        else{
            err.style.display = "block"
        }
    }


    return (
        <div className='detail-wrapper'>
            <Header props={'detail'} />
            <div className='detail-prodcut'>
                <div className='detail-product_overview'>
                    <div className='product_overview-img'>
                        <img alt='img product' src={product.img} />
                    </div>
                    <div className='product_overview-content'>
                        <div className='overview-content_name'>{product.name}</div>
                        <div className='overview-content_star'>{
                            product.rate === 5 ? (<div >
                                <FontAwesomeIcon icon={faStar} className='star' />
                                <FontAwesomeIcon icon={faStar} className='star' />
                                <FontAwesomeIcon icon={faStar} className='star' />
                                <FontAwesomeIcon icon={faStar} className='star' />
                                <FontAwesomeIcon icon={faStar} className='star' />
                                <FontAwesomeIcon icon={faStar} className='star' />
                            </div>) 
                            : product.rate === 4 ? (<div >
                                <FontAwesomeIcon icon={faStar} className='star' />
                                <FontAwesomeIcon icon={faStar} className='star' />
                                <FontAwesomeIcon icon={faStar} className='star' />
                                <FontAwesomeIcon icon={faStar} className='star' />
                                <FontAwesomeIcon icon={faStar} className='star' />
                                <FontAwesomeIcon icon={faStar} className='star-transpent' />
                            </div>) :  (<div>
                                <FontAwesomeIcon icon={faStar} className='star' />
                                <FontAwesomeIcon icon={faStar} className='star' />
                                <FontAwesomeIcon icon={faStar} className='star' />
                                <FontAwesomeIcon icon={faStar} className='star' />
                                <FontAwesomeIcon icon={faStar} className='star-transpent' />
                                <FontAwesomeIcon icon={faStar} className='star-transpent' />
                            </div>)
                        }</div>
                        <div className='overview-content_price'>
                            <FontAwesomeIcon icon={faDollarSign} />
                            {product.price}
                        </div>
                        <div className='overvirew-content_on-sale'>                           
                        </div>
                        <div className='overview-content_address'>Address: {product.country}</div>
                        <div className='overview-content_dsc'>{product.dsc}</div>

                        <div className='product-add-cart'>
                            <div 
                                className='product-add-cart_remove'
                                onClick={handleAbatementCount}
                            ><FontAwesomeIcon icon={faMinus}/></div>
                            <div className='product-add-cart_input'>{countProduct}</div>
                            <div 
                                className='product-add-cart_add'
                                onClick={handleAugmentCount}
                            ><FontAwesomeIcon icon={faPlus} /></div>

                        </div>
                        <span className='err-enter-quantity'>Please enter quantity</span>
                        <div 
                            className='product-add-cart_btn' 
                            onClick={()=>handleEventAddCart(product)}
                        >
                            ADD TO CART
                        </div>

                        <div className='prodcut-delivery'>
                            <ul className='product-delivery_ship-list'>
                                <li className='product-delivery_ship-item'>
                                    <FontAwesomeIcon className='icon-ship_item' icon={faTruck} />
                                    <p>Free global shipping on all orders</p>
                                </li>
                                <li className='product-delivery_ship-item'>
                                    <FontAwesomeIcon className='icon-ship_item' icon={faNoteSticky} />
                                    <p>2 hours easy returns if you change your mind</p>
                                </li>
                                <li className='product-delivery_ship-item'>
                                    <FontAwesomeIcon className='icon-ship_item' icon={faCartArrowDown} />
                                    <p>Order before noon for same day dispatch</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />

                <div className='product-review'>

                    <div className='product-review_header'>product reviews</div>

                    <input className='product-review_input' placeholder='Leave your review here' type='text' onChange={e=> handleOnChangeReivew(e)}/>
                    
                    <span className='product-review_errorEmpty'>You need to enter your comment!</span>
                    
                    <Button className={'product-review_btn'} onClick={handlePushReview}>Add</Button>

                    <ul className='product-review_list'>
                        {content.map((item, index) => {
                            return (
                                <li key={index} className='product-review_item'>
                                    <div className='user-content_review'>
                                        <FontAwesomeIcon icon={faUser}/>
                                        <span> : {item}</span> 
                                    </div>

                                    <div 
                                        className='product-review_DeleteBtn' 
                                        onClick={()=>handleDelteReview(index)}
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </div>
                                </li>
                            )    
                        })}
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default  Detail