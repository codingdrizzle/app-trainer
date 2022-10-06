import React from 'react'
import Home from '../components/home'
import Layout from '../layout'

const HomePage = () => {
  return (
    <Layout navItems={['Login', 'Register']}>
        <Home/>
    </Layout> 
  )
}

export default HomePage