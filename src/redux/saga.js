import {all, call} from 'redux-saga/effects'

import gamesSaga from './games/saga'
import videosSaga from './videos/saga'

function* sagas() {
    yield all ([
        call(gamesSaga),
        call(videosSaga),
    ])
}

export default sagas;