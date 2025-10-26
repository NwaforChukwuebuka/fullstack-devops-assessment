import React from 'react';
import { Card, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

interface FieldProps {
  field: any;
}

const Field: React.FC<FieldProps> = ({ field }) => {
  const getFieldIcon = () => {
    const icons: Record<string, string> = {
      text: 'Aa',
      radio: '○',
      checkbox: '☑',
      file: '📎',
      dropdown: '▼',
    };
    return icons[field.type] || '?';
  };

  return (
    <Card
      size="small"
      style={{ marginBottom: '8px' }}
      extra={
        <Button
          danger
          size="small"
          icon={<DeleteOutlined />}
          onClick={() => {/* TODO: Dispatch remove field */}}
        />
      }
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>{getFieldIcon()}</span>
        <strong>{field.label}</strong>
      </div>
      {field.placeholder && (
        <div style={{ color: '#888', fontSize: '12px', marginTop: '4px' }}>
          {field.placeholder}
        </div>
      )}
    </Card>
  );
};

export default Field;

