/*
 * @Author: meng xiang cheng 3257833780@qq.com
 * @Date: 2023-08-09 09:30:22
 * @LastEditors: meng xiang cheng 3257833780@qq.com
 * @LastEditTime: 2023-08-09 09:32:40
 * @FilePath: \myReactApp\src\hooks\useScrollListener.tsx
 * @Description: 
 */
import React, { useState, useEffect, useRef } from 'react';

function useScrollListener(domRef: React.MutableRefObject<any>) {
    const [isAtBottom, setIsAtBottom] = useState(false);
    const handleScroll = () => {
        const scrollTop = domRef.current.scrollTop;
        const clientHeight = domRef.current.clientHeight;
        const scrollHeight = domRef.current.scrollHeight;

        if (scrollTop + clientHeight === scrollHeight) {
            setIsAtBottom(true);
        } else {
            setIsAtBottom(false);
        }
    };
    useEffect(() => {
        if (!domRef.current) return;

        domRef.current.addEventListener('scroll', handleScroll);

        return () => {
            domRef.current.removeEventListener('scroll', handleScroll);
        };
    }, [domRef]);
    return isAtBottom;
}
