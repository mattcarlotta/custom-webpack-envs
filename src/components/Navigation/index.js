import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const items = [
  { key: 'Home', name: 'Home', as: Link, to: '/' },
  { key: 'Signup', name: 'Dashboard', as: Link, to: '/dashboard' },
];

export default () => <Menu items={items} />;
