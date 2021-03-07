import {createActions, createReducer} from 'reduxsauce';

const initialState = {
    LiveStreamsList: {
        data: []
    },
    LiveStreamChannel: {
        data: []
    }
}

export const Action = createActions({
    updateState: ['props'],
    getLiveStreamsList: ['data'],
    getLiveStreamChannel: ['data']
}, {
    prefix: 'STREAM/'
});

export default createReducer(initialState, {
    [Action.Types.UPDATE_STATE]: (state, {props}) => ({
        ...state,
        ...props
    })
});