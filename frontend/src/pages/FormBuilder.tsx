import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, message } from 'antd';
import {
  SaveOutlined,
  ArrowLeftOutlined,
  BgColorsOutlined,
  CheckSquareOutlined,
  UploadOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { DndContext, type DragEndEvent } from '@dnd-kit/core';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  addSection,
  addField,
  setFormTitle,
} from '../store/slices/formSlice';
import axios from 'axios';
import Sidebar from '../components/builder/Sidebar';
import Section from '../components/builder/Section';

const FormBuilder: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentForm } = useAppSelector((state: any) => state.form);
  const [saving, setSaving] = useState(false);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    // Check if dragging from sidebar (field type)
    if (activeId.startsWith('field-type-')) {
      const fieldType = activeId.replace('field-type-', '') as any;
      const [sectionId, groupId] = overId.split('-');
      
      dispatch(addField({
        sectionId,
        groupId: `${sectionId}-${groupId}`,
        fieldType,
      }));
    }
  };

  const handleSave = async () => {
    if (!currentForm.title || currentForm.title.trim() === '') {
      message.error('Please enter a form title');
      return;
    }

    if (currentForm.sections.length === 0) {
      message.error('Please add at least one section');
      return;
    }

    setSaving(true);
    try {
      const formData = {
        title: currentForm.title,
        description: currentForm.description,
        structure: {
          sections: currentForm.sections,
        },
      };

      await axios.post('/forms', formData);
      message.success('Form saved successfully!');
      navigate('/forms');
    } catch (error) {
      console.error('Error saving form:', error);
      message.error('Failed to save form');
    } finally {
      setSaving(false);
    }
  };

  const fieldTypeComponents = {
    text: <BgColorsOutlined />,
    radio: <CheckSquareOutlined />,
    checkbox: <CheckSquareOutlined />,
    file: <UploadOutlined />,
    dropdown: <DownOutlined />,
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="form-builder">
        <div className="builder-header">
          <div className="header-left">
            <Button icon={<ArrowLeftOutlined />} onClick={() => navigate('/forms')}>
              Back
            </Button>
            <Input
              placeholder="Form Title"
              value={currentForm.title}
              onChange={(e) => dispatch(setFormTitle(e.target.value))}
              style={{ marginLeft: '16px', width: '300px' }}
            />
          </div>
          <Button
            type="primary"
            icon={<SaveOutlined />}
            loading={saving}
            onClick={handleSave}
          >
            Save Form
          </Button>
        </div>

        <div className="builder-content">
          <div className="builder-main">
            {currentForm.sections.length === 0 ? (
              <div className="empty-state">
                <p>No sections yet. Add your first section to get started!</p>
                <Button
                  type="primary"
                  onClick={() => dispatch(addSection())}
                >
                  Add Section
                </Button>
              </div>
            ) : (
              currentForm.sections.map((section: any) => (
                <Section key={section.id} section={section} />
              ))
            )}

            <div style={{ marginTop: '20px' }}>
              <Button onClick={() => dispatch(addSection())}>
                Add Section
              </Button>
            </div>
          </div>

          <Sidebar fieldTypes={Object.keys(fieldTypeComponents)} />
        </div>
      </div>
    </DndContext>
  );
};

export default FormBuilder;

