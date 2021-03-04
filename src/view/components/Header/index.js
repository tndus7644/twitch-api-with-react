import React from 'react';
import styled from 'styled-components';
import {DotSvg, TwitchLogoSvg} from "../svg";
import SearchBox from "../SearchBox";
import MemberArea from "../MemberArea";
import {useHistory} from "react-router";
import {GlobalButton} from "../../../styled/Button.Styled";

const Header = () => {

    const history = useHistory();

    const navigate = (url) => {
        history.push(url)
    }


    return (
        <Container>
            <Gnb>
                <Logo onClick={() => navigate('/')}>
                    <TwitchLogoSvg/>
                </Logo>
                <Nav>
                    <NavItem>탐색</NavItem>
                    <NavItem>e스포츠</NavItem>
                    <NavItem>음악</NavItem>
                    <NavItem><DotSvg/></NavItem>
                </Nav>
            </Gnb>
            <SearchBox/>
            <MemberArea/>
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 55px;
  border-bottom: 1px solid #ddd;
  background: #fff;
`;

const Logo = styled.div`
  cursor: pointer;
  svg {
    fill: #9047ff;
  }
`;

const Gnb = styled.div`
  display: flex;
  align-items: center;
`;

const Nav = styled.div`
  display: flex;
  margin-left: 20px;
`;

const NavItem = styled(GlobalButton)`
  margin: 0 15px;
  cursor: pointer;
  font-weight: 600;
  font-size: 17px;
  
  &:hover{
    color: #9047ff;
  }
`;

export default Header;