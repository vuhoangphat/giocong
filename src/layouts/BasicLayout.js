import React from 'react';
import { Layout } from 'antd';
import CustomerSider from '../components/Sider/Sider';
import CustomeSider from '../components/Sider/Sider';
const { Content, Footer, Header } = Layout;
const BasicLayout = () => {
    return (
        <div className='BasicLayout'>
            <CustomeSider></CustomeSider>
        </div>
    )
}
export default BasicLayout;