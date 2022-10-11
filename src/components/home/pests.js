import React, { useState, useEffect } from 'react'
import { Row, Col, Typography, Steps, message, Button } from 'antd'
import { FaVideo } from 'react-icons/fa'
import './styles.css'

const Pests = () => {
  const { Step } = Steps;
  const { Title, Text } = Typography
  const [current, setCurrent] = useState(0)
  const [string, setString] = useState(['Pest-and-Disease / Tutorial'])

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
    // setString(prev => [...prev, 'Tutorial']/)
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
          <Col span={24}>
            <Row gutter={[10, 10]} align={'middle'} justify='center'>
              <Col xs={24} md={8} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <iframe width="500" height="300" src="https://www.youtube.com/embed/g_Qoqu_qhjM" title="How to make organic pesticide from neem leaves" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Col>
              <Col xs={24} md={8} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <iframe width="500" height="300" src="https://www.youtube.com/embed/hXlSicZE9jI" title="10 Organic Ways to Control Pests in the Garden" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Col>
              <Col xs={24} md={8} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <iframe width="500" height="300" src="https://www.youtube.com/embed/kKynrKrrADo" title="All Pest Controls Chemical Pesticides | How To Use Chemical Pesticides |" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Col>
              <Col xs={24} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid dodgerblue', cursor: 'pointer' }}>
                <Title style={{margin: 0, padding: 0}}>
                  <a href="https://www.canna-uk.com/how_control_pests_and_diseases_biological_vs_chemical" target={'_blank'}className='article'>
                    Read this article
                  </a>
                </Title>
              </Col>
            </Row>
          </Col>
        }
      </Row>
    </div>
  )
}

export default Pests