/*
 * @Author: meng xiang cheng 3257833780@qq.com
 * @Date: 2023-08-05 17:34:13
 * @LastEditors: meng xiang cheng 3257833780@qq.com
 * @LastEditTime: 2023-08-09 14:39:25
 * @FilePath: \react_coustom_app\src\router\index.tsx
 * @Description: 
 */
import LoginPage from "@src/layout/login";
import NoFound from "@src/layout/nofound";
import BaseRoot from "@src/layout/base";
import Indexpage from "@src/pages/index";
import { useRoutes,RouteObject } from "react-router-dom";


// 懒加载
import {lazy} from "react"
const Home = lazy(()=>import("@src/pages/index"));

export const ChildRoute:RouteObject[] | undefined =[{
    path:"/home",
    element: <Home></Home>
}]
export const Routes:RouteObject[] = [{
    path:"/",
    element:<BaseRoot/>,
    children:ChildRoute
},{
    path:"/login",
    element:<LoginPage/>
},{
    path:"*",
    element:<NoFound/>
}]
