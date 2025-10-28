import React, { useState, useEffect, useRef } from 'react';
import { Input, Select, Switch } from 'antd';
import { Type, Circle, Upload, ChevronDown, Trash2, GripVertical } from 'lucide-react';
import { useAppDispatch } from '../../store/hooks';
import { updateField, removeField } from '../../store/slices/formSlice';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface FieldProps {
  field: any;
  sectionId: string;
  groupId: string;
}

const Field: React.FC<FieldProps> = ({ field, sectionId, groupId }) => {
  const dispatch = useAppDispatch();
  const [isEditingLabel, setIsEditingLabel] = useState(false);
  const [labelValue, setLabelValue] = useState(field.label);
  const [isEditingOptions, setIsEditingOptions] = useState(false);
  const [optionsValue, setOptionsValue] = useState((field.options || []).join(', '));
  const labelInputRef = useRef<any>(null);
  const optionsInputRef = useRef<any>(null);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ 
    id: field.id,
    data: { type: 'field', field }
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  useEffect(() => {
    setLabelValue(field.label);
  }, [field.label]);

  useEffect(() => {
    setOptionsValue((field.options || []).join(', '));
  }, [field.options]);

  useEffect(() => {
    if (isEditingLabel && labelInputRef.current) {
      labelInputRef.current.focus();
    }
  }, [isEditingLabel]);

  useEffect(() => {
    if (isEditingOptions && optionsInputRef.current) {
      optionsInputRef.current.focus();
    }
  }, [isEditingOptions]);

  const getFieldIcon = () => {
    const icons: Record<string, React.ReactNode> = {
      text: <Type className="w-4 h-4" style={{ color: '#6b7280' }} />,
      radio: <Circle className="w-4 h-4" style={{ color: '#6b7280' }} />,
      checkbox: <Circle className="w-4 h-4" style={{ color: '#6b7280' }} />,
      file: <Upload className="w-4 h-4" style={{ color: '#6b7280' }} />,
      dropdown: <ChevronDown className="w-4 h-4" style={{ color: '#6b7280' }} />,
    };
    return icons[field.type] || <Type className="w-4 h-4" />;
  };

  const handleLabelChange = (value: string) => {
    dispatch(updateField({ fieldId: field.id, updates: { label: value } }));
    setLabelValue(value);
  };

  const handleLabelBlur = () => {
    setIsEditingLabel(false);
  };

  const handleLabelKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setIsEditingLabel(false);
    }
  };

  const handleRequiredChange = (checked: boolean) => {
    dispatch(updateField({ fieldId: field.id, updates: { required: checked } }));
  };

  const handleOptionsChange = (value: string) => {
    const options = value
      .split(',')
      .map(v => v.trim())
      .filter(Boolean);
    dispatch(updateField({ fieldId: field.id, updates: { options } }));
  };

  const handleOptionsBlur = () => {
    setIsEditingOptions(false);
  };

  const handleOptionsKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setIsEditingOptions(false);
    }
  };

  const handleRemove = () => {
    dispatch(removeField({ sectionId, groupId, fieldId: field.id }));
  };

  const renderPreview = () => {
    if (field.type === 'text') {
      return <Input placeholder="Text" disabled style={{ width: 200, backgroundColor: '#f9fafb' }} />;
    }
    if (field.type === 'dropdown') {
      const options = (field.options || []).map((o: string) => ({ label: o, value: o }));
      return (
        <Select
          style={{ width: 200 }}
          options={options.length > 0 ? options : [{ label: 'Select', value: 'select' }]}
          placeholder="Select"
          disabled
          open={false}
        />
      );
    }
    if (field.type === 'checkbox') {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {(field.options || ['Option 1', 'Option 2']).slice(0, 2).map((o: string) => (
            <label key={o} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input type="checkbox" disabled style={{ pointerEvents: 'none' }} />
              <span style={{ fontSize: '14px', color: '#6b7280' }}>{o}</span>
            </label>
          ))}
        </div>
      );
    }
    if (field.type === 'radio') {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {(field.options || ['Yes', 'No']).slice(0, 2).map((o: string) => (
            <label key={o} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input type="radio" disabled style={{ pointerEvents: 'none' }} />
              <span style={{ fontSize: '14px', color: '#6b7280' }}>{o}</span>
            </label>
          ))}
        </div>
      );
    }
    if (field.type === 'file') {
      return (
        <div style={{ 
          width: 200, 
          height: 80, 
          border: '2px dashed #d1d5db', 
          borderRadius: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundColor: '#f9fafb'
        }}>
          <Upload className="w-6 h-6" style={{ color: '#9ca3af', marginBottom: 4 }} />
          <span style={{ fontSize: '12px', color: '#6b7280' }}>Upload file</span>
        </div>
      );
    }
    return null;
  };

  const needsOptions = field.type === 'radio' || field.type === 'checkbox' || field.type === 'dropdown';

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="field-row flex items-center gap-3 py-2 px-3 rounded mb-1 hover:bg-gray-50"
      role="listitem"
      aria-label={field.label || field.type}
    >
      {/* Drag handle */}
      <div
        {...listeners}
        {...attributes}
        className="flex-shrink-0 cursor-grab active:cursor-grabbing"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <GripVertical className="w-4 h-4" style={{ color: '#9ca3af' }} />
      </div>

      {/* Icon */}
      <div className="flex-shrink-0">{getFieldIcon()}</div>

      {/* Editable label */}
      {isEditingLabel ? (
        <Input
          ref={labelInputRef}
          value={labelValue}
          onChange={(e) => setLabelValue(e.target.value)}
          onBlur={() => {
            handleLabelChange(labelValue);
            handleLabelBlur();
          }}
          onKeyDown={handleLabelKeyDown}
          placeholder="Field label"
          className="border-transparent focus:border-blue-500"
          style={{ width: 150, height: 32 }}
          autoFocus
        />
      ) : (
        <Input
          value={labelValue || ''}
          onClick={() => setIsEditingLabel(true)}
          placeholder="Click to edit"
          readOnly
          className="border-transparent cursor-pointer hover:bg-gray-50"
          style={{ width: 150, height: 32 }}
        />
      )}

      {/* Preview */}
      <div className="flex-1">{renderPreview()}</div>

      {/* Options editor (inline) */}
      {needsOptions && (
        <>
          {isEditingOptions ? (
            <Input
              ref={optionsInputRef}
              value={optionsValue}
              onChange={(e) => setOptionsValue(e.target.value)}
              onBlur={() => {
                handleOptionsChange(optionsValue);
                handleOptionsBlur();
              }}
              onKeyDown={handleOptionsKeyDown}
              placeholder="Option 1, Option 2"
              className="border-transparent focus:border-blue-500"
              style={{ width: 200, height: 32 }}
              autoFocus
            />
          ) : (
            <Input
              value={optionsValue}
              onClick={() => setIsEditingOptions(true)}
              placeholder="Click to edit options"
              readOnly
              className="border-transparent cursor-pointer hover:bg-gray-50"
              style={{ width: 200, height: 32 }}
            />
          )}
        </>
      )}

      {/* Required toggle */}
      <div className="flex items-center gap-2 px-3">
        <span className="text-sm" style={{ color: '#6b7280' }}>Required</span>
        <Switch 
          checked={!!field.required} 
          onChange={handleRequiredChange}
          size="small"
        />
      </div>

      {/* Delete button */}
      <button
        aria-label="Remove field"
        onClick={handleRemove}
        className="p-1 hover:bg-gray-200 rounded flex-shrink-0"
        style={{ color: '#6b7280' }}
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Field;