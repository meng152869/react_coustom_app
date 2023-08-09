/*
 * @Author: meng xiang cheng 3257833780@qq.com
 * @Date: 2023-08-05 17:34:13
 * @LastEditors: meng xiang cheng 3257833780@qq.com
 * @LastEditTime: 2023-08-07 17:34:39
 * @FilePath: \react_coustom_app\src\main.tsx
 * @Description: 
 */
import React,{useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import App from '@src/layout/App.tsx'
import {
  BrowserRouter,
  HashRouter
} from "react-router-dom";
import {
  ThemeProvider
} from "styled-components"
import './index.css'
import {
  theme
} from "./theme";
import {
  initMockData
} from "@src/mock"
// 测试环境下使用mockdata
import "swiper/css";
import 'swiper/css/pagination';
if(isDev){
  initMockData();
}
const RouterType = isDev ? BrowserRouter : HashRouter;
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterType>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
    </RouterType>
  </React.StrictMode>,
)
