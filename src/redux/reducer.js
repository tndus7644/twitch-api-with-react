import {combineReducers} from 'redux';

import streamReducer from './streams/redux';
import gameReducer from './games/redux';

const reducers = combineReducers({
    stream:streamReducer,
    game:gameReducer,
});

export default reducers;