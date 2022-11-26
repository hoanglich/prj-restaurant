import {useContext, useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin,
         faDollarSign 
} from '@fortawesome/free-solid-svg-icons';

import './pagination.css'
import { FilterPirce } from '../Shop';
import Overlay from '../../../component/overlay/overlay';
import { searchTextSelector } from '../../../redux/selector';

function Pagination({data}) {
    const sreachText = useSelector(searchTextSelector)
    const dataPirce = useContext(FilterPirce)
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0)
    const itemsPerPage = 24
    const [filterPrice] = dataPirce
    // paging
    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        if(data.length < 24) {
            setPageCount(1)
        }
        else{
            setPageCount(Math.ceil(data.length / itemsPerPage));
        }
        
    }, [itemOffset, itemsPerPage, data,filterPrice]);
    
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
    };
    
    useEffect(() => {
        window.scrollTo(0, 500);
    }, []);
    
    const filterList = currentItems.filter(item=>
        item.name.toLowerCase().includes(sreachText)
    )
    // .includes(sreachText)
    const Render = filterList == '' ? currentItems : filterList
    return Render.length !== 0 ?(
        <>
            <div className= {`products-item row`}>
                {Render.map((item, index)=>{
                    return (
                        <div className='col l-3 ' key={index}>
                            <Link
                                to={`/shop/${item.id}`}
                                className='product-item '
                                key={index}
                                style = {{display: item.display}}
                            >   
                                <div 
                                    className="product-img" 
                                    style={{
                                        backgroundImage: `url(${item.img})`
                                    }}
                                    
                                >
                                    <Overlay value={'product-img_overlay'} >
                                        <div className='product-img_overlay-btn'>ADD TO CART</div>
                                    </Overlay>
                                </div>
                                
                                <div className='product-content'>
                                    <h3 className='product-content_name'>{item.name}</h3>
                                    <p className='product-content_dsc'>{item.dsc}</p>
                                    <div className='product-content_other'>
                                        <div className='product-content_other-location'>
                                            <FontAwesomeIcon className='product-content_other-location_icon' icon={faLocationPin} />
                                            <p>{item.country}</p>
                                        </div>
                                        <div className='product-content_other-price'>
                                                <FontAwesomeIcon icon={faDollarSign} />
                                            <p>
                                                {item.price}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
            <ReactPaginate
                 containerClassName={'pagination'}
                 previousLabel={'<'}
                 previousClassName={'pre'}
                 nextClassName={'next'}
                 nextLabel={'>'}
                 marginPagesDisplayed={0}
                 breakLabel={''}
                 pageCount={pageCount}
                 pageRangeDisplayed={3}
                 pageClassName={'pageNumber'}
                 onPageChange={handlePageClick}
            />
        </>
        
    ) : (
        <div className='product-unvaliable'>products is not avaliable</div>
    )
}

export default Pagination