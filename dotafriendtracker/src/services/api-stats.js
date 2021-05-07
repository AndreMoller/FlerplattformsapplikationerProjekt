import { http } from './httprequest'

const searchPlayer = name => http.get(`search?q=${name}`)

export const searchID = id => http.get(`players/${id}`)

export const searchWL = wl => http.get(`players/account_id/wl`)

export default searchPlayer