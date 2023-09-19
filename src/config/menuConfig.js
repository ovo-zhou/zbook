/**
 * 这里的菜单配置会生成react-router-dom的路由和Footer里面的菜单
 */
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import Proxy from "../pages/Proxy"
import whistleIcon from "../assets/icon/whistle.png"
// menuConfig用来渲染菜单
export const menuConfig = [
    {
        name: "whistle",
        path: "/proxy",
        icon: whistleIcon,
        component: Proxy
    }
]
// routesConfig用来渲染路由,主要多了菜单不用首页和404页面
export const routesConfig = menuConfig.concat([
    {
        name: "首页",
        path: "/",
        component: Home
    },
    {
        name: "404",
        path: "*",
        component: NotFound
    }
])