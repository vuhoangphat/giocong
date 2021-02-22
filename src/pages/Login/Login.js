import React from 'react';
import './Login.scss';
import { Input, PageHeader, Form, Button, Checkbox } from 'antd';
const layout = {
    labelCol: {
        span: 8
    },
    wrapperCol: {
        span: 20
    },
}
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
const Login = () => {
    return (
        <div className='Login'>
            <PageHeader title='Welcome to Giocong' />
            <div className='form'>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
export default Login;