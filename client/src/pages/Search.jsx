import React, { useEffect } from 'react'
import Advertisement from '../components/Advertisement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Products from '../components/Products'
import styled from 'styled-components'
import Footer from '../components/Footer'
import { getCart } from '../redux/actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'
import { searchProducts } from '../redux/actions/productsActions'
import { useParams } from 'react-router-dom'
import Product from '../components/Product'


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
const WrapperSearch = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 50px;
    margin-top: 30px;
    justify-content: center;    
`


const Search = () => {

    const products = useSelector((state) => state.products.productsSearched.products);
    const dispatch = useDispatch();
    const { text } = useParams();



    useEffect(() => {
        
        searchProducts(dispatch,text)

    }, [text])
    
    console.log(products)

    return (
        <Container>
            <Navbar/>
            <WrapperSearch>
            {products?.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </WrapperSearch>
            <Footer/>
        </Container>
    )
}

export default Search
