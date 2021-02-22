import React, { useState } from 'react';
import { Layout,Menu } from 'antd';
import avatar from '../../asserts/avatar.png';
import { FrownOutlined} from '@ant-design/icons';
import './Sider.scss';  
const CustomSider = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <   div className='CustomSider'>
            <Layout.Sider collapsible onCollapse={collapsed}>
                <div className='logo'>
                    <img src={avatar}  alt=''/>
                </div>
                <Menu theme='dark' defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<FrownOutlined/>}>
                        Manage Employee
                    </Menu.Item>
                    <Menu.Item key="2" icon={<FrownOutlined/>}>
                        Login
                    </Menu.Item>
                </Menu>
            </Layout.Sider>
        </div>
    )
}
export default CustomSider;