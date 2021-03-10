import React, {useEffect} from 'react';
import styled from 'styled-components';
import {GlobalStyle} from "../styled/Reset.Styled";
import Header from "./components/Header";
import Routes from "./routes/router";
import SidebarContainer from "./Container/SidebarContainer";
import Template from "./components/template";

const App = () => {


    return (
        <Container>
            <GlobalStyle/>
            <Template>
                <Routes/>
            </Template>
        </Container>
    )
}

const Container = styled.div`
  padding-top: 55px;
`;

export default App;