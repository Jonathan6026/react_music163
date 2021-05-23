import React, { memo } from "react"
import {renderRoutes} from "react-router-config"

import routes from "./router"

//导入store和provider，让provider共享store
import { provider } from "react-redux"
import  store from './store'

import JLAppFooter from "@/components/app-footer"
import JLAppHeader from "@/components/app-header"
import {HashRouter} from "react-router-dom"


export default memo(function App(){
  return(
    <provider store={store}>
      <HashRouter>
        <JLAppHeader/>
        {renderRoutes(routes)}
        <JLAppFooter/>
      </HashRouter>
    </provider>
    
  )
})