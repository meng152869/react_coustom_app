/*
 * @Author: meng xiang cheng 3257833780@qq.com
 * @Date: 2023-08-04 13:45:56
 * @LastEditors: meng xiang cheng 3257833780@qq.com
 * @LastEditTime: 2023-08-05 10:01:52
 * @FilePath: \myReactApp\src\store\index.ts
 * @Description: 
 */
import {makeAutoObservable,makeObservable,observable,computed} from "mobx";
import {observer} from "mobx-react";
// observer 就是注解 


// mobx 三个概念 state Actions Derivations
// state （状态） 驱动你的应用程序的数据
// action 是任意可以改变state（状态）的代码 比如用户时间处理 后端推送数据处理 调度时间处理等等
// 创建 Derivations 以便对state变化进行响应
// flow  他是generatoer函数


//  工作流程 


/**
 * 两种派生方式 
 * computed 可以通过纯函数 从当前的可观测state 中派生
 * Reactions 当State改变时 需要自动运行的副作用 flow
 * */ 
class UserInff{
    id=null
    name=""
    // useid=null
    get useid(){
        return this.id
    }
    constructor(){
        // makeAutoObservable(this)
        makeObservable(this,{
            id:observable,
            name:observable,
            // 通过computed 对派生值进行建模
            useid:computed
        })
    }
    changeUserInfo({
        id=null,
        name="",
        // useid = null
    }){
        this.id = id;
        this.name = name;
        // this.useid = useid;
    }
}