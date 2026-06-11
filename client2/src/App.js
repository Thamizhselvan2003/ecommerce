import './App.css';
import Navbar from './Components/Navbar/Navbar';
 import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product' ;
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Signup from './Pages/Signup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import ChennaiContact from './Components/Contact/Coimbatore';
import Address from './Components/address/Address';
import Payment from './Components/Payment/Payment';
import Company from './Pages/Company';
import Offices from './Pages/Offices';
import About from './Pages/About';


function App() {
  return (
    <>
       <BrowserRouter>
      <Navbar/>
   
       <Routes>
         <Route path='/' element={<Shop/>} /> 
         <Route path='mens' element={<ShopCategory  banner={men_banner}category="men" />}> </Route>
         <Route path='womens' element={<ShopCategory banner={women_banner} category="women" />}></Route>
         <Route path='kids' element={<ShopCategory banner={kid_banner} category="kid" />}></Route>
          <Route path='product' element={<Product />}>
           <Route path=':productId' element={<Product/>}/> 
           </Route> 
          <Route path='cart' element={<Cart/>}></Route>
            <Route path='/login' element={<LoginSignup/>}></Route>
         <Route path="/signup" element={<Signup />}></Route>
         <Route path="/address" element={<Address/>}></Route>
         <Route path="/payment" element={<Payment />} />




         <Route path="/company" element={<Company />} />
         <Route path="/offices" element={<Offices />} />
         <Route path="/about" element={<About />} />
         <Route path="/coimbatore" element={<ChennaiContact />} />
            </Routes> 
            <Footer />
            </BrowserRouter>
         
       
  </>
);
}
export default App;
