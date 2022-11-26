import { useState, useLayoutEffect, useContext, useEffect } from "react";
import Pagination  from "../pages/products/product/pagination.js";
import axios from "axios";
import {FilterPirce} from '../pages/products/Shop'
function Products({props}){
    const dataPrice = useContext(FilterPirce)
    const [filterPrice, sortPrice] = dataPrice
    const [datas, setData] = useState([]);
    useLayoutEffect(()=>{
        const getData = async () => {
            try {
              const response = await axios.get(`https://ig-food-menus.herokuapp.com/${props}`);
              // filter price 
              if(filterPrice !== undefined){
                const newDatas = [...response.data]
                const newList = newDatas.filter(item => {
                  switch(Number(filterPrice)){
                      case 0:
                          if(item.price < 50)
                          {
                              return item
                          }
                          break
                      case 1:
                          if(50 <= item.price &&  item.price <= 100)
                          {
                              return item
                          }
                          break
                      case 2:
                          if(item.price >= 100)
                          {
                              return item
                          }
                          break
                      default:
                  }
                  })
                
                  setData(newList)
              }
              else{
                  setData(response.data)
              }
              
            } catch (error) {
              console.error(error);
            }
          }

        getData()
    
    },[props,sortPrice,filterPrice])

    // product arrange from high to low or from low to high
    if(sortPrice !== undefined) {

        function compare(a,b) {
            let numberA = a.price
            // console.log('a',a.price)
            let numberB = b.price
            // console.log('b',b.price)
            let comparison = 0
            if(numberA > numberB){ comparison = 1}
            else if(numberA < numberB){comparison = -1}
    
            // console.log(comparison)
            if(sortPrice == 0)return comparison
            else if (sortPrice == 1) return comparison * -1
        }
        switch (Number(sortPrice)) {
            // from high to low
            case 0:
                datas.sort(compare)                                                                                                                                                 
                break
            case 1: 
                datas.sort(compare)      
                break 
            default:
        }
    
        }
    return <Pagination  data={datas} />
    
}

export default Products