import React from 'react';
import './style.css';
import 'antd/dist/antd.css';
import { Row } from 'antd';
import ResponsiveCol from './ResponsiveCol';
import DocumentList from './DocumentList';
import { Typography } from 'antd';

const { Title } = Typography;

export default function App() {
  const data = {
    employmentDocs: [
      { id: 3132198465174, title: 'Letter of Engagement' },
      { id: 3132195617665, title: 'Individual Flexability Arrangement' },
    ],
    qualifications: [],
  };
  return (
    <>
      <Row gutter={[16, 20]}>
        <ResponsiveCol>
          <Title>Induction Documents</Title>
        </ResponsiveCol>
        <ResponsiveCol>
          <DocumentList
            title={'Employment Documents'}
            documents={data.employmentDocs}
          />
        </ResponsiveCol>
        <ResponsiveCol>
          <DocumentList
            title={'Qualifications'}
            documents={data.qualifications}
          />
        </ResponsiveCol>
      </Row>
    </>
  );
}
