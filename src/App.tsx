import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Header from './layout/header'
import Footer from './layout/footer'
import Dashboard from './components/Dashboard/Dashboard'
import { Products } from './components/Products/Products'

function App() {
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

export default App
