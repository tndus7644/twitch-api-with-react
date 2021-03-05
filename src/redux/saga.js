import {all, call} from 'redux-saga/effects'

import streamSaga from './streams/saga'
import gamesSaga from './games/saga'

function* sagas() {
    yield all ([
        call(streamSaga),
        call(gamesSaga),
    ])
}

export default sagas;