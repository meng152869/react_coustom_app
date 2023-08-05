/*
 * @Author: meng xiang cheng 3257833780@qq.com
 * @Date: 2023-08-02 13:07:49
 * @LastEditors: meng xiang cheng 3257833780@qq.com
 * @LastEditTime: 2023-08-02 13:30:14
 * @FilePath: \myReactApp\src\mock\index.ts
 * @Description: 
 */
import mockjs from "mockjs";
// mockjs 语法规范包含两部分 
import {
    getList
} from "./mockdata";
// 
export const initMockData = ()=>{
    mockjs.mock("/getList",'get',getList())
}


