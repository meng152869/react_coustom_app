/*
 * @Author: meng xiang cheng 3257833780@qq.com
 * @Date: 2023-08-05 11:26:59
 * @LastEditors: meng xiang cheng 3257833780@qq.com
 * @LastEditTime: 2023-08-05 14:38:45
 * @FilePath: \myReactApp\src\store\root.ts
 * @Description: 
 */
// 1. 组合多个store进行管理
// 2. 实现全局状态共享

import CountStore,{CountProps} from "./count";
import TodoStore,{TodoStoreProps} from "./todoStore"
class RootStore {
    countStore:CountProps ={
        count:0,
        increment:()=>{},
        decrement:()=>{}
    }
    todoStore:TodoStoreProps = {
        todos:[],
        addTodo:(title:string)=>{}
    };
    constructor(){
        this.countStore = new CountStore();
        this.todoStore = new TodoStore();
    }
}
export default RootStore;