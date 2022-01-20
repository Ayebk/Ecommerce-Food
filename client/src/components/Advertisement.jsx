import React from 'react'
import styled from 'styled-components'
import { mobile,laptop,tablet } from '../responsive'

const Container = styled.div`
    height: 35px;
    background-color: #ff5050b9;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 21px;
    font-family: sans-serif;
    margin-top: 10px;
    ${tablet({fontSize: "18px",margin:"auto",padding:"5px" })};
    ${mobile({height: "50px", fontSize: "18px",margin:"auto",padding:"5px" })};

`


const Advertisement = () => {
    return (
        <Container>
              חגיגת פתיחה - 5% הנחה למשתמשים רשומים.מהרו להירשם !
        </Container>
    )
}

export default Advertisement
