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
