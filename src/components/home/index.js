import React, { useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { Row, Col, Steps } from 'antd'
import { useNavigate } from 'react-router-dom'
import SelectCard from './select-card'
import { data } from '../../helpers/card-data'
import './styles.css'

const Home = () => {
    const navigate = useNavigate()
    const [current, setCurrent] = useState(0)

    const handleChange = () => {
        setCurrent(prev => prev + 1)
    }
    return (
        <Row gutter={[10, 30]} align={'middle'} justify={'center'}>
                    {
                        data.map((item, index) => (
                            <SelectCard key={index} imgUrl={item.url} link={`/category/${item.to}`}>
                                {item.name}
                            </SelectCard>
                        ))
                    }
        </Row>
    )
}

export default Home