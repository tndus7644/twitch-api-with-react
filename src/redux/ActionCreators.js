import {bindActionCreators} from "redux";
import store from './store';

import {Action as StreamAction} from './streams/redux'
import {Action as GamesAction} from './games/redux'

const {dispatch} = store;

export const StreamActions = bindActionCreators(StreamAction.Creators, dispatch);
export const GamesActions = bindActionCreators(GamesAction.Creators, dispatch);