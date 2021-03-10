import {createActions, createReducer} from 'reduxsauce';

const initialState = {
    channels:{
        data:[],
        pagination:{}
    },
    categories:{
        data:[],
        pagination: {}
    }
}

export const Action = createActions({
    updateState: ['props'],
    searchChannels:['data'],
    setChannels:['data'],
    searchCategories:['data'],
    setCategories:['data'],
}, {
    prefix: 'CHANNELS/'
});

export default createReducer(initialState, {
    [Action.Types.UPDATE_STATE]: (state, {props}) => ({
        ...state,
        ...props
    }),
    [Action.Types.SET_CHANNELS]: (state, {data}) => ({
        ...state,
        results: data
    })
});