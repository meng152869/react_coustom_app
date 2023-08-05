/*
 * @Author: meng xiang cheng 3257833780@qq.com
 * @Date: 2023-08-04 16:53:33
 * @LastEditors: meng xiang cheng 3257833780@qq.com
 * @LastEditTime: 2023-08-04 17:01:08
 * @FilePath: \myReactApp\src\utils\errorhandle.ts
 * @Description: 
 */
export const statusTips:{
    [key:string|number]:string
} = {
    500:"服务器内部错误",
    502:"网关错误",
    404:"找不到接口",
    413:"请求实体过大",
    400:"客户端请求语法错误",
    401:"没有权限",
    403:"没有权限访问该资源",
    405:"请求方法被禁止，请检查请求方法",
}
export const errorhandle = ()=>{
    
}