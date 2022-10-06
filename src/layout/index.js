import React from 'react'
import Navbar from './navbar'
import './styles.css'

const Layout = ({ children, navItems }) => {
    return (
        <div className='layout'>
            <Navbar navItems={navItems} />
            <div className='children'>
                {children}
            </div>
        </div>
    )
}

export default Layout