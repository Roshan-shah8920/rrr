import { useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar';
import Footer from './page/Footer';
import CustomNext from './page/CustomNext';
import Home from './page/Home';
import About from './page/About';
import Login from './page/Login';
import Cart from './page/Cart';
import Electronic from './page/Electronic';
import Contact from './page/Contact';
import PrivacyPolicy from './page/PrivacyPolicy';
import Whislist from './page/Whislist';
import CheckOut from './page/CheckOut';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchResults from './page/SearchResults';
import Kitchen from './page/Kitchen';
import Bags from './page/Bags';
import Buds from './page/Buds';
import Register from './page/Register';
import BluetoothSpeakers from './page/BluetoothSpeakers';
import Smartwatch from './page/Smartwatch';
import GraphicsCards from './page/GraphicsCards';
import Faq from './page/Faq';
import TermAndCondition from './page/TermAndCondition';
import Profile from './page/Profile';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Navbar will show on every page */}
      <Navbar />

      {/* Main content */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/customnext' element={<CustomNext />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout-page' element={<CheckOut/>} />
        <Route path='/wishlist' element={<Whislist/>} />
         <Route path='/electronic/:productName' element={<Electronic />} /> 
         <Route path='/kitchen' element={<Kitchen/>}/>
         <Route path='/bags' element={<Bags/>} />
         <Route path='/buds' element={<Buds/>} />
         <Route path='/bluetoothSpeakers' element={<BluetoothSpeakers/>} />
         <Route path='/smartwatch' element={<Smartwatch/>} />
         <Route path='/graphicscards' element={<GraphicsCards/>} />
         <Route path='/faq' element={<Faq/>} />
         <Route path='/terms-and-conditions' element={<TermAndCondition/>} />
         <Route path="/bluetooth" element={<Bluetooth />} />
         <Route path="/check-out" element={<CheckOut />} />
         <Route path="/profile" element={<Profile/>} />

          <Route path="/search/:query" element={<SearchResults />} />
      </Routes>

      {/* Footer will show on every page */}
      <Footer />
      <ToastContainer/>
    </>
  );
}

export default App;
