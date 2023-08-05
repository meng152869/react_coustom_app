import { action, makeObservable, observable } from "mobx";
import  Todo,{TodoProps} from "./todo"
import { StringOptions } from "sass";
export interface TodoStoreProps{
    todos:TodoProps[];
    addTodo:(title:string)=>void;
    [key:string]:any;
}
export default class TodoStore{
    todos:TodoProps[]= [];
    id = 0;
    constructor(){
        this.todos = [];
        makeObservable(this,{
            todos:observable,
            addTodo:action.bound
        })
    }
    createid(){
        if(!this.todos.length) return 1;
        return this.todos.reduce((id:number,todo:TodoProps)=>{
           return id < todo.id ? id : todo.id
        },0) + 1
    }
    addTodo(title:string){
        console.log(title)
        this.todos.push(new Todo({
            title,
            id:this.createid(),
            isCompleted:false
        }))
    }
}