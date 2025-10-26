import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Card } from 'antd';
import {
  BgColorsOutlined,
  CheckSquareOutlined,
  UploadOutlined,
  DownOutlined,
} from '@ant-design/icons';

interface DraggableFieldTypeProps {
  id: string;
  type: string;
}

const DraggableFieldType: React.FC<DraggableFieldTypeProps> = ({ id, type }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  const icons: Record<string, React.ReactNode> = {
    text: <BgColorsOutlined />,
    radio: <CheckSquareOutlined />,
    checkbox: <CheckSquareOutlined />,
    file: <UploadOutlined />,
    dropdown: <DownOutlined />,
  };

  const labels: Record<string, string> = {
    text: 'Text Input',
    radio: 'Radio Button',
    checkbox: 'Checkbox',
    file: 'File Upload',
    dropdown: 'Dropdown',
  };

  return (
    <Card
      ref={setNodeRef}
      style={{
        ...style,
        cursor: 'grab',
        opacity: isDragging ? 0.5 : 1,
        marginBottom: '8px',
      }}
      {...listeners}
      {...attributes}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {icons[type]}
        <span>{labels[type]}</span>
      </div>
    </Card>
  );
};

interface SidebarProps {
  fieldTypes: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ fieldTypes }) => {
  return (
    <div className="builder-sidebar">
      <h3>Field Types</h3>
      <div>
        {fieldTypes.map((type) => (
          <DraggableFieldType key={type} id={`field-type-${type}`} type={type} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

