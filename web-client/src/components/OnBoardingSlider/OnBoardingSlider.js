import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Carousel } from 'antd'
import FooterSlider from './FooterSlider/FooterSlider'
import styled from './OnBoardingSlider.module.css'
import FirstSlide from './FirstSlide/FirstSlide'
import SecondSlide from './SecondSlide/SecondSlide'

import image1 from '../../assets/images/slide_1.svg'
import image2 from '../../assets/images/slide_2.svg'
import image3 from '../../assets/images/slide_3.svg'

const OnBoardingSlider = () => {
  const slider = useRef(null)
  const [sliderNumber, setSliderNumber] = useState(0)

  const history = useHistory()

  const handleStart = () => history.push('/main')

  const handleNext = () => {
    setSliderNumber(slider.current.innerSlider.state.currentSlide)
    return slider.current.next()
  }

  return (
    <>
      <Carousel
        className={styled.slider}
        ref={slider}
        afterChange={() =>
          setSliderNumber(slider.current.innerSlider.state.currentSlide)
        }>
        <div className={styled.slide}>
          <FirstSlide
            image={image1}
            header="Calories tracking"
            text="You can calculate and set your daily calorie limit. Now you can easily decide
        whether you can have another slice of sweets."
          />
        </div>
        <div className={styled.slide}>
          <FirstSlide
            image={image2}
            header="Food quality"
            text="You can track the balance of proteins, fats and carbohydrates during the day, and understand your habits."
          />
        </div>
        
        <div className={styled.slide}>
          <SecondSlide
            image={image3}
            header={['Get ready', <br />, 'for the holidays']}
            text="Try to accumulate a calorie shortage to relax on the holidays."
          />
        </div>
      </Carousel>
      {sliderNumber === 0 || sliderNumber === 1 ? (
        <FooterSlider next={handleNext} btnText="Next" />
      ) : (
        <FooterSlider next={handleStart} btnText="Start" />
      )}
    </>
  )
}

export default OnBoardingSlider
