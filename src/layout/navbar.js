import React, { useState } from 'react'
import { Typography } from 'antd'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import './styles.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const { Title, Text } = Typography

    const [show, setShow] = useState()
    return (
        <div className='navbar'>
            <Title level={3}>Farmeraid Training</Title>
            <div className='navItems'>
               
                    <Link to={`/`} className={'navItem'}>
                        <Text>Go Home</Text>
                    </Link>
            </div>
            <IoMdMenu size={30} className='collapse-icon' onClick={() => setShow(true)} />
            <div className='navItems-mobile' style={{ display: show ? 'block' : 'none' }}>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}><IoMdClose size={30} onClick={() => setShow(false)} /></div>

                <Link to={`/`} className={'navItem-mobile'}>
                    <Text>Go Home</Text>
                </Link>
            </div>
        </div>
    )
}

export default Navbar