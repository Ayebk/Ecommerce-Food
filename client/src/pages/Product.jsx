import React from 'react'
import Advertisement from '../components/Advertisement'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Footer from '../components/Footer'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile, laptop, tablet, desktop } from '../responsive'

const Container = styled.div`

`

const Wrapper = styled.div`
display: flex;
margin-bottom: 100px;
width: 90%;
    margin-right: auto;
    margin-left: auto;
 
    ${tablet({
    flexDirection: "column"
})} 

`


const ImgContainer = styled.div`
flex:1;
${desktop({
    flex: 0.5
})} 
`

const InfoContainer = styled.div`


flex:1;
padding: 10px;
${tablet({
    flex: 0.5
})} 

`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: scale-down;
`
const Title = styled.h1`
    padding: 10px;
    font-size: 50px;
`

const Desc = styled.p`
padding: 10px;
    font-size: 25px;
    ${mobile({
    fontSize: "19px"
})} 
`




const SmallDetails = styled.div`
padding: 10px;
font-size: 18px;
${mobile({
    fontSize: "16px"
})} 
`
const TitleDetails = styled.h2`
    
    font-size: 26px;
`
const InfoTable = styled.table`
    font-size: 20px;
    margin-top: 5px;
    ${mobile({
    fontSize: "16px"
})} 
`
const Disclaimer = styled.h4`
margin-top: 5px;

`
const OrderContainer = styled.div`
    display:flex;
    place-content: flex-end;

`
const AmountContainer = styled.div`
  position: relative;
    display: flex;
    align-items: center;
    justify-content:center;
    margin-top: 15px;
    width: 150px;
    padding: 0px 15px;
    
  
  

`


const ButtonOrder = styled.button`
    color: black;
    font-size: 28px;
    font-family: 'Assistant';
    border: none;
    font-weight: 400;
    border-radius: 5px;
    background-color: #def1ff;
    cursor: pointer;
    margin-top:18px;
    display: flex;
    border: 1px solid #a0d3f83b ;
    
    &:hover {
   transform: scale(1.2);
 }

 &:active {
   background-color: #a0d3f8;
   transform: scale(1.4);
 }
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
    width: 30%;
    font-size: 22px;
    text-align: center;
    margin: 0px 5px;
`

const PriceShakel = styled.span`
    font-size: 20px;
`
const PirceExtra = styled.span`
    font-size: 25px;
    font-family: 'Assistant';
`

const Price = styled.div`
    color:#3e515f;
    font-size: 60px;
    font-family: fantasy;
    font-weight: 500;
    text-align-last: end; 
    padding: 20px;
    margin-left: 30px;

 
`

const Product = () => {

    return (
        <Container>
            <Navbar />
            <Advertisement />
            <Wrapper>


                <InfoContainer>
                    <Title>בשר בקר</Title>
                    <Desc>
                        נתח מספר 13 - שייטל:
                        הידוע גם כ- כנף העוקץ.
                        <br />
                        מה מאפיין את הנתח?
                        נתח השייטל נמצא בשוק האחרוית של הבהמה בהמשך לסינטה, הנתח נחשב לנתח בעל אחוז שומן נמוך.
                        הנתח מאופיין בצורת מימייה גדולה, לנתח יש סיבים קצרים אשר מקנות לו טעם בשרי מאוד.

                        <br />

                    </Desc>
                    <SmallDetails>
                        <TitleDetails>נתונים</TitleDetails>
                        <InfoTable><tr>
                            <td>מותג/יצרן:</td>
                            <td>כללי</td>
                        </tr>
                            <tr>
                                <td>מידה/סוג:</td>
                                <td>קג</td>
                            </tr>
                            <tr>
                                <td>מק"ט:</td>
                                <td>4227128</td>
                            </tr>
                            <tr>
                                <td>ארץ ייצור:</td>
                                <td>צרפת</td>
                            </tr>
                        </InfoTable>
                        <Disclaimer>הנתונים המדויקים מופיעים על גבי המוצר.
                            התמונות והתאריכים המופיעים הינם להמחשה בלבד ואין להסתמך עליהם.</Disclaimer>
                    </SmallDetails>
                    <Price><PriceShakel>₪</PriceShakel>20<PirceExtra>.90</PirceExtra></Price>


                    <OrderContainer>
                        <ButtonOrder>הוסף לסל</ButtonOrder>
                        <AmountContainer>

                            <IconAdd fontSize='large' />
                            <InputAmount defaultValue="0" type="text" />
                            <IconRemove fontSize='large' />

                        </AmountContainer>

                    </OrderContainer>

                </InfoContainer>
                <ImgContainer>
                    <Image src="https://cdn.pixabay.com/photo/2016/11/10/16/29/beef-1814638_960_720.png" />
                </ImgContainer>
            </Wrapper>

            <Footer />
        </Container>
    )
}

export default Product
