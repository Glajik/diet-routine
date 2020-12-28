import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Carousel, message } from 'antd'
import FooterSlider from './FooterSlider/FooterSlider'
import styled from './OnBoardingSlider.module.css'
import FirstSlide from './FirstSlide/FirstSlide'
import SecondSlide from './SecondSlide/SecondSlide'

import image1 from '../../assets/images/slide_1.svg'
import image2 from '../../assets/images/slide_2.svg'
import image3 from '../../assets/images/slide_3.svg'
import { useFirebase, useFirestore } from 'react-redux-firebase'

const OnBoardingSlider = () => {
  const slider = useRef(null)
  const [sliderNumber, setSliderNumber] = useState(0)
  const lastSlide = 2

  const history = useHistory()

  const firebase = useFirebase()
  const firestore = useFirestore()

  const handleTry = async () => {
    try {
      // Create guest user
      const result = await firebase.auth().signInAnonymously()
      message.success('You are welcome!')
      const { uid } = result.user
      // Get username for guest
      const displayName = `Guest ${uid.slice(0, 5)}`
      // Update profile
      await firebase.updateAuth({ displayName })
      // Create user profile
      await firestore.collection('UserProfiles')
        .doc(uid)
        .set({ displayName })
      history.push('/main')
    } catch (error) {
      message.error('Sorry, can\'t create anonymous profile for you now!')
      console.error(error)
      history.push('/')
    }
  }

  const handleNext = () => {
    setSliderNumber(slider.current.innerSlider.state.currentSlide)
    return slider.current.next()
  }

  const Footer = () => (
    sliderNumber < lastSlide
      ? <FooterSlider btnText="Next" onNext={handleNext} onSkip={handleTry} />
      : <FooterSlider btnText="Start" onNext={handleTry} />
  )

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
      <Footer />
    </>
  )
}

export default OnBoardingSlider
