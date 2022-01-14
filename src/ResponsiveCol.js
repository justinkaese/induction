import React from 'react';
import './style.css';
import 'antd/dist/antd.css';
import { Col } from 'antd';

export default function ResponsiveCol({ children }) {
  return (
    <Col
      xs={{ span: 24, offset: 0 }}
      sm={{ span: 24, offset: 0 }}
      md={{ span: 24, offset: 0 }}
      lg={{ span: 24, offset: 0 }}
      xl={{ span: 16, offset: 4 }}
      xxl={{ span: 14, offset: 4 }}
    >
      {children}
    </Col>
  );
}
