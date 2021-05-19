import React,{memo} from 'react'

import {dicoverMenu} from "@/common/local-data"
import {
    DiscoverItem,DiscoverList,DiscoverWrapper
} from './style'
import { NavLink } from 'react-router-dom'
export default memo(function JLDiscover() {
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
        </DiscoverWrapper>
    //     <DiscoverList>
    //     <div className="top">
    //         <DiscoverItem className="w1100">
    //             {
    //                 dicoverMenu.map((item,index)=> {
    //                     return(
    //                         <div className="item" key={item.title}>
    //                             <NavLink to={item.link}>{item.title}</NavLink>
    //                         </div>
    //                     )
    //                 })
    //             }
    //         </DiscoverItem>
    //     </div>     
    // </DiscoverList>    
        
    )
})