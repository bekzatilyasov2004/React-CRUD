import { Carousel } from 'antd'
import React from 'react'

const HomePage = () => {
    return (
        <div  className='w-full  bg-blue-300 overflow-hidden'>
            <Carousel autoplay arrows style={{ height: 'calc(100vh - 80px)' }}>
                <div  className='w-full h-screen img1'>
                </div>
                        <div className='w-full h-screen img2'>
                </div>
                        <div className='w-full h-screen img3'>
                </div>
            </Carousel>
        </div>
    )
}

export default HomePage
