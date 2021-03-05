import React,{useEffect} from 'react';
import styled from 'styled-components';
import CategoryList from "../Category/CategoryList";
import {GamesActions} from "../../../redux/ActionCreators";

const HomeContainer = () => {

    useEffect(() => {
        getGames();
    },[])

    const getGames = () => {
        GamesActions.getTopGames();
    }

    return (
        <Container>
            <CategoryList/>
        </Container>
    )
}

const Container = styled.div`
  padding-top: 80px;
`;

export default HomeContainer;