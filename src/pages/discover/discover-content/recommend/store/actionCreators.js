import * as actionTypes from './constants'
import { getTopBanners } from '@/services/recommend'

// dispatch(getT)


export const getTopBannerAction= () => {
    return dispatch => {
        getTopBanners().then(res => {
            console.log(res)
        })
    }
}