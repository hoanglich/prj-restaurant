import {BrowserRouter as Router, Routes,Route, } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {getCart} from '../src/redux/reducer/cartSlice'
import { publicRoutes } from './routers/routers';
import './App.css';


function App() {
  const dispatch =useDispatch()

  useEffect(()=>{
    dispatch(getCart())
  },[])
  return (
    <Router>
      <div className="App">
        <Routes>
         {
            Object.values(publicRoutes).map((route, index)=> {
              const Page = route.component
              return <Route path={route.path} element={<Page />} key={index} />
            })
         }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
