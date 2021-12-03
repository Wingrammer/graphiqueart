import React, {useState, useEffect} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { Nav, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink } from './Navbar.elements';

export const Navbar = () => {

const [click, setClick] = useState(false);
const [button, setButton] = useState(true);

const handleclick = () => setClick(!click);

const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false);
    } else {
        setButton(true);
    }
};


useEffect(() => {
    showButton();
}, []);


window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
        
        <MobileIcon  onClick={handleclick}>
            {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        
        <Nav>
            <img alt="graphiqueart" className="brand" width={40} src='/image/graphique-art-logo.svg' />
            <NavbarContainer> 
             <NavMenu onClick={handleclick} click={click}>

                 <NavItem>
                     <NavLinks to='/'>Acceuil</NavLinks>
                 </NavItem>

                 <NavItem>
                     <NavLinks to='/portfolio'>Portfolio</NavLinks>
                 </NavItem>

                 <NavItem>
                     <NavLinks to='/CV design'>CV design</NavLinks>
                 </NavItem>

                 <NavItem>
                     <NavLinks to='/Mode-Market'>Mode Market</NavLinks>
                     </NavItem>

                <NavItem>
                    <NavLinks to='/Mode-Market'>eMusic</NavLinks>
                </NavItem>

                     <NavItem>
                     <NavLinks to='/Art-Market'>Art Market</NavLinks>
                 </NavItem>

                 <NavItem>
                     <NavLinks to='/Galérie image'>Galérie image</NavLinks>
                 </NavItem>

                 <NavItem>
                     <NavLinks to='/Template'>Template</NavLinks>
                 </NavItem>

                 <NavItemBtn>
                     {button ? (
                    <NavBtnLink to="/se-connecter">
                        <Button fontBig primary>
                         SE CONNECTER
                        </Button>
                    </NavBtnLink>
                     ) : (
                         <NavBtnLink to="/se-connecter">
                         <Button fontBig primary>
                         SE CONNECTER
                         </Button>
                         </NavBtnLink>  
                     )}
                 </NavItemBtn>
             </NavMenu>
             </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
};

export default Navbar
