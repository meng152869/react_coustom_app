/*
 * @Author: meng xiang cheng 3257833780@qq.com
 * @Date: 2023-08-02 11:40:03
 * @LastEditors: meng xiang cheng 3257833780@qq.com
 * @LastEditTime: 2023-08-04 17:00:31
 * @FilePath: \myReactApp\src\api\base.ts
 * @Description: 
 * 
 */
import axios, { AxiosRequestConfig } from "axios";
import { defineConfig } from "./config";
import { message } from "antd";
import {statusTips} from "@src/utils/errorhandle"
export const createApi = (axiosConfig: AxiosRequestConfig) => {
    const instance = axios.create(defineConfig);
    try {
        return new Promise((resolve, reject) => {
            instance({
               ...axiosConfig
            }).then((res) => {
                if(res.status == 200){
                    if(res.data.code == 0){
                        resolve(res.data.data)
                    }else{
                        message.warning(`有问题`)
                    }
                }else{
                    if(statusTips[res.status]){
                        return message.warning(statusTips[res.status])
                    }
                    message.warning(`状态码${res.status}`)
                }  
            }).catch((error) => {
                reject(error)
            })
        })
    } catch (error) {
        return Promise.reject(error)
    }
}

export const ApiGet = function(
    url:string,
    params:AxiosRequestConfig['params'],
){
    return createApi({
        url,
        method:"get",
        params
    })
}

export const ApiPost = function(url:string,data:AxiosRequestConfig['params']){
    return createApi({
        url,
        method:"post",
        data
    })
}


