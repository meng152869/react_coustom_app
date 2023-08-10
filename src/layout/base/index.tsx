/*
 * @Author: meng xiang cheng 3257833780@qq.com
 * @Date: 2023-08-07 10:37:44
 * @LastEditors: meng xiang cheng 3257833780@qq.com
 * @LastEditTime: 2023-08-09 15:30:50
 * @FilePath: \react_coustom_app\src\layout\base\index.tsx
 * @Description: 
 */
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import MyHeader from './component/header';
export interface Props {

}
const BaseRoot: React.FC<Props> = () => {
    useEffect(()=>{
        console.log("basePage")
    })
    return (
        <>
            <MyHeader></MyHeader>
            <Outlet></Outlet>
        </>
    );
}

export default BaseRoot;