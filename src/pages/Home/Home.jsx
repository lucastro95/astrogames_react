import React from 'react'
import HomeInfo from '../../components/HomeInfo/HomeInfo'
import { HomeWrapper } from './HomeStyles'

const Home = () => {
  return (
    <HomeWrapper>
      <HomeInfo />
      <img src={require("../../images/home-img.png")} alt="Headphones" />
    </HomeWrapper>
  )
}

export default Home