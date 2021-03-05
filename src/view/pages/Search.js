import React from 'react';
import styled from 'styled-components';
import SearchContainer from "../components/Container/SearchContainer";
import {ContentContainer} from "../../styled/Container.Styled";
import SidebarContainer from "../components/Container/SidebarContainer";

const Search = () => {

    return(
        <Container>
            <SidebarContainer/>
            <SearchContainer/>
        </Container>
    )
}

const Container = styled(ContentContainer)`

`;

export default Search;