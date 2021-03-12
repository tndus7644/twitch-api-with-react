import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useLocation} from "react-router-dom";
import qs from 'qs';
import {searchActions} from "../../redux/ActionCreators";
import GridList from "../components/List/GridList";
import FeedItem from "../components/Feed/FeedItem";
import {useSelector} from "react-redux";

const SearchContainer = () => {

    const location = useLocation();
    const params = qs.parse(location.search, {ignoreQueryPrefix: true})

    const {channels} = useSelector(state => state.search);

    useEffect(() => {
        searchActions.searchChannels({
            query: params?.term,
        })
    }, [params?.term])


    const renderItem = (item) => <FeedItem {...item}/>

    return (
        <Container>
            <Title>채널</Title>
            <GridList data={channels.isLive}
                      renderItem={renderItem}
                      direction={'column'}
                      shape={"onLive"}
            />
            <GridList data={channels.isOff}
                      renderItem={renderItem}
                      direction={'column'}
                      shape={"offLive"}
            />
        </Container>
    )
}

const Container = styled.div`
  padding: 50px 30px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 30px;
`;

export default SearchContainer;