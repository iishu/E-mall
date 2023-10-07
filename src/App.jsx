import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState'; 
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/pages/AddProduct';
import UpdateProduct from './pages/admin/pages/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproducts/Allproducts';

function App() {
  return (
    <MyState>
        <Router>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/allproducts" element={<Allproducts />}/>
         <Route path="/order" element={
         <ProtectedRoute>
          <Order/>
         </ProtectedRoute>
         }/>
         <Route path="/cart" element={<Cart/>}/>
         <Route path="/dashboard" element={
          <ProtectedRoutesForAdmin>
            <Dashboard/>
          </ProtectedRoutesForAdmin>
         }/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/productinfo/:id" element={<ProductInfo />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/addproduct" element={
            <ProtectedRoutesForAdmin><AddProduct /></ProtectedRoutesForAdmin>} />
          <Route path="/updateproduct" element={
            <ProtectedRoutesForAdmin><UpdateProduct /></ProtectedRoutesForAdmin>} />
          
         <Route path="/*" element={<NoPage/>}/>
        
      </Routes>
      <ToastContainer/>
     </Router>
    </MyState>
     
    
  )
}
export default App

//user

export const ProtectedRoute=({children})=>{
  const user=localStoage.getItem('user')
  if (user) {
    return children
  }else{
    return <Navigate to={'/login'}/>
  }
}

//admin
const ProtectedRoutesForAdmin=({children})=>{
  const admin=JSON.parse(localStoage.getItem('user'))

  if(admin.user.email==='ishikasrivastava294@gmail'){
    return children
  }
  else{
    return <Navigate to={'/login'}/>
  }
}  