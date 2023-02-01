import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { navbarData } from "../../constants/navbar";

interface NavbarContainerProps {
  extendNavbar: Boolean;
}

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  const underlineStyle = 'underline'

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <HeaderTitle>DW</HeaderTitle>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            {
            navbarData.map(data => {
              return (
                <NavbarLink to={data.link} key={data.id}>{data.name}</NavbarLink>
              )
            })
          }
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          {
            navbarData.map(data => {
              return (
                <NavbarLinkExtended to={data.link} key={data.id}>{data.name}'s</NavbarLinkExtended>
              )
            })
          }
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav<NavbarContainerProps>`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? 'fit-content' : "80px")};
  background-color: #fff;
  box-shadow: 0 1px 6px 0 rgba(0,0,0, .3);
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  z-index: 1;

  .active {
    text-decoration: underline;
    transition: text-decoration 2s ease-in-out;
  }

  @media (min-width: 700px) {
    height: 80px;
  }
`;

const HeaderTitle = styled.h2`
  color: #000;
  font-size: ${(props) => props.theme.fontSize["2xl"]};
  height: 100%;
`;

const LeftContainer = styled.div`
  flex: 30%;
  padding-left: 15px;
`;

const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavbarInnerContainer = styled.div`
  width: 80%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin: 0 auto;

  @media only screen and (min-width: 700px){
    width: 61%;
    margin: 0 auto;
  }
`;

const NavbarLinkContainer = styled.div`
  display: flex;
  gap: 50px;
`;

const NavbarLink = styled(NavLink)`
  color: #000;
  font-size: ${props => props.theme.fontSize.lg};
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 700px) {
    display: none;
  }
`;

const NavbarLinkExtended = styled(NavLink)`
  color: #000;
  font-size: ${props => props.theme.fontSize.lg};
  margin: 10px;
`

const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: #000;
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`;

const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`;

export default Navbar;
