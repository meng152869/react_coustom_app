/*
 * @Author: meng xiang cheng 3257833780@qq.com
 * @Date: 2023-08-05 10:11:55
 * @LastEditors: meng xiang cheng 3257833780@qq.com
 * @LastEditTime: 2023-08-05 13:08:54
 * @FilePath: \myReactApp\src\components\count\index.tsx
 * @Description: 
 */
import * as React from 'react';
import { useState, useEffect } from 'react';
import {CountProps} from "@src/store/count"
import { Button } from 'antd';
// 通过 observer 包裹 组件实现目的更新
import {observer} from "mobx-react";
import {useRootStore} from "@src/context/rootContext"
// 
interface Props{
    // countstore:CountProps
}
// 组合多个 sore
const Count:React.FC<Props>=(props)=> {
    // let {countstore} = props;
    // let {
    //     decrement,
    //     increment,  // 结构出来 Can't find
    //     count
    // } = countstore
    const {countStore} = useRootStore()
    useEffect(()=>{
        console.log("7878")
    },[])
    return (  
        <div>
            <Button onClick={()=>{
                countStore.decrement()
            }}>decrement</Button>
            <span>{countStore.count}</span>
            <Button onClick={()=>{
                countStore.increment()
            }}>increment</Button>
        </div>
    );
}

export default observer(Count) ;