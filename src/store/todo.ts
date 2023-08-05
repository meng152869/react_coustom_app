import { makeObservable, observable} from "mobx";

/*
 * @Author: meng xiang cheng 3257833780@qq.com
 * @Date: 2023-08-05 13:34:09
 * @LastEditors: meng xiang cheng 3257833780@qq.com
 * @LastEditTime: 2023-08-05 13:41:39
 * @FilePath: \myReactApp\src\store\todo.ts
 * @Description: 
 */
export interface TodoProps{
    id:number;
    title:string;
    isCompleted:boolean;
}
export default class Todo{
    id=-1;
    title="";
    isCompleted=false;
    isEditing = false;
    constructor(todo:TodoProps){
        this.id = todo.id;
        this.title = todo.title;
        this.isCompleted = todo.isCompleted;
        makeObservable(this,{
            title:observable,
            isCompleted:observable,
            isEditing:observable
        })
    }
}