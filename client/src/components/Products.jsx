import React, { useEffect, useState } from 'react'
import Product from './Product'
import styled from 'styled-components'
import { popularProducts } from '../data'
import { mobile, laptop, tablet, desktop } from '../responsive'
import axios from 'axios'
import { axiosInstance } from '../confing'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/thunk/apiCalls'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 50px;
    justify-content: center;
    ${desktop({ width: "100%" })}
    
`




const Products = ({ category, filters, sort }) => {


    const products = useSelector((state) => state.products.products);
    const [filteredProducts, setFilteredProducts] = useState([]);


  
   
    useEffect(() => {

        let unmounted = false;
        console.log(products)
        console.log(filters)
        console.log(products.category)
        if (category && (filters.brand == null || filters.brand == "all" ) && !unmounted) {
            
            const filtered = products.filter((item) => item.categories == filters.category )
            setFilteredProducts(filtered)
   

            console.log(filtered)
        }
        
        else if (category && !unmounted) {
            const filtered = products.filter((item) => item.categories == filters.category  && item.brand == filters.brand)
            setFilteredProducts(filtered)
   

            console.log(filtered)
        }
        return () => { unmounted = true };
    }, [category, filters, products])

    console.log(filteredProducts)
    return (
        <Container>
            {filteredProducts.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Products
