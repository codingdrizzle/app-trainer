import React, { useState, useEffect } from 'react'
import { Row, Col, Typography, Steps, message, Modal, Button } from 'antd'
import { FishData } from '../../helpers/data';
import SelectCard from './select-card';
import './styles.css'

const Fisheries = () => {
  const { Step } = Steps;
  const { Title, Text } = Typography
  const [current, setCurrent] = useState(0)
  const [opened, setOpened] = useState(false)
  const [string, setString] = useState(['Fisheries'])

  const handleClick = (name) => {
    setOpened(true)
    setString(prev => [...prev, name])
  }

  const handleStep = (num) => {
    if (string.length > num) {
      setCurrent(prev => prev - 1)
      message.warning('Please choose a cateogry')
    } else {
      setCurrent(num)
    }
  }

  const handleOpen = () => {
    setCurrent(prev => prev + 1)
    setOpened(false)

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
            <Col xs={24} md={10} className='select-card' style={{ backgroundImage: `url(https://www.globalseafood.org/wp-content/uploads/2018/12/STONEHAM-tilapia-Pic-0.jpg)` }}>
              <div className='select-card-inner' onClick={() => handleClick('tilapia')}>
                <Title level={1} style={{ color: '#fff' }}>Tilapia</Title>
              </div>
            </Col>
            <Col xs={24} md={10} className='select-card' onClick={() => handleClick('Cat-fish')} style={{ backgroundImage: `url(https://animalcorner.org/wp-content/uploads/2015/02/catfish.jpg)` }}>
              <div className='select-card-inner'>
                <Title level={1} style={{ color: '#fff' }}>Cat Fish</Title>
              </div>
            </Col>
          </>
        }
        {
          current === 1 && string[string.length - 1] === 'tilapia' ?
            <Col span={24}>
              <Row gutter={[10, 10]} align={'middle'} justify='center'>
                <Col xs={18} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <iframe width="990" height="400" src="https://www.youtube.com/embed/DOdeXcLjYh0" title="Tilapia farming: routine activities" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                </Col>
              </Row>
            </Col>
            : current === 1 && string[string.length - 1] === 'Cat-fish' &&
            <Row gutter={[10, 10]} align={'middle'} justify='center'>
              <Col xs={18} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <iframe width="900" height="400" src="https://www.youtube.com/embed/ULrEsvPE4dE" title="Starting a catfish (Clarias batrachus) farm @ home, 200 fish in a 500 liter tank with 2 week update" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                </Col>
            </Row>
        }
      </Row>

      <Modal open={opened} footer={null} closable={true} onCancel={() => {
        string.pop()
        setOpened(false)
      }}>
        <FishData />
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Button className='nextBtn' onClick={handleOpen}>Watch Video</Button>
        </div>

      </Modal>
    </div>
  )
}

export default Fisheries