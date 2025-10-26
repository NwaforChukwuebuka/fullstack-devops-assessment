import { useDroppable } from '@dnd-kit/core';
import { Card, Input, Button } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import Field from './Field';

interface GroupProps {
  sectionId: string;
  group: any;
}

const Group: React.FC<GroupProps> = ({ sectionId, group }) => {
  const { setNodeRef, isOver } = useDroppable({
    id: `${sectionId}-${group.id}`,
  });

  return (
    <div
      ref={setNodeRef}
      style={{
        padding: '16px',
        border: isOver ? '2px dashed #1890ff' : '1px solid #d9d9d9',
        borderRadius: '4px',
        marginBottom: '16px',
        minHeight: '100px',
      }}
    >
      <Input
        value={group.title}
        placeholder="Group Title"
        style={{ marginBottom: '12px' }}
      />
      <div>
        {group.fields.map((field: any) => (
          <Field key={field.id} field={field} />
        ))}
      </div>
      <Button
        type="dashed"
        block
        icon={<PlusOutlined />}
        style={{ marginTop: '8px' }}
      >
        Add Field
      </Button>
    </div>
  );
};

interface SectionProps {
  section: any;
}

const Section: React.FC<SectionProps> = ({ section }) => {
  return (
    <Card
      title={
        <Input
          value={section.title}
          placeholder="Section Title"
          style={{ border: 'none', fontSize: '18px', fontWeight: 'bold' }}
        />
      }
      extra={
        <Button
          danger
          icon={<DeleteOutlined />}
        >
          Delete Section
        </Button>
      }
      style={{ marginBottom: '24px' }}
    >
      {section.groups.map((group: any) => (
        <Group key={group.id} sectionId={section.id} group={group} />
      ))}
    </Card>
  );
};

export default Section;
