import React from 'react'
import Advertisement from '../components/Advertisement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Products from '../components/Products'
import styled from 'styled-components'
import Footer from '../components/Footer'


const Container = styled.div`

`

const Title = styled.h1`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: #354550;
  font-size: 60px;
`

const Home = () => {
    return (
        <Container>
            <Navbar/>
            <Advertisement/>
            <Slider/>
            <Categories/>
            <Title> המובילים</Title>
            <Products/>
            <Footer/>
        </Container>
    )
}

export default Home
