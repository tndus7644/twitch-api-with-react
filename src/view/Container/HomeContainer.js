import React,{useEffect} from 'react';
import styled from 'styled-components';
import CategoryList from "../components/Category/CategoryList";
import {GamesActions, videosActions} from "../../redux/ActionCreators";
import {useSelector} from "react-redux";
import LiveChannelList from "../components/LiveChannelList/LiveChannelList";
import LiveSlider from "../components/SlideLiveVideo/LiveSlider";

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
            {/*<LiveSlider LiveStreamsList={LiveStreamsList}/>*/}
            <LiveChannelList LiveStreamsList={LiveStreamsList}/>
            <CategoryList categoryList={categoryList}/>
        </Container>
    )
}

const Container = styled.div`
  padding-top: 80px;
  margin: 0 20px;
`;

export default HomeContainer;