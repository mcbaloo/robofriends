import {CHANGE_SEARCHFIELD} from './constant.js'
export const setSearchfield = (text)=> ({
    type: CHANGE_SEARCHFIELD,
    payload: text
})