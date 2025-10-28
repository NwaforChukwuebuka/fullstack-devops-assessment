import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Input, App } from 'antd';
import { DndContext, type DragEndEvent, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addSection, addField, setFormTitle, reorderSections, reorderFields } from '../store/slices/formSlice';
import axios from 'axios';
import FieldTypesSidebar from '../components/builder/FieldTypesSidebar';
import Section from '../components/builder/Section';
import { ArrowLeft, FileJson, MoreVertical, ChevronRight, Undo, Redo, Plus, Minus, ChevronDown, PlusSquare } from 'lucide-react';

const FormBuilder: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { currentForm } = useAppSelector((state: any) => state.form);
  const [saving, setSaving] = useState(false);
  const { message: messageApi } = App.useApp();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 }
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    // Handle field reordering within a group
    if (activeId.startsWith('field-') && overId.startsWith('field-') && activeId !== overId) {
      // Find which group contains this field
      for (const section of currentForm.sections) {
        for (const group of section.groups) {
          const oldIndex = group.fields.findIndex((f: any) => f.id === activeId);
          const newIndex = group.fields.findIndex((f: any) => f.id === overId);
          
          if (oldIndex !== -1 && newIndex !== -1) {
            const newFields = arrayMove([...group.fields], oldIndex, newIndex);
            dispatch(reorderFields({ sectionId: section.id, groupId: group.id, fields: newFields }));
            return;
          }
        }
      }
      return;
    }

    // Check if dragging from sidebar (field)
    if (activeId.startsWith('field-')) {
      // Support two draggable ID formats:
      // 1) field-type-{text|radio|checkbox|file|dropdown}
      // 2) field-{GROUPKEY}-{fieldKey} (e.g. field-PRF-mobile)
      let fieldType: 'text' | 'radio' | 'checkbox' | 'file' | 'dropdown' = 'text';
      if (activeId.startsWith('field-type-')) {
        fieldType = activeId.replace('field-type-', '') as any;
      } else {
        const key = activeId.split('-').pop() || '';
        const map: Record<string, 'text' | 'radio' | 'checkbox' | 'file' | 'dropdown'> = {
          photo: 'file',
          gender: 'dropdown',
          residency: 'radio',
          dob: 'text',
          email: 'text',
          mobile: 'text',
          firstname: 'text',
          lastname: 'text',
          state: 'dropdown',
        };
        fieldType = map[key] || 'text';
      }

      // Drop target format from Group droppable: drop-{sectionId}-{groupId}
      if (overId.startsWith('drop-')) {
        const droppable = overId.slice(5); // remove 'drop-'

        // Try strict regex first: section-<id>-group-<id>
        let sectionId = '';
        let groupId = '';
        const m = droppable.match(/^(section-[^-]+)-(group-[^-]+)$/);
        if (m) {
          sectionId = m[1];
          groupId = m[2];
        } else {
          // Fallback: split on '-group-' boundary
          const idx = droppable.indexOf('-group-');
          if (idx > -1) {
            sectionId = droppable.slice(0, idx);
            groupId = 'group-' + droppable.slice(idx + 7);
          }
        }

        if (sectionId && groupId) {
          dispatch(addField({ sectionId, groupId, fieldType }));
        } else {
          console.log('Unable to parse droppable id', { overId, droppable });
        }
      }
      return;
    }

    // Handle section reordering
    if (activeId.startsWith('section-') && overId.startsWith('section-')) {
      const oldIndex = currentForm.sections.findIndex((s: any) => s.id === activeId);
      const newIndex = currentForm.sections.findIndex((s: any) => s.id === overId);
      
      if (oldIndex !== -1 && newIndex !== -1) {
        const newSections = arrayMove(currentForm.sections as any[], oldIndex, newIndex);
        dispatch(reorderSections(newSections));
      }
      return;
    }
  };

  const handleSave = async () => {
    if (!currentForm.title || currentForm.title.trim() === '') {
      messageApi.error('Please enter a form title');
      return;
    }

    if (currentForm.sections.length === 0) {
      messageApi.error('Please add at least one section');
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

      if (id) {
        // Update existing form
        await axios.put(`/forms/${id}`, formData);
        messageApi.success('Form updated successfully!');
      } else {
        // Create new form
        await axios.post('/forms', formData);
        messageApi.success('Form saved successfully!');
      }
      
      navigate('/forms');
    } catch (error) {
      console.error('Error saving form:', error);
      messageApi.error('Failed to save form');
    } finally {
      setSaving(false);
    }
  };

  const fieldTypeComponents = {
    text: true,
    radio: true,
    checkbox: true,
    file: true,
    dropdown: true,
  };

  const sectionIds = currentForm.sections.map((s: any) => s.id);

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="h-screen bg-gray-100 flex flex-col overflow-hidden">
        {/* TopBar */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full flex items-center justify-center" onClick={() => navigate('/forms')}>
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </button>

              <div className="flex items-center space-x-2">
                <div className="flex space-x-1 items-center">
                  <div className="w-5 h-5 border-2 border-blue-600 rounded-sm"></div>
                  <div className="w-5 h-5 bg-blue-600 rounded-sm flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Input
                    placeholder="Form Title"
                    value={currentForm.title}
                    onChange={(e) => dispatch(setFormTitle(e.target.value))}
                    style={{ width: '320px', border: 'none', fontSize: '16px', fontWeight: '600' }}
                    className="text-gray-900"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button className="ui-btn-outline flex items-center space-x-2">
                <FileJson className="w-4 h-4" />
                <span>Import JSON</span>
              </button>
              <button
                className="ui-btn-primary"
                onClick={handleSave}
                disabled={saving}
              >
                {saving ? 'Saving...' : 'Publish'}
              </button>
              <button
                className="ui-btn-primary"
                onClick={handleSave}
                disabled={saving}
              >
                {saving ? 'Saving...' : 'Save'}
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <MoreVertical className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* TabBar */}
        <div className="tabbar shadow-sm">
          <div className="flex items-center justify-center px-4">
            <div className="flex items-center space-x-1 overflow-x-auto">
              {['Details','Identities','Builder','Settings','Embed','Theme','PDF Filler','API Mappings','Workflow','Digest'].map((tab) => {
                const selected = tab === 'Builder';
                return (
                  <button key={tab} className="tabbar-button" aria-selected={selected} role="tab">
                    {tab}
                  </button>
                );
              })}
              <button className="p-3 text-gray-400 hover:text-gray-600">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left slim rail */}
          <div className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-4 space-y-4 shadow-sm">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Undo className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Redo className="w-5 h-5 text-gray-600" />
            </button>

            <div className="h-px w-12 bg-gray-300 my-2"></div>

            <button 
              className="w-10 h-10 text-white rounded-full flex items-center justify-center shadow-sm"
              style={{ background: 'var(--accent)' }}
              onClick={() => dispatch(addSection())}
            >
              <PlusSquare className="w-5 h-5" />
            </button>

            <button className="w-10 h-10 border-2 border-dashed border-gray-300 text-gray-400 rounded-full flex items-center justify-center hover:border-gray-400">
              <Plus className="w-5 h-5" />
            </button>

            <div className="flex-1 flex flex-col items-center space-y-3 pt-4">
              {['01', '02', '03', '04', '05', '06', '07'].map((num) => (
                <div
                  key={num}
                  className="text-xs font-medium text-gray-600 w-8 h-8 flex items-center justify-center"
                >
                  {num}
                </div>
              ))}
              <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full">
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            <div className="h-px w-12 bg-gray-300 my-2"></div>

            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Minus className="w-5 h-5 text-gray-600" />
            </button>
            <div className="text-sm font-medium text-gray-700">100</div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Plus className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Builder canvas */}
          <div className="flex-1 overflow-auto p-8" style={{ background: 'var(--bg)' }}>
            <div className="max-w-5xl mx-auto">
              {/* Sections rendering */}
              <div>
                {currentForm.sections.length === 0 ? (
                  <div className="text-center text-gray-500 py-10">
                    <p className="mb-4 font-semibold">No sections yet. Add your first section to get started!</p>
                    <p className="text-sm mb-4 text-gray-400">1. Click "Add Section" below<br/>2. Click "Add Group" in the section<br/>3. Drag field types from the right panel into groups</p>
                    <button className="ui-btn-primary" onClick={() => dispatch(addSection())}>Add Section</button>
                  </div>
                ) : (
                  <SortableContext items={sectionIds} strategy={verticalListSortingStrategy}>
                    {currentForm.sections.map((section: any) => (
                      <Section key={section.id} section={section} />
                    ))}
                  </SortableContext>
                )}

                {/* Add Section button */}
                <div className="mt-8">
                  <button 
                    className="ui-btn-outline w-full flex items-center justify-center gap-2 py-3"
                    onClick={() => dispatch(addSection())}
                  >
                    <Plus className="w-4 h-4" />
                    Add Section
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right sidebar with field types (collapses to drawer on small screens in future) */}
          <FieldTypesSidebar fieldTypes={Object.keys(fieldTypeComponents)} />
        </div>
      </div>
    </DndContext>
  );
};

export default FormBuilder;

