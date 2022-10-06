import React from 'react'
import { Card, Col, Typography } from 'antd'
import { Link } from 'react-router-dom'
import './styles.css'

const SelectCard = (props) => {
  const { Title } = Typography
  return (
    <Col xs={12} md={10} className='select-card' style={{ backgroundImage: `url(${props.imgUrl})` }}>
        <Link to={props.link} style={{display: 'block', height: 'inherit', textDecoration: 'none'}}>
        <div className='select-card-inner'>
          <Title level={1} style={{ color: '#fff' }}>{props.children}</Title>
        </div>
    </Link>
      </Col>
  )
}

export default SelectCard