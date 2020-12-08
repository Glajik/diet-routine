import React, { useState } from 'react'
import { Carousel } from 'antd'
import styled from './OnBoardingSlider.module.css'

let data = [
  { title: 'Card title1', value: 'Card content1' },
  { title: 'Card title2', value: 'Card content2' },
  { title: 'Card title3', value: 'Card content3' },
]

const OnBoardingSlider = () => {
  const [value, setValue] = useState(0)

  function onChange(a, b, c) {
    console.log(a, b, c)
  }

  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  }

  return (
    <>
      <Carousel afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </>
  )
}

export default OnBoardingSlider
