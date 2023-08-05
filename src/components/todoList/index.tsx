import * as React from 'react';
import { useState, useEffect } from 'react';
import {Input} from "antd"
import { useRootStore } from '@src/context/rootContext';
interface Props{
    
}
const TodoList:React.FC<Props> = ()=> {
    const [title,setTitle] = useState<string>("");
    const rootStore = useRootStore();
    const {addTodo} = rootStore.todoStore
    return ( 
         <>
            <Input placeholder='请输入title' value={title} onChange={(v:React.ChangeEvent<HTMLInputElement>)=>{
                setTitle(v.target.value)
            }} onKeyUp={(v:React.KeyboardEvent<HTMLInputElement>)=>{
                if(v.keyCode !== 13 ) return;
                addTodo(title);
                setTitle("");
            }}></Input>
        </>
     );
}

export default TodoList;