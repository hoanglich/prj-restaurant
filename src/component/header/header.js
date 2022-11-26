import { Link } from "react-router-dom"
import { useState,useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping,
        faUser,
        faBars,
        faClose } from "@fortawesome/free-solid-svg-icons"

import '../dropDownList/dropDownList.css'
import '../globalstyte/grid.css'
import '../globalstyte/global.css'
import { image } from "../access/image"
import './header.css'
import { publicRoutes } from "../../routers/routers"
import { useSelector } from "react-redux"
import { cartSelector } from "../../redux/selector"
import DropDownList from "../dropDownList/dropDownList"

function Header({props}){
    const cartList = useSelector(cartSelector)
    const [scrollTop, setSrcollTop] = useState(0)
    const [navBar, setNavBar] = useState('')
    const [header, setHeader] = useState('')
    useEffect(()=>{
        setNavBar(document.querySelector('.navbar'))
        setHeader(document.querySelector('.header-Warpper'))

        // scroll add/remove evenlistener
        const scrollTest = () => setSrcollTop(window.pageYOffset)
        window.removeEventListener('scroll', scrollTest);
        window.addEventListener('scroll', scrollTest, { passive: true });
        window.scrollTo(0, 0);
        return () => window.removeEventListener('scroll', scrollTest);
    },[])


    // đổi màu thành header khi scroll
    useEffect(()=>{
        if(scrollTop > 0 ){
            if(scrollTop >= 400)
            {
                header.style.backgroundColor = '#000'
            }
            else {
                header.style.backgroundColor = 'transparent'
            }
        }
    },[scrollTop])
    
    
    return (
        
        <header className={`header-Warpper dflex aliCenter ${props}`}>
                <div className="navbar">
                    <ul className="navbar-List">
                        <div className="btnClose" onClick={()=>(navBar.classList.remove('active'))}>
                            <FontAwesomeIcon icon={faClose} />
                        </div>
                        <div className="navbar-Logo logo-Header">
                            <img className="logo-Header-Img" alt="logo" src={image.logo} />
                        </div>
                        <li className="navbar-List-Item">
                            <Link className="navbar-Link" to={publicRoutes.HOME.path} >Home</Link>
                        </li>
                        <li className="navbar-List-Item">
                            <Link className="navbar-Link" to={publicRoutes.BLOG.path} >Blog</Link>
                        </li>
                        <li className="navbar-List-Item">
                            <Link className="navbar-Link" to={publicRoutes.NOTIFY.path} >Notify</Link>
                        </li>
                        <li className="navbar-List-Item">
                            <Link className="navbar-Link" to={publicRoutes.SHOP.path} >Products</Link>
                        </li>
                    </ul>
                </div>
            <div className="grid wide">
                <div className="dflex jtfSpBetween aliCenter">
                    <div className="logo-Header">
                        <Link to={publicRoutes.HOME.path}><img className="logo-Header-Img" alt="logo" src={image.logo} /></Link>
                    </div>
                    <ul className="header-List dflex">
                        <li className="header-List-Item">
                            <Link className="header-Link" to={publicRoutes.HOME.path} >Home</Link>
                        </li>
                        <li className="header-List-Item">
                            <a className="header-Link" href="#to-blog" >Blog</a>
                        </li>
                        <li className="header-List-Item">
                            <a className="header-Link" href="#to-notify" >Notify</a>
                        </li>
                        <li className="header-List-Item">
                            <Link className="header-Link" to={publicRoutes.SHOP.path} >Products</Link>
                        </li>
                    </ul>
                    <div className="header-Mobile-Category" onClick={()=>navBar.classList.toggle('active')}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <div className="boxCar-Login dflex jtfCenter aliCenter">
                     
                        <Link to={publicRoutes.CART.path} className="header-Cart">
                            <FontAwesomeIcon icon={faCartShopping} />
                            <div className="header-Cart_quantity-product">{cartList.length}</div>
                            <div className="Cart_quantity-product-notify">
                            <div className="dropDownList_wrapper">
                                    <div className='dropDownList_product'>
                                        <span className='dropDownList_product-header'>Cart</span>
                                            <div className="dropDownList_product-body">
                                                {cartList.map((item, index)=> (
                                                    <DropDownList
                                                        key={index}
                                                        idProducts={item.idProducts}
                                                        id={item.id}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <div 
                                            to={'/cart'}
                                            className="dropDownList_product-footer"
                                        >
                                            Go to cart
                                        </div>
                                    </div>
                            </div>
                        </Link>

                        <div className="header-Login">
                            <Link className="header-Link header-User">
                                <FontAwesomeIcon icon={faUser} />
                            </Link>
                            <Link className="header-Link headr-LogIn-Text">LogIn</Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </header>
    )
}

export default Header