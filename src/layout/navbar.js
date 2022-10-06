import React, { useState} from 'react'
import { Typography } from 'antd'
import {IoMdMenu, IoMdClose} from 'react-icons/io'
import './styles.css'
import { Link } from 'react-router-dom'

const Navbar = ({ navItems, to }) => {
    const { Title, Text } = Typography

    const [ show, setShow] = useState()
    return (
        <div className='navbar'>
            <Title level={3}>Farmeraid Training</Title>
            <div className='navItems'>
                {navItems.map(item => (
                    <Link to={`/${item.toLowerCase()}`} className={'navItem'}>
                        <Text>{item}</Text>
                    </Link>
                ))}
            </div>
            <IoMdMenu size={30} className='collapse-icon' onClick={() => setShow(true)}/>
            <div className='navItems-mobile' style={{display: show ? 'block' : 'none'}}>
                <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}><IoMdClose size={30} onClick={() => setShow(false)}/></div>
                {navItems.map(item => (
                    <Link to={`/${item.toLowerCase()}`} className={'navItem-mobile'}>
                        <Text>{item}</Text>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Navbar