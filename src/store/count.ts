/*
 * @Author: meng xiang cheng 3257833780@qq.com
 * @Date: 2023-08-05 10:07:30
 * @LastEditors: meng xiang cheng 3257833780@qq.com
 * @LastEditTime: 2023-08-05 10:39:57
 * @FilePath: \myReactApp\src\store\count.ts
 * @Description: 
 */
// 例子  基础使用

import {observable,action,makeObservable} from "mobx"
export interface CountProps{
    count:number,
    increment:()=>void;
    decrement:()=>void;
}
class CountStore{
    count:number = 0;
    constructor(){
        makeObservable(this,{
            count:observable,
            increment:action.bound,   // 结构赋值 有问题 找到当前this
            decrement:action.bound  // 使用bound会 直接绑定到当前对象
        })
        this.count == 0;
    }
    increment(){
        console.log("4545")
        this.count++
        console.log(this.count)
    }
    decrement(){
        this.count--
    }
}

export default CountStore;