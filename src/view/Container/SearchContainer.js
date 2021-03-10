import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useLocation} from "react-router-dom";
import qs from 'querystring';
import {searchActions} from "../../redux/ActionCreators";
import GridList from "../components/List/GridList";
import FeedItem from "../components/Feed/FeedItem";
import {useSelector} from "react-redux";

const SearchContainer = () => {

    const location = useLocation();
    const params = qs.parse(location.search, {ignoreQueryPrefix:true})

    console.log("params", params)

    const {channels} = useSelector(state => state.search);

    useEffect(() => {
        searchChannels();
    },[])

    const searchChannels = () => {
        searchActions.searchChannels({
            query: params
        })
    }

    const renderItem = (item) => <FeedItem {...item}/>

    return(
        <Container>
            <GridList data={channels.data}
                      renderItem={renderItem}
                      direction={'column'}
            />
        </Container>
    )
}

const Container = styled.div`
    flex: 1;

`;

export default SearchContainer;