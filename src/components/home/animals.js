import React, { useState, useEffect } from 'react'
import { Row, Col, Typography, Steps, message, Modal, Button } from 'antd'
import { FoulData } from '../../helpers/data';
import SelectCard from './select-card';
import './styles.css'

const Animals = () => {
    const { Step } = Steps;
    const { Title, Text } = Typography
    const [current, setCurrent] = useState(0)
    const [opened, setOpened] = useState(false)
    const [string, setString] = useState(['Animals'])

    const handleClick = (name) => {
        setString(prev => [...prev, name])
        if (string[1] === 'fouls') {
            setOpened(true)
        }else{
            setCurrent(prev => prev + 1)
        }
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
                    <Step title="Next" onStepClick={() => handleStep(current)} />
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
                        <Col xs={24} md={10} className='select-card' style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2016/08/16/01/19/goat-1596880__340.jpg)` }}>
                            <div className='select-card-inner' onClick={() => handleClick('livestock')}>
                                <Title level={1} style={{ color: '#fff' }}>Livestock</Title>
                            </div>
                        </Col>
                        <Col xs={24} md={10} className='select-card' onClick={() => handleClick('fouls')} style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2016/11/29/05/25/chicken-1867521__340.jpg)` }}>
                            <div className='select-card-inner'>
                                <Title level={1} style={{ color: '#fff' }}>Fouls</Title>
                            </div>
                        </Col>
                    </>
                }
                {
                    current === 1 && string[1] === 'livestock' ?
                        <>
                            <Col xs={24} md={10} className='select-card' style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2014/09/24/15/15/billy-goat-459232__340.jpg)` }}>
                                <div className='select-card-inner' onClick={() => handleClick('goats')}>
                                    <Title level={1} style={{ color: '#fff' }}>Goats/Sheep</Title>
                                </div>
                            </Col>
                            <Col xs={24} md={10} className='select-card' onClick={() => handleClick('cow')} style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2018/07/01/15/08/beef-3509716__340.jpg)` }}>
                                <div className='select-card-inner'>
                                    <Title level={1} style={{ color: '#fff' }}>Cow</Title>
                                </div>
                            </Col>
                            <Col xs={24} md={10} className='select-card' onClick={() => handleClick('pig')} style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2018/05/09/22/44/piglet-3386356__340.jpg)` }}>
                                <div className='select-card-inner'>
                                    <Title level={1} style={{ color: '#fff' }}>Pig</Title>
                                </div>
                            </Col>
                        </> : current === 1 && string[1] === 'fouls' &&
                        <>
                            <Col xs={24} md={10} className='select-card' style={{ backgroundImage: `url(https://www.thehappychickencoop.com/wp-content/uploads/2018/01/rooster-from-a-hen.jpg)` }}>
                                <div className='select-card-inner' onClick={() => handleClick('hens')}>
                                    <Title level={1} style={{ color: '#fff' }}>Hens</Title>
                                </div>
                            </Col>
                            <Col xs={24} md={10} className='select-card' onClick={() => handleClick('turkeys')} style={{ backgroundImage: `url(https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/evil-eye-from-foul-turkey-leeann-mclane-goetz.jpg)` }}>
                                <div className='select-card-inner'>
                                    <Title level={1} style={{ color: '#fff' }}>Turkey</Title>
                                </div>
                            </Col>
                        </>
                }
                {
                    current === 2 && string[string.length - 1] === 'goats' ?
                        <Col span={24}>
                            <Row gutter={[10, 10]} align={'middle'} justify='center'>
                                <Col xs={18} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <iframe width="990" height="400" src="https://www.youtube.com/embed/6rywxNkZFYQ" title="Goat Rearing In AFRICA! She Started With Only 3 GOATS! /Successful Farmer." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </Col>
                            </Row>
                        </Col>
                        : current === 2 && string[string.length - 1] === 'cow' ?
                            <Row gutter={[10, 10]} align={'middle'} justify='center'>
                                <Col xs={18} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <iframe width="990" height="400" src="https://www.youtube.com/embed/DzGxvxK9Ll4" title="AYEKOO: Cattle Rearing In Ghana" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </Col>
                            </Row>
                            : current === 2 && string[string.length - 1] === 'pig' ?
                                <Row gutter={[10, 10]} align={'middle'} justify='center'>
                                    <Col xs={18} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <iframe width="990" height="400" src="https://www.youtube.com/embed/qbZP32Jd02I" title="How To Become A millionaire Through Pig-rearing! /2021 TIPS!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </Col>
                                </Row>
                                : current === 2 && string[string.length - 1] === 'hens' ?
                                    <Row gutter={[10, 10]} align={'middle'} justify='center'>
                                        <Col xs={18} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <iframe width="990" height="400" src="https://www.youtube.com/embed/f2iJndebucU" title="How I Became a Millionaire by Local chicken Farming | My Challanges" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </Col>
                                    </Row>
                                    : current === 2 && string[string.length - 1] === 'turkeys' &&
                                    <Row gutter={[10, 10]} align={'middle'} justify='center'>
                                        <Col xs={18} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <iframe width="990" height="400" src="https://www.youtube.com/embed/OrtTV0R5SU0" title="How to start Turkey Farming business | Step-by-step Lessons" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </Col>
                                    </Row>
                }
            </Row>
            <Modal open={opened} footer={null} closable={true} onCancel={()=> {
                string.pop()
                setOpened(false)
            }}>
                <FoulData label={string[string.length - 1]}/>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Button className='nextBtn' onClick={handleOpen}>Watch Video</Button>
                </div>

            </Modal>
        </div>
    )
}

export default Animals