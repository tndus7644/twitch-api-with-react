import {FetchJson} from "../lib/fetch";

export const API = {
    getLiveStreams: (data) => FetchJson.get('/helix/streams', data),
    getTopGames: (data) => FetchJson.get('/helix/games/top', data),
}
