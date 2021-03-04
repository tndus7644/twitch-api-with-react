import React from 'react';
import styled from 'styled-components';
import Sidebar from "../components/Sidebar";
import SearchContainer from "../components/Container/SearchContainer";
import {ContentContainer} from "../../styled/Container.Styled";

const Search = () => {

    return(
        <Container>
            <Sidebar/>
            <SearchContainer/>
        </Container>
    )
}

const Container = styled(ContentContainer)`

`;

export default Search;