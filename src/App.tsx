import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './app.css'
import Header from './layout/header'
import Footer from './layout/footer'
import Dashboard from './components/dashboard/dashboard';
import Products from './components/products/products';



function app() {
  return (
    <section className='flex-1'>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/products' element={<Products />} />
          {/* <Route path='/clientes' element={<Customers/>} */}
        </Routes>
      </Router>
      <Footer />
    </section>
  )
}

export default app
