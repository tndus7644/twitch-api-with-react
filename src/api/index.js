import {FetchJson} from "../lib/fetch";

export const API = {
    getTopGames: (data) => FetchJson.get('/games/top', data),
    getLiveStreams: (data) => FetchJson.get('/streams', data),
    getStreamChannel: (data) => FetchJson.get('/channels', data),
}
