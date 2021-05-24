import * as actionTypes from './constants'


const defaultState = {
    topBanners:[]
}

//根据State更新action
function reducer(state = defaultState,action) {
    switch(action.type) {
        case actionTypes.CHANGE_TOP_BANNERS:
            return {...state,topBanners: action.topBanners}
        default:
            return state
    }
}

export default reducer