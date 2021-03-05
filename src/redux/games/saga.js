import {all, takeLatest, call, put} from 'redux-saga/effects';
import {Action} from "./redux";
import {API} from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.GET_TOP_GAMES, function* ({data}) {
            try {
                const result = yield call(API.getTopGames, data)
                console.log("result", result)
                yield put(Action.Creators.updateState({
                    categoryList: result?.data
                }))
            } catch (e) {
                console.log("e", e)
            }
        })
    ])
}

export default saga;