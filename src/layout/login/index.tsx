/*
 * @Author: meng xiang cheng 3257833780@qq.com
 * @Date: 2023-08-04 17:07:39
 * @LastEditors: meng xiang cheng 3257833780@qq.com
 * @LastEditTime: 2023-08-09 10:30:34
 * @FilePath: \react_coustom_app\src\layout\login\index.tsx
 * @Description: 
 */
import * as React from 'react';
import { useState, useEffect } from 'react';
// import { } from "antd";
import { Wrapper } from "./style";
import {
    config
} from "@src/config/index"
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination} from "swiper/modules"
import svg01 from "@src/assets/images/01.svg";
import svg02 from "@src/assets/images/02.svg";
import svg03 from "@src/assets/images/03.svg";
import LoginPane from "./component/loginPane"
interface Props {

}
const { logo } = config
const LoginPage: React.FC<Props> = (props) => {
    const SwiperImg = [svg01,svg02,svg03];
    return (
        <Wrapper>
            <img src={logo} alt="logo" className='Logo' />
            <div className='login_wrap'>
                <div className='left_wrap'>
                    <Swiper modules={[Pagination]} pagination={{
                        clickable:true
                    }}>
                        {
                            SwiperImg.map((item,index)=>{
                                return(
                                    <SwiperSlide key={index}>
                                        <div className='slider'>
                                            <img className='slider_img' src={item} alt="svg" />
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
                <LoginPane></LoginPane>
            </div>
        </Wrapper>
    );
}

export default LoginPage;