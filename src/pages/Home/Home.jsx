import React from 'react'
import HomeInfo from '../../components/HomeInfo/HomeInfo'
import { HomeWrapper } from './HomeStyles'

const Home = () => {
  return (
    <HomeWrapper>
      <HomeInfo />
      <img src="https://i.ibb.co/LSswmjR/home-img.png" alt="Headphones" />
    </HomeWrapper>
  )
}

export default Home