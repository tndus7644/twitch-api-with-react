import {combineReducers} from 'redux';

import gamesReducer from './games/redux';
import videosReducer from './videos/redux';

const reducers = combineReducers({
    games:gamesReducer,
    videos:videosReducer,
});

export default reducers;