/*
 * @Author: meng xiang cheng 3257833780@qq.com
 * @Date: 2023-08-09 15:22:50
 * @LastEditors: meng xiang cheng 3257833780@qq.com
 * @LastEditTime: 2023-08-09 17:44:57
 * @FilePath: \react_coustom_app\src\layout\base\component\header.tsx
 * @Description: 
 */
import { useState, useEffect } from 'react';
import styled from "styled-components";

import { Layout } from 'antd';
import CompanyLogo from "@src/assets/images/company_logo.svg";
const {Header} = Layout;
export interface Props{

}
const MyHeader:React.FC<Props> =  ()=> {
    return ( 
        <Wrapper>
            <Header className='header'>
                <img src={CompanyLogo} className='company_logo' alt='logo'/>
            </Header>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    .header{
        display: flex;
        justify-content: flex-start;
        background-Color:#383F65;
        height:54;
        padding:0 10px;
    }
    .company_logo{
        width: 100px;
        height: 24px;
        margin-top: 15px;
    }
`
export default MyHeader;