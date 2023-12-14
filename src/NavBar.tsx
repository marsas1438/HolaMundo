import React, { useState } from "react";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('Nuestros empresa', 'sub1', <SettingOutlined />, [
    getItem('Compañia', 'g1',null, [getItem('Quiénes somos', '1'), getItem('Nuestros objetivos', '2')], 'group'),
    getItem('Multimedia', '3')
  ]),

  getItem('Nuestro curso', 'sub2', <AppstoreOutlined />, [
    getItem('Estudiantes', '5'),
    getItem('Nuevo usuario', '6'),
  ]),

  { type: 'divider' },

  getItem('Contáctanos', 'sub4', <MailOutlined />),

];

const NavBar: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};

export default NavBar;