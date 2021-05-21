import React from 'react'

import JLDiscover from "@/pages/discover"
import JLNewAlbum from "@/pages/discover/discover-content/new-album"
import JLPlaylist from "@/pages/discover/discover-content/playlist"
import JLRadio from "@/pages/discover/discover-content/radio"
import JLRank from "@/pages/discover/discover-content/rank"
import JLRecommend from "@/pages/discover/discover-content/recommend"
import JLArtist from "@/pages/discover/discover-content/artist"

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
        path:"/discover",
        component:JLDiscover,
        routes:[
            {
                path:"/discover",
                exact: true,
                render: ()=> {
                    <Redirect to="/discover/recommend"/>
                }
            },
            {
                path:"/discover/recommend",
                component:JLRecommend
            },
            {
                path:"/discover/ranking",
                component:JLRank
            },{
                path:"/discover/radio",
                component:JLRadio
            },
            {
                path:"/discover/artist",
                component:JLArtist
            },
            {
                path:"/discover/new-album",
                component:JLNewAlbum
            },
            {
                path:"/discover/playlist",
                component:JLPlaylist
            }
        ]
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