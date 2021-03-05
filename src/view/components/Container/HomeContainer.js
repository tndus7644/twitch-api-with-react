import React,{useEffect} from 'react';
import styled from 'styled-components';
import CategoryList from "../Category/CategoryList";
import {GamesActions} from "../../../redux/ActionCreators";
import {useSelector} from "react-redux";

const HomeContainer = () => {

    const {categoryList} = useSelector(state => state.games)

    useEffect(() => {
        getGames();
    },[])

    const getGames = () => {
        GamesActions.getTopGames({
            first:10
        });
    }

    return (
        <Container>
            <CategoryList categoryList={categoryList}/>
        </Container>
    )
}

const Container = styled.div`
  padding-top: 80px;
  margin: 0 20px;
  width: 100%;
`;

export default HomeContainer;