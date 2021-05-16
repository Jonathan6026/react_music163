import React,{memo} from 'react'

//从localdata导入路由映射headerLinks
import {headerLinks} from "@/common/local-data"

import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight
} from "./style"

import { NavLink } from 'react-router-dom'

export default memo(function JLAppHeader(){
    //页面函数(1)展示顶部list
    const showSelectItem = (item,index) => {
        if (index < 3) {
            return(
                <NavLink exact to = {item.link} >
                    {item.title}
                    <i className="sprite_01 icon"></i>
                </NavLink>
            )
        }else{
            return(
                <a href={item.link} >
                    {item.title}
                </a>
            )
        }
    }


    //返回JSX
    return(
        <HeaderWrapper>
            <div className="content w1100">
                <HeaderLeft>
                    <a href="#/" className= "logo sprite_01"></a>
                    <div className="header-group">
                        {headerLinks.map((item,index)=>{
                            return(
                                <div key = {item.title} className="header-item">
                                    {showSelectItem(item,index)}
                                </div>
                            )
                        })}
                    </div>
                </HeaderLeft>
                <HeaderRight>右</HeaderRight>
            </div>
            <div className="divider">

            </div>
            {/* <NavLink to="/">发现</NavLink>
            <NavLink to="/mine">我的音乐</NavLink>
            <NavLink to="/friend">好友</NavLink> */}
        </HeaderWrapper>
    )
})