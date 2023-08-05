/*
 * @Author: meng xiang cheng 3257833780@qq.com
 * @Date: 2023-08-05 11:38:42
 * @LastEditors: meng xiang cheng 3257833780@qq.com
 * @LastEditTime: 2023-08-05 11:47:56
 * @FilePath: \myReactApp\src\context\rootContext.tsx
 * @Description: 
 */
import React, {createContext,useContext} from "react"
import RootStore from "@src/store/root";
const rootStore = new RootStore();
const RootStoreContext = createContext(rootStore);
interface Props{
    children: React.ReactNode;
}
export const RootStoreProvider:React.FC<Props> = ({children}) => {
    return(
        <RootStoreContext.Provider value={rootStore}>
            {children}
        </RootStoreContext.Provider>
    )
}
export const  useRootStore = ()=>{
    return useContext(RootStoreContext);
} 



