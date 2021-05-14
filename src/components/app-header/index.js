import React,{memo} from 'react'
import { NavLink } from 'react-router-dom'

export default memo(function JLAppHeader(){
    return(
        <div>
            <NavLink to="/">发现</NavLink>
            <NavLink to="/mine">我的音乐</NavLink>
            <NavLink to="/friend">好友</NavLink>
        </div>
    )
})