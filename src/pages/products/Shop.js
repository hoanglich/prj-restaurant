import { createContext,useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBurger ,
        faBreadSlice ,
        faCheese,
        faGlassCheers,
        faPizzaSlice,
        faAngleDown,
        faBeer} from "@fortawesome/free-solid-svg-icons"

import Products from "../../API/getApi"
import Footer from "../../component/footer/footer"
import Header from "../../component/header/header"
import {image} from '../../component/access/image'
import './Shop.css'
import { useDispatch } from "react-redux"
import { search } from "../../redux/reducer/filterSearchSlice"
export const FilterPirce = createContext()

function Shop(){
    
    const dispatch = useDispatch()
    const [nameItem, setNameItem] = useState('steaks')
    const [filterPrice, setFilterPrice] = useState()
    // const [search, setSearch] = useState('')
    const [sort, seSort] = useState('filter by price')
    const [sortPrice, setSortPrice] = useState()

    // handle input type radio event checked
    const handleFilterPrice =(e) => {
        const node = e.target.closest('li').querySelector('.prd-Category-Price-item-btn').dataset.index;
        const values = document.querySelectorAll('.prd-Category-Price-item-btn');
        values.forEach(value => {
            if(value.dataset.index === node) {
                value.checked =true;
            }
            else {
                value.checked =false
            }
        })
        setFilterPrice(node)
    }

    // handle category item click
    const handleCategoryItemClick = (e)=>{
        const node = e.target.closest('li');
        document.querySelectorAll('.Prd-Category-Food-item').forEach(item => {
            item.classList.remove('activate')
        })
        node.classList.add('activate')
        setNameItem(node.dataset.index)
    }

    // handle input search product 
    const handleSearchProduct = (e)=> {
        dispatch(search(e.target.value.toLowerCase()))
    }
    console.log(search)

    const handleSortPrice =(e) => {
        seSort(e.target.dataset.index == 0 ? 'high to low' : 'low to high')
        setSortPrice(e.target.dataset.index)
    }

    return (
        <div className="product-Container"> 
            <Header />
            <div className="product-Slide" style={{background: `url(${image.backgroundNotify}) no-repeat center center fixed`}}></div>
            <FilterPirce.Provider value={[filterPrice, sortPrice]}>
                <div className="product-Wrapper">
                    <div className="grid wide">
                        <div className="row">
                            <div className="col l-2 product-category">
                                
                                    <h2 className="product-Category-Food-Title">Category</h2>
                                    <ul className="product-Category-Food">
                                        <li
                                            className="Prd-Category-Food-item"
                                            data-index='Burgers'
                                            onClick={(e)=>handleCategoryItemClick(e)}
                                        >
                                            <FontAwesomeIcon icon={faBurger} />
                                            <span>Burgers</span>
                                        </li>
                                        <li
                                            className="Prd-Category-Food-item activate"
                                            data-index='Steaks'
                                            onClick={(e)=>handleCategoryItemClick(e)}
                                        >
                                            <FontAwesomeIcon icon={faBeer} />
                                            <span>Steaks</span>
                                        </li>
                                        <li
                                            className="Prd-Category-Food-item"
                                            data-index='Breads'
                                            onClick={(e)=>handleCategoryItemClick(e)}
                                        >
                                            <FontAwesomeIcon icon={faBreadSlice} />
                                            <span>Breads</span>
                                        </li>
                                        <li
                                            className="Prd-Category-Food-item"
                                            data-index='sandwiches' 
                                            onClick={(e)=>handleCategoryItemClick(e)}
                                        >
                                            <FontAwesomeIcon icon={faCheese} />
                                            <span>SandWiches</span>
                                        </li>
                                        <li
                                            className="Prd-Category-Food-item"
                                            data-index='Drinks'
                                            onClick={(e)=>handleCategoryItemClick(e)}
                                        >
                                            <FontAwesomeIcon icon={faGlassCheers} />
                                            <span>Drinks</span>
                                        </li>
                                        <li
                                            className="Prd-Category-Food-item"
                                            data-index='Pizzas'
                                            onClick={(e)=>handleCategoryItemClick(e)}
                                        >
                                            <FontAwesomeIcon icon={faPizzaSlice} />
                                            <span>Pizzas</span>
                                        </li>
                                    </ul>
                                    <h2 className="product-Category-Price-Title">Price</h2>
                                    <ul className="product-Category-Price">
                                        <li className="prd-Category-Price-item"
                                            onClick={(e)=>handleFilterPrice(e)}
                                        >
                                            <input
                                                className='prd-Category-Price-item-btn'
                                                type='radio'
                                                data-index={0}
                                            />
                                            <span>Under $50</span>
                                        </li>
                                        <li className="prd-Category-Price-item"
                                            onClick={(e)=>handleFilterPrice(e)}
                                        >
                                            <input
                                                className='prd-Category-Price-item-btn'
                                                type='radio'
                                                data-index={1}
                                            />
                                            <span>$50 to $100</span>
                                        </li>
                                        <li className="prd-Category-Price-item"
                                            onClick={(e)=>handleFilterPrice(e)}
                                        >
                                            <input
                                                className='prd-Category-Price-item-btn'
                                                type='radio'
                                                data-index={2}
                                            />
                                            <span>Over $100</span>
                                        </li>
                                    </ul>
                               
                            </div>
                            <div className="col l-10">
                                <div className="product-List-Header">
                                    <div className="product-List-header-sreach">
                                        <input 
                                            placeholder="Enter the name of the product you want to find" 
                                            onChange={handleSearchProduct}
                                        />
                                    </div>
                                    <div className="product-header_sort">
                                        <span className="product-header_sort-label">{sort}</span>
                                        <FontAwesomeIcon className="product-header_sort-icon" icon={faAngleDown}/>

                                        <ul className="product-header_sort-list">
                                            <li 
                                                onClick={handleSortPrice}
                                                className="product-header_sort-item"
                                                data-index={0}
                                            >
                                                high to low
                                            </li>
                                            <li 
                                                onClick={handleSortPrice}
                                                className="product-header_sort-item"
                                                data-index={1}
                                            >
                                                low to high
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-list-body">
                                    <Products props = {nameItem} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FilterPirce.Provider>
            <Footer />
        </div>
    )
}

export default Shop