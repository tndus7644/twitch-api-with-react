import React from 'react';
import styled from 'styled-components';
import {GlobalStyle} from "../styled/Reset.Styled";
import Header from "./components/Header";
import Routes from "./routes/router";

const App = () => {

    return(
        <Container>
            <GlobalStyle/>
            <Header/>
            <Routes/>
        </Container>
    )
}

const Container = styled.div`

`;

export default App;