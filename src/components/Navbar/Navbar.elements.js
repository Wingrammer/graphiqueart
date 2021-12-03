import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { colors } from '../../assets';

import { Container } from '../../globalStyles'

export const Nav = styled.nav`
background: ${colors.black};
opacity:0.7;
height: 70vh;
display: flex; 
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: fixed;
top: 10vh;
z-index: 999;
`;

export const NavbarContainer = styled(Container)`
display: flex; 
justify-content: space-between;

  ${Container}
`;
















export const MobileIcon = styled.div`

    display: block;
    position: fixed;
    background-color: ${colors.black};
    height:100px;
    width:100px;
    border-radius:50%;
    top: 0;
    right: 95vw;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index:999

`;/*
export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
}
`;*/

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
flex-direction: column;

@media screen and (max-width: 960px) {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  position: absolute;
  top: 80px;
  left: ${({click}) => (click ? 0 : '-100%')};
  opacity: 1;
  transition: all 0.5s ease;
  background: #18171E;
}
`;

export const NavItem = styled.li`
height: 60px;
border-bottom: 2px solid transparent;
&:hover {
  border-bottom: 3px solid #FBB300;
}

@media screen and (max-width: 960px) {
  width: 100%;

  &:hover {
    border: none;
  }
}
`;
export const NavLinks = styled(Link)`
color: ${colors.white};
display: flex;
align-items: center;
text-decoration: none; 
padding: 0.5rem 1rem;
height: 100%;

@media screen and (max-width: 960px) {
  text-align: center;
  padding: 2rem;
  width: 100%;
  display: table;

&::hover{
  color: #FBB300;
  transition: all 0.3s ease;
}
}
`;

export const NavItemBtn = styled.li`
@media screen and (max-width: 960px) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
}
`;

export const NavBtnLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
padding: 8px 16px;
height: 100%;
width: 100%;
border: none; 
outline: none;
`;

 