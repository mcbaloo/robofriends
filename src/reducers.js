import {CHANGE_SEARCHFIELD} from './constant.js';
const initailState = {
    searchfield: ''
}

export const searchRobots = (state=initailState, action={})=>{
    switch(action.type){
        case CHANGE_SEARCHFIELD:
        return Object.assign({}, state,{ searchfield: action.payload})
        default:
        return state;
    }
}