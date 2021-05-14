import React, { memo } from "react"
import {renderRoutes} from "react-router-config"

import routes from "./router"

import JLAppFooter from "@/components/app-footer"
import JLAppHeader from "@/components/app-header"
import {HashRouter} from "react-router-dom"


export default memo(function App(){
  return(
    <HashRouter>
      <JLAppHeader/>
      {renderRoutes(routes)}
      <JLAppFooter/>
    </HashRouter>
  )
})