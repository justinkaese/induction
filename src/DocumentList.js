import React from 'react';
import './style.css';
import 'antd/dist/antd.css';
import { Card, List, Space, Upload, Button } from 'antd';
import { DownloadOutlined, UploadOutlined } from '@ant-design/icons';

export default function LetterOfEngagement(props) {
  return (
    <div>
      <Card
        className="custom-card"
        title={props.title}
        bordered={false}
        style={{ width: '100%' }}
      >
        <List
          dataSource={props.documents}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta title={item.title} description={''} />
              <Space>
                <Button
                  type="primary"
                  shape="round"
                  icon={<DownloadOutlined />}
                  ghost
                >
                  Download
                </Button>
                <Upload maxCount={1}>
                  <Button
                    type="primary"
                    shape="round"
                    icon={<UploadOutlined />}
                  >
                    Upload
                  </Button>
                </Upload>
              </Space>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
}
