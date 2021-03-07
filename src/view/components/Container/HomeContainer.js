import React,{useEffect} from 'react';
import styled from 'styled-components';
import CategoryList from "../Category/CategoryList";
import {GamesActions, videosActions} from "../../../redux/ActionCreators";
import {useSelector} from "react-redux";
import LiveChannelList from "../LiveChannelList/LiveChannelList";
import LiveSlider from "../Slider/LiveSlider";

const HomeContainer = () => {

    const {categoryList} = useSelector(state => state.games)
    const {LiveStreamsList} = useSelector(state => state.videos);

    useEffect(() => {
        getGamesCategory();
        getLiveStreamsList();
    },[])

    const getGamesCategory = () => {
        GamesActions.getTopGames({
            first:10
        });
    }

    const getLiveStreamsList = () => {
        videosActions.getLiveStreamsList({
            first:5,
            language:'ko'
        })
    }


    return (
        <Container>
            <LiveSlider LiveStreamsList={LiveStreamsList}/>
            <LiveChannelList LiveStreamsList={LiveStreamsList}/>
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