import { useEffect, useState } from 'react'
import Advertisement from '../components/Advertisement'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Products from '../components/Products'
import Footer from '../components/Footer'
import { mobile, laptop, tablet, desktop } from '../responsive'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getProducts } from '../redux/thunk/apiCalls'


const Container = styled.div`

`

const Title = styled.h1`
    color: black;
    font-family: 'Assistant';
    font-size: 58px;
    margin-top: 15px;
    margin-right: 15px;
    margin-bottom: 15px;
`

const WrapperFilter = styled.div`
margin-right: 2px;
display: flex;
margin-bottom: 50px;
${mobile({  })}

`

const ProductFilter = styled.div` 
display: flex;
flex:3;
right: 15px;
    position: relative;

`
const ProductSorted = styled.div` 
display: flex;
flex:1;
`


const ProductFilterTitle = styled.h2`
 margin-left: 10px;

font-family: 'Assistant';
    font-size: 25px;
    align-self: center;
    ${mobile({ display: "none" })}

    
`


const WrapperProductList = styled.div`

`

const Select = styled.select`

font-family: 'Assistant';
font-size: 25px;
    font-weight: bold;
    padding: 10px;
    ${tablet({ padding: "0px" })}
    ${mobile({ fontSize:"19px" , padding: "0px" })}


    
`

const Option = styled.option`
font-family: 'Assistant';

`

const ProductList = () => {

    let { category } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const brands = ["sweets","breads","meats","drinks","cheese","pizza"]
    const [filters,setFilters]= useState({category:`${category}`});
    const [sort,setSort]= useState("name");



    useEffect(() => {

        console.log("aaaaaa  " + category )
        getProducts(dispatch, { category });

    }, [filters])

    const handlerFilters = (e) =>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value
        })
        if(brands.includes(value)){
            navigate(`/products/${value}`);
        }
    }

 
  

    return (
        <Container>

            <Navbar />
            <Advertisement />
            <Title>מוצרים</Title>
            <WrapperProductList>
                <WrapperFilter>
                    <ProductFilter>
                        <ProductFilterTitle>בחר מוצר:</ProductFilterTitle>
                            <Select  name="category" onChange={handlerFilters}>
                                <Option selected value="all" disabled >קטגוריה</Option>
                                <Option  disabled ></Option>
                                <Option  value="sweets">מתוקים</Option>
                                <Option  value="breads">לחמים</Option>
                                <Option  value="meats">בשרים</Option>
                                <Option  value="drinks">משקאות</Option>
                                <Option  value="cheese">גבינות</Option>
                                <Option  value="pizza">פיצות</Option>
                            </Select>
                            <Select  name="brand" onChange={handlerFilters}>
                                <Option  selected value="all" disabled >מותג</Option>
                                <Option value="all">הכל</Option>
                                <Option  value="FoodNow">FoodNow</Option>
                                <Option  value="סופר סלים">סופר סלים</Option>
                                <Option  value="יבגני בע''מ">יבגני בע''מ</Option>
                                <Option  value="PizzaWorld">PizzaWorld</Option>
                            </Select>
                    </ProductFilter>
                    <ProductSorted>
                        <ProductFilterTitle>בחר סדר:</ProductFilterTitle>
                        <Select  name="order" onChange={e=> setSort(e.target.value)}>
                                <Option value="name" selected >שם</Option>
                                <Option value="asc" >מחיר ⇧</Option>
                                <Option value="desc" >מחיר ⇩</Option>
                            </Select>
                    </ProductSorted>
                </WrapperFilter>

            </WrapperProductList>
            <Products category={category} filters={filters}  sort={sort}/>
            <Footer/>

        </Container>
    )
}

export default ProductList
