import React, { useState } from 'react'
import { Row, Col, Typography, Steps } from 'antd'
import SelectCard from './select-card';
import './styles.css'

const Animals = () => {
    const { Step } = Steps;
    const { Title, Text } = Typography
    const [current, setCurrent] = useState(0)
    const [string, setString] = useState('')

    const handleClick = (name) => {
        setCurrent(prev => prev + 1)
        setString(prev => prev + name)
    }
    return (
        <div>
            <div className="steps">
                <Steps direction="horizontal" current={current}>
                    <Step title="Choose type" onStepClick={() => setCurrent(0)} />
                    <Step title="In Progress" onStepClick={() => setCurrent(1)} />
                    <Step title="Next" onStepClick={() => setCurrent(2)} />
                    <Step title="Keep Waiting" description="This is a description." onStepClick={() => setCurrent(3)} />
                    <Step title="Finish" description="This is a description." onStepClick={() => setCurrent(4)} />
                </Steps>
            </div>
            <Row gutter={[30, 30]} align={'middle'} justify={'center'}>
                <Col span={24}>
                    <Text style={{ color: '#bbb' }}>{string}</Text>
                </Col>
                {
                    current === 0 &&
                    <>
                        <Col xs={24} md={10} className='select-card' style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2016/08/16/01/19/goat-1596880__340.jpg)` }}>
                            <div className='select-card-inner' onClick={() => handleClick('livestock / ')}>
                                <Title level={1} style={{ color: '#fff' }}>Livestock</Title>
                            </div>
                        </Col>
                        <Col xs={24} md={10} className='select-card' onClick={() => handleClick('fouls / ')} style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2016/11/29/05/25/chicken-1867521__340.jpg)` }}>
                            <div className='select-card-inner'>
                                <Title level={1} style={{ color: '#fff' }}>Fouls</Title>
                            </div>
                        </Col>
                    </>
                }
                {
                    current === 1 && string.includes('livestock') ?
                        <>
                            <Col xs={24} md={10} className='select-card' style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2014/09/24/15/15/billy-goat-459232__340.jpg)` }}>
                                <div className='select-card-inner' onClick={() => handleClick('goats / ')}>
                                    <Title level={1} style={{ color: '#fff' }}>Goats/Sheep</Title>
                                </div>
                            </Col>
                            <Col xs={24} md={10} className='select-card' onClick={() => handleClick('cow / ')} style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2018/07/01/15/08/beef-3509716__340.jpg)` }}>
                                <div className='select-card-inner'>
                                    <Title level={1} style={{ color: '#fff' }}>Cow</Title>
                                </div>
                            </Col>
                            <Col xs={24} md={10} className='select-card' onClick={() => handleClick('cow / ')} style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2018/05/09/22/44/piglet-3386356__340.jpg)` }}>
                                <div className='select-card-inner'>
                                    <Title level={1} style={{ color: '#fff' }}>Pig</Title>
                                </div>
                            </Col>
                        </> : current === 1 && string.includes('fouls') && 
                        <>
                            <Col xs={24} md={10} className='select-card' style={{ backgroundImage: `url(https://www.thehappychickencoop.com/wp-content/uploads/2018/01/rooster-from-a-hen.jpg)` }}>
                                <div className='select-card-inner' onClick={() => handleClick('livestock / ')}>
                                    <Title level={1} style={{ color: '#fff' }}>Hens</Title>
                                </div>
                            </Col>
                            <Col xs={24} md={10} className='select-card' onClick={() => handleClick('fouls / ')} style={{ backgroundImage: `url(https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/evil-eye-from-foul-turkey-leeann-mclane-goetz.jpg)` }}>
                                <div className='select-card-inner'>
                                    <Title level={1} style={{ color: '#fff' }}>Turkey</Title>
                                </div>
                            </Col>
                        </>
                }
            </Row>
        </div>
    )
}

export default Animals