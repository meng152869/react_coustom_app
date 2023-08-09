/*
 * @Author: meng xiang cheng 3257833780@qq.com
 * @Date: 2023-08-09 09:42:23
 * @LastEditors: meng xiang cheng 3257833780@qq.com
 * @LastEditTime: 2023-08-09 13:09:38
 * @FilePath: \react_coustom_app\src\components\coustomFormItem\index.tsx
 * @Description: 
 */
import React ,{ReactNode}from 'react';
import { Form, Input, Button ,FormItemProps} from 'antd';
interface Props extends FormItemProps{
    children:ReactNode;
    width?:string|number;
}
const CustomFormItem:React.FC<Props> = ({ label, name,width,  children, ...restProps }) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required: true, message: `请输入${label}` }]}
      {...restProps}
      className='costom_formitem'
      style={{
        marginBottom:"24px"
      }}
    >
      <div style={{ width }}>
        {children}
      </div>
    </Form.Item>
  );
};

export default CustomFormItem;