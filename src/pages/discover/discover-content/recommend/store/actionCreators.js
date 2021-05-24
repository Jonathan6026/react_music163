import * as actionTypes from './constants'
import { getTopBanners } from '@/services/recommend'

// dispatch(getT)
const changeTopBannerAction = (res) => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.data.banners
})

export const getTopBannerAction= () => {
    return dispatch => {
        getTopBanners().then(res => {
            console.log(res)
            dispatch(changeTopBannerAction(res))
        })
    }
}