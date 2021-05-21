import React,{memo} from 'react'

import {dicoverMenu} from "@/common/local-data"
import {
    DiscoverItem,DiscoverList,DiscoverWrapper
} from './style'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

export default memo(function JLDiscover(props) {
    const {route} = props

    return(
        <DiscoverWrapper>
            <DiscoverList className="w1100">
                {
                    dicoverMenu.map((item,index)=> {
                        return(
                            <div key={item.title} className="item">
                                <NavLink className="a" to={item.link}>{item.title}</NavLink>
                            </div>
                        )
                    })
                }
            </DiscoverList>
            {renderRoutes(route.routes)}
        </DiscoverWrapper>
  
    )
})