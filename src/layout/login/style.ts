/*
 * @Author: meng xiang cheng 3257833780@qq.com
 * @Date: 2023-08-07 11:51:05
 * @LastEditors: meng xiang cheng 3257833780@qq.com
 * @LastEditTime: 2023-08-09 13:47:31
 * @FilePath: \react_coustom_app\src\layout\login\style.ts
 * @Description: 
 */
import styled from "styled-components";
import BG from "@src/assets/images/BG.jpg";
import DyeBg from "@src/assets/images/dyebg1.jpg";
export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${BG});
    background-size: 1920px 1080px;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    .Logo{
        position: absolute;
        width: 120px;
        height: 60px;
        left: 2vw;
        top:2vh;
        /* min-width: ; */
        /* min-height: ; */
    }
    .login_wrap{
        height: 60vh;
        left: 50%;
        min-height: 565px;
        min-width: 1056px;
        position: absolute;
        background-color: white;
        top: 50%;
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        width: 73vw; 
        border-radius: 8px;
        /*  */
        display: flex;
        justify-content: start;
    }
    .left_wrap{
        width: 50%;
        height: 100%;
        /* background-color: red; */
    }
    .swiper{
        &::after{
            content:"";
            position: absolute;
            top: 0;
            left: 0;
            height: 60vh;
            min-height: 565px;
            width: 100%;
            background-image:url(${DyeBg});
            /* background: linear-gradient( 135deg, #3370FF, #c563ed,#3370FF ); */
            /* background: linear-gradient( 135deg, #ff338f, #9419c7,#1926c7,#198dc7,#33f6ff,#33ff5f,#f1ff33,#e12424 ); */
            filter: blur(4px) contrast(0.5);
            background-size: 100% 100%;
            background-repeat: no-repeat;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            /* background-size: 200% 200%; */
	        /* animation: gradient-move 30s ease  infinite; */
        }
	    
    }
    .slider{
        height: 60vh;
        min-height: 565px;
        display: flex;
        justify-content: center;
        align-items: center;
       
        .slider_img{
            width: 50%;
        }
    }
    @keyframes gradient-move {
	    0% {
            background-position: 0 0 ;
	    }

	    100% {
            background-position: 700% 700% ;

	    }       
    }
`