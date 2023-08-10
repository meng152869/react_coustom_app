/*
 * @Author: meng xiang cheng 3257833780@qq.com
 * @Date: 2023-08-04 17:07:47
 * @LastEditors: meng xiang cheng 3257833780@qq.com
 * @LastEditTime: 2023-08-09 15:20:31
 * @FilePath: \react_coustom_app\src\layout\nofound\index.tsx
 * @Description: 
 */
import * as React from 'react';
import { useState, useEffect } from 'react';
import svg404 from "@src/assets/images/404.svg"
import styled from "styled-components";
// import { Button } from 'antd';
import CustomButton from "@src/components/coustomButton";
import {} from "react-router-dom";
interface Props{

}
const NoFound:React.FC<Props> = (props) => {
    const back = ()=>{

    }
    return ( 
        <Wrapper>
            <div className='page_content'>
                <img src={svg404} alt="404"  className='notFound'/>
                <div>
                    <p className='ops'>OOPS!</p>
                    <p className='tips'>您无法进入此页面</p>
                    <p className='sm_tips'>请检查您输入的网址是否正确，或者点击下面的按钮返回首页。</p>
                    <CustomButton type='primary' style={{
                        marginTop:55
                    }} onClick={()=>{
                        back();
                    }}>返回首页</CustomButton>
                </div>
            </div>
        </Wrapper>
    );
}
const  Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    .page_content{
        display: flex;
        justify-content: flex-start;
        margin-top: -5%;
    }
    .notFound{
        width: 280px;
        height: 280px;
        margin-right: 100px;
    }
    .ops{
        font-size: 32px;
        font-weight: bold;
        color: #3370FF;
        margin-bottom: 35px;
    }
    .tips{
        font-size: 24px;
        line-height: 24px;
        color: #222;
        font-weight: bold;
        margin-bottom: 25px;
    }
    .sm_tips{
        width: 300px;
        font-size: 14px;
        line-height: 21px;
        color: grey;
    }
`
export default NoFound;