import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const items = [
    {
        label: 'Home',
        key: 'home',
        disabled: false,
    },
    {
        label: 'Calculator',
        key: 'calc',
    },
    {
        label: 'About Surreal Numbers',
        key: 'about',
        children: [
            {
                label: 'What is a Surreal Number?',
                key: 'what-is-a-surreal-number',
            },
            {
                label: 'Constructing Surreal Numbers',
                key: 'construction',
                disabled: true,
            },
            {
                label: 'Computing Surreal Numbers',
                key: 'computing',
                disabled: true,
            },
            {
                label: 'Fast Facts',
                key: 'fast-facts',
                disabled: true,
            }
        ],
    }
];

function Navbar(props){
    const [active, setActive] = useState(props.active);
    const navigator = useNavigate();

    const navigate = (e) => {
        setActive(e.key);
        navigator('../'+e.keyPath[0]);
    }

    return <Menu style={{position: 'relative', display: 'flex', justifyContent: 'center'}} onClick={navigate} selectedKeys={[active]} mode="horizontal" items={items} />
}

export default Navbar;