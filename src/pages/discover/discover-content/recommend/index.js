import React, { memo , useEffect } from 'react'
import {connect, useDispatch, useSelector} from 'react-redux'

import {getTopBannerAction} from "./store/actionCreators"

function JLRecommend(props){

    //组件和redux关联
    const {topBanners} = useSelector(state => ({
        topBanners: state.recommend.topBanners
    }))
    const dispatch = useDispatch()

    //发送网络请求 需要重新渲染才放进依赖
    useEffect(() => {
        dispatch(getTopBannerAction())
    },[dispatch])

    return(
        <div>
            <h2>JLRecommend:{topBanners.length}</h2>
        </div>
    )
}

//without connect
export default memo(JLRecommend)







// function JLRecommend(props){

//     const {getBanners,topBanners} = props

//     useEffect(() => {
//         getBanners()
//     },[getBanners])

//     return(
//         <div>
//             <h2>JLRecommend:{topBanners.length}</h2>
//         </div>
//     )
// }

// use connect
// const mapStateToProps = state => ({
//     topBanners: state.recommend.topBanners
// })
// const mapDispatchToProps = dispatch => ({
//     getBanners: ()=>{
//         dispatch(getTopBannerAction())
//     }
// })
// export default connect(mapStateToProps,mapDispatchToProps)(memo(JLRecommend))