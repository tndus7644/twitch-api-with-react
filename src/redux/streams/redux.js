import {createActions, createReducer} from 'reduxsauce';

const initialState = {
    LiveStreamsList: {}
}

export const Action = createActions({
    updateState: ['props'],
    getLiveStreams: ['data']
}, {
    prefix: 'STREAM/'
});

export default createReducer(initialState, {
    [Action.Types.UPDATE_STATE]: (state, {props}) => ({
        ...state,
        ...props
    })
});