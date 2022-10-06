import React from 'react'
import {Routes, Route} from 'react-router-dom'
import LoginPage from '../pages/login'
import HomePage from '../pages/home'
import CategoryPage from '../pages/category'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/category/:id' element={<CategoryPage/>}/>

    </Routes>
  )
}

export default AppRoutes