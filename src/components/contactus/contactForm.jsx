import React from 'react';
import {  Form, Input,  } from 'antd';
import Button from '../shared/button';
const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
  return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};
const   ContactForm = () => {
  const onFinish = value => {
    console.log(value);
  };
  return (
   
    <Form name="form_item_path" layout="vertical" onFinish={onFinish} >
      <MyFormItemGroup prefix={['user']} >
        <MyFormItemGroup prefix={['name']}>
            <div className="flex md:flex-row flex-col justify-between md:gap-5 gap-0">
          <MyFormItem name="name" label="Name" className="w-full">
            <Input type='text' className="!min-h-[3.5em]" />
          </MyFormItem>
          <MyFormItem name="email" label="Email" className="w-full">
            <Input type='email'  className="!min-h-[3.5em]"/>
          </MyFormItem></div>
        </MyFormItemGroup>

        <MyFormItem name="subject" label="Subject">
          <Input type='text'  className="!min-h-[3.5em]" />
        </MyFormItem>
         <MyFormItem name="msg" label="Message">
     <Input.TextArea rows={6} />
        </MyFormItem>
      </MyFormItemGroup>

      <Button text="Submit" className="bg-[var(--primary)] md:w-[200px]  md:px-20 w-full" htmlType="submit"/>
       
    </Form>





  );
};
export default ContactForm;