import React, { memo } from "react"
import {renderRoutes} from "react-router-config"

import routes from "./router"

//导入store和provider，让provider共享store

import  store from './store'

import JLAppFooter from "@/components/app-footer"
import JLAppHeader from "@/components/app-header"
import {HashRouter} from "react-router-dom"
import { Provider } from "react-redux"


export default memo(function App(){
  return(
    <Provider store={store}>
      <HashRouter>
        <JLAppHeader/>
        {renderRoutes(routes)}
        <JLAppFooter/>
      </HashRouter>
    </Provider>
    
  )
})