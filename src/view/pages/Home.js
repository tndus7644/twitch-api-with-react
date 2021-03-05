import React from 'react';
import styled from 'styled-components';
import HomeContainer from "../components/Container/HomeContainer";
import {ContentContainer} from "../../styled/Container.Styled";
import SidebarContainer from "../components/Container/SidebarContainer";

const Home = () => {

    return (
        <Container>
            <SidebarContainer/>
            <HomeContainer/>
        </Container>
    )
}

const Container = styled(ContentContainer)`
`;

export default Home;