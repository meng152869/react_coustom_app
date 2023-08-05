/*
 * @Author: meng xiang cheng 3257833780@qq.com
 * @Date: 2023-08-02 13:19:43
 * @LastEditors: meng xiang cheng 3257833780@qq.com
 * @LastEditTime: 2023-08-02 13:24:36
 * @FilePath: \myReactApp\src\api\index.ts
 * @Description: 
 */
import {
    ApiGet
} from "./base";

export function getIndexList(){
    return ApiGet('/getList',{})
}