import React, { useState, useEffect } from 'react'
import { Row, Col, Typography, Steps, message } from 'antd'
import SelectCard from './select-card';
import './styles.css'

const Plants = () => {
  const { Step } = Steps;
  const { Title, Text } = Typography
  const [current, setCurrent] = useState(0)
  const [string, setString] = useState(['Plants'])

  const handleClick = (name) => {
    setCurrent(prev => prev + 1)
    setString(prev => [...prev, name])
    console.log(string)
  }

  const handleStep = (num) => {
    if (string.length > num) {
      setCurrent(prev => prev - 1)
      message.warning('Please choose a cateogry')
    } else {
      setCurrent(num)
    }
  }

  useEffect(() => {
    console.log(string)
  }, [string])
  return (
    <div>
      <div className="steps">
        <Steps direction="horizontal" current={current}>
          <Step title="Choose type" onStepClick={() => handleStep(current)} />
          <Step title="Learn" onStepClick={() => handleStep(current)} />
        </Steps>
      </div>
      <Row gutter={[30, 30]} align={'middle'} justify={'center'}>
        <Col span={24}>
          {string.map(item => (
            <Text style={{ color: '#bbb' }}>{item} / </Text>
          ))}

        </Col>
        {
          current === 0 &&
          <>
            <Col xs={24} md={10} className='select-card' style={{ backgroundImage: `url(https://africanian.com/wp-content/uploads/2020/12/Provocative-Cocoa-flavonoids-may-improve-mobility-quality-of-life-for-older-people_wrbm_large.jpg)` }}>
              <div className='select-card-inner' onClick={() => handleClick('Cash-crops')}>
                <Title level={1} style={{ color: '#fff' }}>Cash Crops (Cocoa) </Title>
              </div>
            </Col>
            <Col xs={24} md={10} className='select-card' onClick={() => handleClick('Tubers')} style={{ backgroundImage: `url(https://www.tastingtable.com/img/gallery/why-the-african-yam-belt-is-crumbling/l-intro-1660076091.jpg)` }}>
              <div className='select-card-inner'>
                <Title level={1} style={{ color: '#fff' }}>Tubers (Yam) </Title>
              </div>
            </Col>
            <Col xs={24} md={10} className='select-card' onClick={() => handleClick('Vegetables')} style={{ backgroundImage: `url(https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg)` }}>
              <div className='select-card-inner'>
                <Title level={1} style={{ color: '#fff' }}>Vegetables</Title>
              </div>
            </Col>
          </>
        }
        {
          current === 1 && string[string.length - 1] === 'Cash-crops' ?
            <Col span={24}>
              <Row gutter={[10, 10]} align={'middle'} justify='center'>
                <Col xs={18} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <iframe width="900" height="400" src="https://www.youtube.com/embed/FbcIivtDFzA" title="Cocoa Farming / Cocoa Cultivation | Complete Guide | Cocoa Beans Sowing - Cocoa Harvesting" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                </Col>
              </Row>
            </Col>
            : current === 1 && string[string.length - 1] === 'Tubers' ?
              <Row gutter={[10, 10]} align={'middle'} justify='center'>
                <Col xs={18} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <iframe width="900" height="400" src="https://www.youtube.com/embed/J42TNu44VIo" title="How to plant yam tuber (step by step instructions)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                </Col>
              </Row>
              : current === 1 && string[string.length - 1] === 'Vegetables' &&
              <Row gutter={[10, 10]} align={'middle'} justify='center'>
                <Col xs={18} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <iframe width="900" height="400" src="https://www.youtube.com/embed/ATI7vfCgwXE" title="Top 8 Easy To Grow Vegetables For Beginners|SEED TO HARVEST" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                </Col>
              </Row>

        }
      </Row>
    </div>
  )
}

export default Plants