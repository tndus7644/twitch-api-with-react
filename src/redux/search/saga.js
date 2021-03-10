import {all, takeLatest, call, put} from 'redux-saga/effects';
import {Action} from "./redux";
import {API} from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.SEARCH_CHANNELS, function* ({data}) {
            try {
                const result = yield call(API.searchChannels, data)
                console.log("[saga searchChannels]", result)
                if(result){
                    yield put(Action.Creators.updateState({
                        channels: result,
                    }))
                }
            } catch (e) {
                console.log("e", e)
            }
        }),
        takeLatest(Action.Types.SEARCH_CATEGORIES, function* ({data}) {
            try {
                const result = yield call(API.searchCategories, data)
                console.log("[saga searchCategories]", result)
                if(result){
                    yield put(Action.Creators.updateState({
                        categories: result
                    }))
                }
            } catch (e) {
                console.log("e", e)
            }
        }),
    ])
}

export default saga;