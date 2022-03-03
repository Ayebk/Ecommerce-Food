import React, { useEffect } from "react";
import Advertisement from "../components/Advertisement";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Products from "../components/Products";
import styled from "styled-components";
import Footer from "../components/Footer";
import { getCart } from "../redux/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { lastProducts, mostProducts } from "../redux/actions/productsActions";
import { stores } from "../data";

const Container = styled.div``;

const Title = styled.h1`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: #354550;
  font-size: 60px;
  margin-bottom: 30px;
  margin-top: 30px;
  padding: 15px;
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 50px;
  justify-content: center;
`;

const StoresWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 50px;
  justify-content: center;
`;

const Store = styled.div`
  display: flex;
  margin-bottom: 30px;
  height: 160px;
`;

const StoreImg = styled.div`
  width: 200px;
`;

const StoreInfo = styled.div`
  width: 300px;
`;

const StoreTitle = styled.h1``;
const StoreDeta = styled.h3``;

const StoreImage = styled.img`
  object-fit: scale-down;
  width: 100%;
  height: 100%;
`;

const Stores = () => {


console.log(stores)

  return (
    <Container>
      <Navbar />
      <Advertisement />

      <Title> הכירו את החנויות והרשתות שפועלים איתנו</Title>

      <StoresWrapper>
        {stores.map((item) => (
          <Store key={item.id}>
            <StoreInfo>
              <StoreTitle>{item.title}</StoreTitle>
              <StoreDeta>{item.desc}</StoreDeta>
            </StoreInfo>
            <StoreImg>
              <StoreImage src={item.img} />
            </StoreImg>
          </Store>
        ))}
      </StoresWrapper>
      <Footer />
    </Container>
  );
};

export default Stores;
