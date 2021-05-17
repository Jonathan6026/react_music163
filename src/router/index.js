import React from 'react'

import JLDiscover from "@/pages/discover"
import JLFriend from "@/pages/friend"
import JLMine from "@/pages/mine"
import { Redirect } from "react-router"

const routes = [
    {
        path:"/",
        // 不加有可能后续路由辨识错误
        exact:true,   
        // component:JLDiscover
        render:() => {
            return(
                <Redirect to="/discover"></Redirect>   //重定向
            )
        }
    },
    {
        path:"/mine",
        component:JLMine
    },
    {
        path:"/friend",
        component:JLFriend
    }
]

export default routes