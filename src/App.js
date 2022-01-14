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
      {
        id: 3132198465174,
        title: 'Letter of Engagement',
        download: 'loren ipsum',
      },
      {
        id: 3132195617665,
        title: 'Individual Flexability Arrangement',
        download: 'loren ipsum',
      },
    ],
    qualifications: [
      { id: 23132132132, title: 'Drivers Licence', download: '' },
      { id: 23897465432, title: 'High Risk Work Licence', download: '' },
    ],
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
