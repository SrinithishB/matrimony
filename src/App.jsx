import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Aboutus from './components/Aboutus'
import TermsAndConditions from './components/TermsAndConditions'
import PrivacyPolicy from './components/PrivacyPolicy'
import RefundPolicy from './components/RefundPolicy'

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<Home/>} path='/'></Route>
        <Route element={<Aboutus/>} path='/about'></Route>
        <Route element={<TermsAndConditions/>} path='/terms'></Route>
        <Route element={<PrivacyPolicy/>} path='/privacy'></Route>
        <Route element={<RefundPolicy/>} path='/refundpolicy'></Route>


      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App