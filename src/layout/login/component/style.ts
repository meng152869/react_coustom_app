/*
 * @Author: meng xiang cheng 3257833780@qq.com
 * @Date: 2023-08-09 09:55:50
 * @LastEditors: meng xiang cheng 3257833780@qq.com
 * @LastEditTime: 2023-08-09 11:00:05
 * @FilePath: \react_coustom_app\src\layout\login\component\style.ts
 * @Description: 
 */
import styled from "styled-components";
export const Wrapper = styled.div`
    padding-left:5%;
    padding-top: 30px;
    /* flex: 1; */
    min-width: 480px;
    width: 46%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
    .copyright{ 
        position: absolute;
        bottom: 20px;
        color: #8789a0;
        width: 100%;
        text-align: center;
        font-size: 14px;


    }
    .header{
        font-size:28px;
        letter-spacing: 7px;
        position: relative;
        margin-bottom: 30px;
        &::after{
            content: "";
            position: absolute;
            width: 140px;
            height: 2px;
            background-color: #3370FF;
            bottom: -10px;
            left: 0;
        }
    }
`