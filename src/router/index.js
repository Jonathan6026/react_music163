import JLDiscover from "@/pages/discover"
import JLFriend from "@/pages/friend"
import JLMine from "@/pages/mine"

const routes = [
    {
        path:"/",
        // 不加有可能后续路由辨识错误
        exact:true,   
        component:JLDiscover
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