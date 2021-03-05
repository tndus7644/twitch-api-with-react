import {combineReducers} from 'redux';

import streamReducer from './streams/redux';
import gamesReducer from './games/redux';

const reducers = combineReducers({
    stream:streamReducer,
    games:gamesReducer,
});

export default reducers;