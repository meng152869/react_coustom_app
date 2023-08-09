/*
 * @Author: meng xiang cheng 3257833780@qq.com
 * @Date: 2023-08-08 11:58:58
 * @LastEditors: meng xiang cheng 3257833780@qq.com
 * @LastEditTime: 2023-08-09 14:19:35
 * @FilePath: \react_coustom_app\src\layout\login\component\loginPane.tsx
 * @Description: 
 * 
 */
import React, { useState, useEffect } from 'react';
import Styled from "styled-components";
// import {} from "antd";
import CustomFormItem from '@src/components/coustomFormItem';
import { Wrapper } from "./style"
import { Form, Input, Button, Checkbox, ConfigProvider } from "antd";
import { config } from "@src/config/index"
interface Props {
    showRemember?: true
}
const { useForm } = Form;
const LoginPane: React.FC<Props> = (props) => {
    const [form] = useForm();
    const [rememberCredentials, setRememberCredentials] = useState<boolean>(false);
    const handleRememberChange = (e: any) => {
        setRememberCredentials(e.target.checked);
    };
    const { showRemember = true } = props;
    const validateFieldsAndchangeFocus = (label: string, focusLabel: string) => {
        form.validateFields([label]);
        form.getFieldInstance(focusLabel).getElementsByTagName("input") && form.getFieldInstance(focusLabel).getElementsByTagName("input")[0].focus()
    }
    return (
        <Wrapper>
            <div className='header'>
                欢迎登录
            </div>
            <div className='copyright'>
                {config.copyright} {config.version}
            </div>
            <Form labelCol={{
                span: 24
            }} onFinish={(e) => {
                console.log(e)
            }} form={form}>
                <CustomFormItem label="账号" name={'username'}>
                    <Input placeholder='请输入账号' style={{
                        borderRadius: 2,
                        paddingLeft: 8,
                        height: 54,
                        fontSize: 16
                    }} allowClear onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                        if (e.keyCode !== 40) {
                            return;
                        }
                        validateFieldsAndchangeFocus("username", "password");
                    }}></Input>
                </CustomFormItem>
                <CustomFormItem label="密码" name={'password'}>
                    <Input.Password placeholder='请输入密码' style={{
                        borderRadius: 2,
                        paddingLeft: 8,
                        height: 54,
                        fontSize: 16
                    }} onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                        if (e.keyCode == 38) {
                            validateFieldsAndchangeFocus("password", "username");
                        }
                    }} />
                </CustomFormItem>
                {
                    showRemember &&
                    <ConfigProvider theme={{
                        token: {
                            borderRadiusSM: 2
                        }
                    }}>
                        <Form.Item name={'remember'}>
                            <Checkbox onChange={handleRememberChange}><span style={{
                                fontSize: "14px"
                            }} onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                                console.log(e)
                            }}>记住账号密码</span></Checkbox>
                        </Form.Item>
                    </ConfigProvider>

                }
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{
                        height: 40,
                        width: "50%",
                        marginTop: 20
                    }}>

                        <span style={{
                            fontSize: "16px"
                        }}>登录</span>
                    </Button>
                </Form.Item>

            </Form>
        </Wrapper>
    );
}



export default LoginPane;