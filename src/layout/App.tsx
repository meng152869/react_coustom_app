/*
 * @Author: meng xiang cheng 3257833780@qq.com
 * @Date: 2023-08-01 15:55:07
 * @LastEditors: meng xiang cheng 3257833780@qq.com
 * @LastEditTime: 2023-08-05 14:30:37
 * @FilePath: \myReactApp\src\layout\App.tsx
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
// 
// const RootStoreContext = createContext(rootStore);


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
        <Count></Count>
        <TodoList></TodoList>
      </Wrapper>
    </RootStoreProvider>
  )
}
const Wrapper = styled.div`
    .list_wrap{
      width: 500px;
      height: 300px;
      background-color: #f0f0f0;
    }
`
export default App
