import { useEffect, useState } from "react";
import Advertisement from '../components/Advertisement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Products from '../components/Products'
import styled from 'styled-components'
import Footer from '../components/Footer'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile, laptop, tablet, desktop } from '../responsive'
import axios from 'axios';

import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { axiosInstance } from "../confing";





const Container = styled.div`

`

const Title = styled.h1`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: #354550;
  font-size: 60px;
  margin-top:30px;
  margin-bottom:10px;
  
`
const Wrapper = styled.div`
display: flex;
${desktop({
    flexDirection: "column"
})} 
`
const InfoCart = styled.div`
flex:3;
display: flex;
flex-direction:column;
`
const Summery = styled.div`
flex:1.5;
border: 2px solid #62dbffa6;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  align-self: center;
  height: max-content;
  margin-left: 12px;
  ${mobile({
        padding: "5px",marginBottom:"15px",margin: "5px"
})} 
`
const SummeryTitle = styled.h1`
    color: #3e515f;
    margin-bottom: 20px;
`
const SummeryItem = styled.div`
color: #3e515f;

`

const SummeryItemTotal = styled.div`
color: #3e515f;
display: flex; 
margin-top:20px; 
font-weight:700;
padding: 3px;
margin-top: 20px;
`

const SummeryItemText = styled.span`

font-size: 30px;

`

const SummeryItemTotalText = styled.span`
font-size: 45px;
${mobile({
        fontSize: "30px"
})} 

`


const SummeryItemPrice = styled.span`

`

const SummeryPrice = styled.div`
    color:#3e515f;
    font-size: 42px;
    font-family: fantasy;
    font-weight: 500;
    margin-right: 70px;


       
`
const SummeryPriceTotal = styled.div`
  

  color:#3e515f;
    font-size: 60px;
    font-family: fantasy;
    font-weight: 500;
    margin-right: 70px;
    ${mobile({
        marginRight: "25px"
})} 
`


const SummeryButton = styled.button`

`

const ProductDetail = styled.div`
display: flex;
`
const Image = styled.img`
flex: 1;
width: 200px;
${laptop({
    width: "100px"
})} 
   ${tablet({
   display:"none"
})} 
`
const Details = styled.div`
flex:2;
display: flex;
flex-direction:column;
padding: 20px;
${mobile({
   flex: "1"
})} 

`



const ProductName = styled.span`
font-size: 40px;
margin-bottom: auto;
${mobile({
   fontSize: "30px"
})} 

`
const ProductId = styled.span`

font-size: 20px;
${mobile({
   fontSize: "17px"
})} 

`
const ProductColor = styled.span`

`

const ProductBrand = styled.span`
font-size: 20px;
${mobile({
   fontSize: "17px"
})} 

`

const Options = styled.div`
width:90vw;
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
margin-right: auto;
margin-left: auto;
margin-bottom: 50px;
${mobile({
   padding: "5px", flexDirection:"column"
})}


`

const BackButtom = styled.button`
 color: black;
    font-size: 28px;
    font-family: 'Assistant';
    border: none;
    font-weight: 400;
    border-radius: 5px;
    background-color: white;
    border:solid  #a0d3f8 1px; 
    cursor: pointer;
    margin-top:18px;
    margin-bottom: auto;
    &:hover {
   transform: scale(1.2);
 }

 &:active {
   background-color: #a0d3f8;
   transform: scale(1.4);
 }
 ${mobile({
   display:"none"
})}
`

const BuyButtom = styled.button`
 color: black;
    font-size: 45px;
    font-family: 'Assistant';
    border: none;
    font-weight: 400;
    border-radius: 5px;
    background-color: #def1ff;
    cursor: pointer;
    margin-top:18px;
    &:hover {
   transform: scale(1.2);
 }

 &:active {
   background-color: #a0d3f8;
   transform: scale(1.4);
 }
`


const Hr = styled.hr`
    background-color: #62daff55;
    border:none;
    height: 1px;
    height: ${props => props.type === "total" && "2px"};
    margin-top: ${props => props.type === "total" && "20px"};
`


const IconWrapper = styled.div`
    position: relative;
    display: flex;
    flex:3;
    align-items: center;
    justify-content:center;
    margin-top: 15px;
    margin-left: 30px;
    ${mobile({
   flexDirection:"column-reverse",flex:"1",marginBottom:"15px"
})} 
    /* display: none; */

`

const AmountContainer = styled.div`
   display: flex;
   justify-content: flex-end;
   margin-left:50px;
   ${laptop({
    marginLeft:"30px"
})} 
   ${tablet({
    marginLeft:"25px"
})} 
${mobile({
   marginLeft:"0px",placeContent: "center"
})} 
   
`

const IconAdd = styled(AddIcon)`
    
    &:hover {
   
    transform: scale(1.2);
  }

  &:active {
    background-color: #ffffff3d;
    color: #ffc107;
    transform: scale(1.5);
  }

`

const IconRemove = styled(RemoveIcon)`
    margin-left:5px;
    border-radius: 10%;
  &:hover {
    background-color: #ffffff3d;
    transform: scale(1.2);
  }
  &:active {
    background-color: #ffffff3d;
    color: #ffc107;
    transform: scale(1.5);
  }
`
const InputAmount = styled.input`
    width: 20%;
    font-size: 22px;
    text-align: center;
    margin: 0px 5px;
`

const Price = styled.div`
    color:#3e515f;
    font-size: 42px;
    font-family: fantasy;
    font-weight: 500;
    text-align-last: end;
    ${mobile({
  padding:"10px"
})} 

 
`


const PriceShakel = styled.span`
    font-size: 20px;
`
const PriceShakelTotal = styled.span`
    font-size: 20px;
    ${mobile({
   fontSize:"35px"
})}   
`
const PirceExtra = styled.span`
    font-size: 25px;
    font-family: 'Assistant';
`
const PriceExtraTotal = styled.span`
    font-size: 25px;
    font-family: 'Assistant';
`


const Cart = () => {


 
    const [openPay,setOpenPay]= useState(false);

    // This values are the props in the UI
    const amount = "2";
    const currency = "USD";
    const style = { "layout": "vertical" };

        const creatingOrder = async (data) =>{
            axiosInstance.post("/api/orders",data,{
                    headers: { "token": process.env.REACT_APP_TOKEN}

                    }).then(res=>{console.log(res)

                })

            .catch(error =>{
                console.log(error)
        })
    }
    // Custom component to wrap the PayPalButtons and handle currency changes
    const ButtonWrapper = ({ currency, showSpinner }) => {
        // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
        // This is the main reason to wrap the PayPalButtons in a new component
        const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

        useEffect(() => {
            dispatch({
                type: "resetOptions",
                value: {
                    ...options,
                    currency: currency,
                },
            });
        }, [currency, showSpinner]);


        return (<>
            {(showSpinner && isPending) && <div className="spinner" />}
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function (details) {
                        // Your code here after capture the order
                        const shipping = details.purchase_units[0].shipping;
                        console.log(details)
                        console.log(shipping.address.address_line_1)
                        console.log(details.purchase_units[0].amount.value)
                        creatingOrder({
                            userId:
                            "61d2df89a92c2eae43d21dd4",
                            products:[
                                {
                                    productId:"21ewds",
                                    quantity:2
                                },
                                  {
                                    productId:"25451ewds",
                                    quantity:1
                                }
                            ],
                            address: shipping.address.address_line_1,
                            amount: details.purchase_units[0].amount.value,
                            

                        });
                    });
                }}
            />
        </>
        );
    }


    return (
        <Container>
            <Navbar />
            <Advertisement />
            <Title>הסל שלך</Title>
            <Wrapper>
                <InfoCart>
                    <ProductDetail>
                        <Details>
                            <ProductName> <b>בשר בקר</b></ProductName>
                            <ProductBrand>מותג: <b>FoodNow</b></ProductBrand>
                            <ProductId>מק''ט -  <b>21321313</b></ProductId>
                            <ProductColor color="black" />
                        </Details>
                        <IconWrapper >
                            <AmountContainer>
                                <IconAdd fontSize='large' />
                                <InputAmount defaultValue="0" type="text" />
                                <IconRemove fontSize='large' />
                            </AmountContainer>
                            <Price><PriceShakel>₪</PriceShakel>100<PirceExtra>.90</PirceExtra></Price>

                        </IconWrapper>
                        <Image src='https://cdn.pixabay.com/photo/2016/11/10/16/29/beef-1814638_960_720.png' />
                    </ProductDetail>
                    <Hr />
                    <ProductDetail>
                        <Details>
                            <ProductName> <b>בשר בקר</b></ProductName>
                            <ProductBrand>מותג: <b>FoodNow</b></ProductBrand>
                            <ProductId>מק''ט -  <b>21321313</b></ProductId>
                            <ProductColor color="black" />
                        </Details>
                        <IconWrapper >
                            <AmountContainer>
                                <IconAdd fontSize='large' />
                                <InputAmount defaultValue="0" type="text" />
                                <IconRemove fontSize='large' />
                            </AmountContainer>
                            <Price><PriceShakel>₪</PriceShakel>100<PirceExtra></PirceExtra></Price>

                        </IconWrapper>
                        <Image src='https://cdn.pixabay.com/photo/2016/11/10/16/29/beef-1814638_960_720.png' />
                    </ProductDetail>
                    <Hr />
                    <ProductDetail>
                        <Details>
                            <ProductName> <b>  מעולה בשר בקר</b></ProductName>
                            <ProductBrand>מותג: <b>FoodNow</b></ProductBrand>
                            <ProductId>מק''ט -  <b>21321313</b></ProductId>
                            <ProductColor color="black" />
                        </Details>
                        <IconWrapper >
                            <AmountContainer>
                                <IconAdd fontSize='large' />
                                <InputAmount defaultValue="0" type="text" />
                                <IconRemove fontSize='large' />
                            </AmountContainer>
                            <Price><PriceShakel>₪</PriceShakel>1000<PirceExtra>.90</PirceExtra></Price>

                        </IconWrapper>
                        <Image src='https://cdn.pixabay.com/photo/2016/11/10/16/29/beef-1814638_960_720.png' />
                    </ProductDetail>

                </InfoCart>
                <Summery>
                    <SummeryTitle>סיכום ותשלום</SummeryTitle>
                    <SummeryItem>
                        <SummeryItemText>מוצרים:</SummeryItemText>
                        <SummeryPrice><PriceShakel>₪</PriceShakel>100<PirceExtra>.90</PirceExtra></SummeryPrice>
                    </SummeryItem>
                    <SummeryItem>
                        <SummeryItemText>משלוח:</SummeryItemText>
                        <SummeryPrice><PriceShakel>₪</PriceShakel>50<PirceExtra>.90</PirceExtra></SummeryPrice>
                    </SummeryItem>
                    <SummeryItem>
                        <SummeryItemText>הנחה:</SummeryItemText>
                        <SummeryPrice><PriceShakel>₪</PriceShakel>200<PirceExtra>.90</PirceExtra></SummeryPrice>
                    </SummeryItem>
                    <Hr type="total" />
                    <SummeryItemTotal type="total">
                        <SummeryItemTotalText type="total">סך הכל לתשלום:</SummeryItemTotalText>
                        <SummeryPriceTotal type="total"><PriceShakelTotal>₪</PriceShakelTotal>130<PriceExtraTotal>.90</PriceExtraTotal></SummeryPriceTotal>
                    </SummeryItemTotal>
                </Summery>


            </Wrapper>
            <Options>
                <BackButtom>יש לי עוד קניות</BackButtom>
                {openPay ? ( <PayPalScriptProvider
                    options={{
                        "client-id": process.env.REACT_APP_PAYPALID,
                        components: "buttons",
                        currency: "USD"
                    }}
                >
                    <ButtonWrapper
                        currency={currency}
                        showSpinner={false}
                    />
                </PayPalScriptProvider>) : (
                    <BuyButtom onClick={()=> setOpenPay(true)} >לתשלום</BuyButtom>
                )}
               
            </Options>

            <Footer />
        </Container>
    )
}

export default Cart
