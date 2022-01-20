import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge, StyledEngineProvider } from '@mui/material';
import { red } from '@mui/material/colors';
import { mobile, laptop, tablet } from '../responsive'
import { Scale } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { logoutSuccess } from '../redux/actions/authActions';


const Container = styled.div`
    height: 80px;
    ${tablet({ height: "143px" })};

`

const Wrapper = styled.div`
    padding: 25px 10px 0px 10px;
    display: flex;
`

const Center = styled.div`
    display: flex;
    flex:1.5;
    -webkit-tap-highlight-color: transparent;

    
    
`
const SearchContainer = styled.div`
width: 80%;
`

const SearchContainerCenter = styled.div`
    display: flex;
    flex:4;
    margin-top: 5px;
    ${tablet({ display: "none" })};


`
const Left = styled.div`
    display: flex;
    flex:1;
    align-items: center;
    -webkit-tap-highlight-color: transparent;
    justify-content:end;
    

`


const Logo = styled.div`
    margin-right: 1%;
    margin-left: 2%;
    align-self: center;
    font-size: 40px;
    font-family: Pushster;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    ${mobile({ fontSize: "30px" })}
`

const MenuItem = styled.div`
    font-size: 20px;
    direction: rtl;
    margin: 20px;
    font-family: Assistant;
    cursor: pointer;
    
    min-width: 55px;
    min-width: ${props => props.type === "menu3" && "105px"};
    
    &:hover {
    background-color: #ffffff3d;
    transform: scale(1.1);
  }
  &:active {
    background-color: #ffffff3d;
    color: #ffc107;
    transform: scale(1.2);
  }

  ${laptop({  margin:"20px 10px" })};
  ${tablet({ display: "none" })};
  
`
const MenuItemHome = styled.div`
    font-size: 20px;
    direction: rtl;
    margin: 20px;
    font-family: Assistant;
    cursor: pointer;
    
    min-width: 55px;
    min-width: ${props => props.type === "menu3" && "105px"};
    
    &:hover {
    background-color: #ffffff3d;
    transform: scale(1.1);
  }
  &:active {
    background-color: #ffffff3d;
    color: #ffc107;
    transform: scale(1.2);
  }

  ${laptop({ display: "none" })};
 
  
`

const LoginButtons = styled.div`
    font-size: 20px;
    direction: rtl;
    margin: 20px;
    margin-left: ${props => props.type === "last" && "40px"};
  
    font-family: Assistant;
    cursor: pointer;
    &:hover {
    background-color: #ffffff3d;
    transform: scale(1.05);
  }
  &:active {
    background-color: #ffffff3d;
    color: #171b97;
    transform: scale(1.1);
  }
  ${laptop({ margin: "20px 20px 20px 10px" })};
  
`

const RegisterButtons = styled.div`
    font-size: 20px;
    direction: rtl;
    margin: 20px;
    margin-left: ${props => props.type === "last" && "40px"};
  
    font-family: Assistant;
    cursor: pointer;
    &:hover {
    background-color: #ffffff3d;
    transform: scale(1.05);
  }
  &:active {
    background-color: #ffffff3d;
    color: #171b97;
    transform: scale(1.1);
  }
  ${laptop({ margin: "20px" })};
  ${mobile({ display: "none" })}
`

const IconCart = styled(ShoppingCartOutlinedIcon)`
    cursor: pointer;
    margin-left: 30px;
    -webkit-tap-highlight-color: transparent;

    &:hover {
    background-color: #ffffff3d;
    transform: scale(1.2);
  }
  &:active {
    background-color: #ffffff3d;
    color: #ffc107;
    transform: scale(1.4);
  }


`



const SearchInput = styled.input`
   
   border: none;
   box-shadow: 0px 0px 3px #014783;
    height: 36px;
    font-weight: 400;
    font-size: 29px;
    width: 95%;
    margin-top: 7px;
    margin-right: 7px;
    &:hover {
    
    box-shadow: 0px 0px 4px #014783;
  }
 
  &:focus {
   
    
    color: #ffc107;
   
        
  }
  ${mobile({ marginRight: "10px" })}

`

const SearchIconContainer = styled.div`
  display: none;
    cursor: pointer;
    font-size: 33px;
    color: #ffffff;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    margin-right: 15px;
    width: 44px;
    background-color: #0a98ff;
    height: 42px;
    text-align: center;
    border: solid;
    border-radius: 50%;
    -webkit-tap-highlight-color: transparent;

    &:active {
        transform: scale(1.1);

  }
  ${laptop({ display: "block", margin: "0px 15px 5px 0px" })};
`
const MoreIconContainer = styled.div`
display: none;
cursor: pointer;

font-size: 30px;

    display: none;
    cursor: pointer;
    margin-top: 3px;
    font-size: 32px;
    color: #ffffff;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    margin-right: 9px;
    width: 44px;
    background-color: #0a98ff;
    height: 42px;
    text-align: center;
    border: solid;
    border-radius: 50%;
    -webkit-tap-highlight-color: transparent;

    &:active {
    transform: scale(1.1);
    }
  ${tablet({ display: "block", marginBottom: "5px" })};
  ${mobile({ marginRight: "8px" })};

`

const AccountIcon = styled.div`

    cursor: pointer;
    font-size: 30px;
    color: #44b1ff;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    margin-right: 10px;
    margin-left: 30px;
    width: 38px;
    height: 37px;
    text-align: center;
    border: solid;
    border-radius: 50%;
    -webkit-tap-highlight-color: transparent;
    
    &:hover {
    background-color: #ffffff3d;
    transform: scale(1.2);
  }
  &:active {
    background-color: #ffffff3d;
    color: #ffc107;
    transform: scale(1.4);
  }

`

const Responsive = styled.div`
display: none;
width: 100%;
${tablet({ display: "flex", marginBottom: "5px" })};

`

const Navbar = () => {

    const loggedUser = useSelector((state) => state.auth.username);

    const dispatch = useDispatch();

     const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logoutSuccess());
        
      };




    const navigate = useNavigate();

    function navHome() {
        if (window.location.pathname === "/") {
            window.location.reload();
        } else {
            navigate("/");
        }

    }

    function navProducts() {
        if (window.location.pathname === "/products") {
            window.location.reload();
        } else {
            navigate("/products");
        }

    }


    function navStores() {
        if (window.location.pathname === "/") {
            window.location.reload();
        } else {
            navigate("/");
        }

    }

    function navLogin() {
        if (window.location.pathname === "/login") {
            window.location.reload();
        } else {
            navigate("/login");
        }

    }

    function navRegister() {
        if (window.location.pathname === "/register") {
            window.location.reload();
        } else {
            navigate("/register");
        }

    }

    return (




        <Container>
            <Wrapper>



                <Center>

                    <Logo onClick={navHome}>
                        FoodNow
                    </Logo>


                    <MenuItemHome  onClick={navHome}  >
                        דף בית
                    </MenuItemHome>

                    <MenuItem type='menu2' onClick={navProducts}>
                        מוצרים
                    </MenuItem>

                    <MenuItem type='menu3' onClick={navStores}>
                        רשתות וחנויות
                    </MenuItem>




                </Center>
               
                <SearchContainerCenter>
                    <SearchInput placeholder="חיפוש..." />


                </SearchContainerCenter>

                <Left >

                    {loggedUser ?
                        <>
                            <AccountIcon onClick={handleLogout}>
                                <AccountBoxIcon />
                            </AccountIcon>
                            <Badge badgeContent={4} color="primary">
                                <IconCart color="action" fontSize="large" />
                            </Badge>


                        </>

                        :
                        <>
                            <LoginButtons onClick={navLogin}>
                                התחבר
                            </LoginButtons>

                            <RegisterButtons type="last" onClick={navRegister}>
                                הרשמה
                            </RegisterButtons>
                        </>
                    }


                </Left>
            </Wrapper>
            <Responsive>
                <MoreIconContainer >
                    <ReadMoreIcon />
                </MoreIconContainer>

                <SearchContainer>
                    <SearchInput placeholder="חיפוש..." />


                </SearchContainer>
            </Responsive>
        </Container>

    )
}

export default Navbar
