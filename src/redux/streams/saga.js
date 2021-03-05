import {all, takeLatest, call, put} from 'redux-saga/effects';
import {Action} from "./redux";
import {API} from "../../api";

const saga = function* (){
    yield all([
        takeLatest(Action.Types.GET_LIVE_STREAMS, function* ({data}){
            try{
                const result = yield call(API.getLiveStreams, data)
                console.log("[saga getLiveStreams]", result)
                if(result){
                    yield put(Action.Creators.updateState({
                        LiveStreamsList: result
                    }))
                }
            }catch (e){
                console.log("e", e)
            }
        })
    ])
}

export default saga;