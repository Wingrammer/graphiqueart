import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 12px,'SF Pro Display',sans-serif;
}
`;

export const Container = styled.div`
z-index: 1;
width: 100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
padding-right: 22px;
padding-left: 22px;


@media screen and (max-width: 991px) {
    padding-right: 30px;
padding-left: 30px;
}
`;

export const Button = styled.button`
border-radius: 20px;
background: ${({primary}) => (primary ? '#fbb300' : '#fbb300')};
white-space: nowrap;
padding: ${({big}) => (big ? '12px 64px' : '10px 20px' )};
color: #fff;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;

&:hover {
    transition: all 0.3s ease-out ;
    background: #fbb300;
    background: ${({primary}) => (primary ? '#18171E' : '#fbb300')};
};

@media screen and (max-width: 690px) {
    width: 100%;
}
`;


export default GlobalStyle
