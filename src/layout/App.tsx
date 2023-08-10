/*
 * @Author: meng xiang cheng 3257833780@qq.com
 * @Date: 2023-08-01 15:55:07
 * @LastEditors: meng xiang cheng 3257833780@qq.com
 * @LastEditTime: 2023-08-09 15:07:34
 * @FilePath: \react_coustom_app\src\layout\App.tsx
 * @Description: 
 */
import { useState, useEffect, createContext, useContext } from 'react'
// 
import Count from '@src/components/count'
import TodoList from '@src/components/todoList';
// import CountStore from '@src/store/count'
// const countstore = new CountStore();
// import RootStore from "@src/store/root";
// const rootStore = new RootStore();
// 
import './App.less'
import { getIndexList } from "@src/api/index";
import styled from "styled-components";
import { observer } from "mobx-react"
import { RootStoreProvider } from "@src/context/rootContext"
import { useRoutes } from 'react-router-dom';
import { Routes } from "@src/router/index"
function BaseRouter() {
  const baseRouter = useRoutes(Routes);
  useEffect(()=>{

  },[])
  return baseRouter;
}
function App() {
  const [count, setCount] = useState(0);
  const [pageNum, setpageNum] = useState<number>(1);
  useEffect(() => {
    getIndexList().then((res) => {
      console.log(res)
    })
  }, [pageNum])
  useEffect(() => {

  }, [])
  return (
    <RootStoreProvider>
      <Wrapper>
        <BaseRouter></BaseRouter>
      </Wrapper>
    </RootStoreProvider>
  )
}
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`
export default App
