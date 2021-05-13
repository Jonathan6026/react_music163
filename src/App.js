import React, { memo } from "react"
import JLAppFooter from "@/components/app-footer"
import JLAppHeader from "@/components/app-header"


export default memo(function(App){
  return(
    <div>
      <JLAppHeader/>
      <h2>content</h2>
      <JLAppFooter/>
    </div>
    
  )
})