import React, { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Search, ChevronDown, X } from 'lucide-react';

interface FieldItem {
  id: string;
  label: string;
  selected?: boolean;
}

interface FieldGroup {
  key: string;
  title: string;
  fields: FieldItem[];
}

const FieldCheckbox: React.FC<{ field: FieldItem; groupKey: string }> = ({ field, groupKey }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: `field-${groupKey}-${field.id}`,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`flex items-center gap-2 px-2 py-1.5 rounded hover:bg-accent-light ${isDragging ? 'opacity-50' : ''}`}
      role="button"
      aria-label={`Add ${field.label}`}
    >
      <div
        className={`w-4 h-4 border-2 rounded-sm flex items-center justify-center cursor-grab ${
          field.selected
            ? 'bg-accent border-accent'
            : 'border-gray-400 hover:border-gray-600'
        }`}
      >
        {field.selected && (
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
      </div>
      <span className="text-sm" style={{ color: 'var(--text)' }}>{field.label}</span>
    </div>
  );
};

interface FieldTypesSidebarProps {
  fieldTypes: string[];
}

const FieldTypesSidebar: React.FC<FieldTypesSidebarProps> = () => {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'standard' | 'custom'>('standard');
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

  const groups: FieldGroup[] = [
    {
      key: 'PRF',
      title: 'PRF - Account Profile',
      fields: [
        { id: 'photo', label: 'Photo' },
        { id: 'dob', label: 'Date of Birth', selected: true },
        { id: 'state', label: 'State' },
        { id: 'residency', label: 'Do you have residency?' },
        { id: 'gender', label: 'Gender' },
        { id: 'salutation', label: 'Salutation' },
        { id: 'email', label: 'Email Address' },
        { id: 'mobile', label: 'Mobile Number' },
        { id: 'lastname', label: 'Last Name' },
        { id: 'firstname', label: 'First Name' },
      ],
    },
    {
      key: 'BIO',
      title: 'BIO - Biodata',
      fields: [
        { id: 'bio1', label: 'Field 1' },
        { id: 'bio2', label: 'Field 2' },
      ],
    },
    {
      key: 'CON',
      title: 'CON - Contact Info',
      fields: [
        { id: 'con1', label: 'Contact 1' },
        { id: 'con2', label: 'Contact 2' },
      ],
    },
    {
      key: 'PAS',
      title: 'PAS - Passports',
      fields: [
        { id: 'pass1', label: 'Passport 1' },
        { id: 'pass2', label: 'Passport 2' },
      ],
    },
    {
      key: 'IDC',
      title: 'IDC - ID Cards',
      fields: [
        { id: 'idc1', label: 'ID 1' },
        { id: 'idc2', label: 'ID 2' },
      ],
    },
  ];

  const filteredGroups = groups.filter((group) => {
    if (!query.trim()) return true;
    const normalizedQuery = query.toLowerCase();
    return group.title.toLowerCase().includes(normalizedQuery) ||
      group.fields.some((f) => f.label.toLowerCase().includes(normalizedQuery));
  });

  return (
    <aside className="elements-panel w-80 flex flex-col" aria-label="Elements panel">
      {/* Header with close button and title */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <div className="flex items-center gap-3 flex-1">
          <button
            aria-label="Close sidebar"
            className="p-1 hover:bg-gray-100 rounded"
          >
            <X className="w-4 h-4" style={{ color: 'var(--text)' }} />
          </button>
          <h3 className="font-semibold" style={{ color: 'var(--text)' }}>Elements</h3>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab('standard')}
          className={`flex-1 py-2 text-sm font-medium transition-colors ${
            activeTab === 'standard'
              ? 'border-b-2'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          style={{
            borderBottomColor: activeTab === 'standard' ? 'var(--accent)' : 'transparent',
            color: activeTab === 'standard' ? 'var(--text)' : undefined,
          }}
        >
          Standard Fields
        </button>
        <button
          onClick={() => setActiveTab('custom')}
          className={`flex-1 py-2 text-sm font-medium transition-colors ${
            activeTab === 'custom'
              ? 'border-b-2'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          style={{
            borderBottomColor: activeTab === 'custom' ? 'var(--accent)' : 'transparent',
            color: activeTab === 'custom' ? 'var(--text)' : undefined,
          }}
        >
          Custom Fields
        </button>
      </div>

      {/* Search */}
      <div className="relative p-3 border-b border-gray-200">
        <Search
          className="w-4 h-4 absolute left-5 top-1/2 -translate-y-1/2"
          style={{ color: 'var(--muted)' }}
          aria-hidden="true"
        />
        <input
          className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus-ring"
          placeholder="Search"
          aria-label="Search fields"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {filteredGroups.map((group) => {
          const expanded = openGroups[group.key] ?? false;
          return (
            <div key={group.key}>
              <button
                className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-50 transition-colors"
                onClick={() => setOpenGroups((s) => ({ ...s, [group.key]: !expanded }))}
                aria-expanded={expanded}
                aria-controls={`group-${group.key}`}
              >
                <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>
                  {group.title}
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
                  style={{ color: 'var(--muted)' }}
                />
              </button>
              {expanded && (
                <div id={`group-${group.key}`} className="px-2 py-1">
                  <div className="grid grid-cols-2 gap-1">
                    {group.fields.map((field) => (
                      <FieldCheckbox key={field.id} field={field} groupKey={group.key} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default FieldTypesSidebar;
