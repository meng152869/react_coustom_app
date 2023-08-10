/*
 * @Author: meng xiang cheng 3257833780@qq.com
 * @Date: 2023-08-09 15:10:26
 * @LastEditors: meng xiang cheng 3257833780@qq.com
 * @LastEditTime: 2023-08-09 15:18:10
 * @FilePath: \react_coustom_app\src\components\coustomButton\index.tsx
 * @Description: 
 */
import { useState, useEffect } from 'react';
import {Button,ConfigProvider,ButtonProps} from "antd"
interface Props extends ButtonProps {

}
const  CustomButton:React.FC<Props &  React.RefAttributes<HTMLElement>> = (props)=> {
    let {style,...defaultProps} = props;
    return (  
        <ConfigProvider>
            <Button style={{
                borderRadius:2,
                ...style
            }} {...defaultProps}></Button>
        </ConfigProvider>
    );
}

export default CustomButton;