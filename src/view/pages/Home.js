import React from 'react';
import styled from 'styled-components';
import Sidebar from "../components/Sidebar";
import HomeContainer from "../components/Container/HomeContainer";
import {ContentContainer} from "../../styled/Container.Styled";

const Home = () => {

    return (
        <Container>
            <Sidebar/>
            <HomeContainer/>
        </Container>
    )
}

const Container = styled(ContentContainer)`
`;

export default Home;