import { useDroppable } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Input } from 'antd';
import Field from './Field';
import { Cog, GripVertical, Plus } from 'lucide-react';
import { useAppDispatch } from '../../store/hooks';
import { addGroup, updateSectionTitle, updateGroupTitle } from '../../store/slices/formSlice';

interface GroupProps {
  sectionId: string;
  group: any;
  groupId: string;
}

const Group: React.FC<GroupProps> = ({ sectionId, group, groupId }) => {
  const { setNodeRef: setDroppableRef, isOver } = useDroppable({
    id: `drop-${sectionId}-${group.id}`,
  });

  const dispatch = useAppDispatch();

  const fieldIds = group.fields.map((f: any) => f.id);

  return (
    <div
      ref={setDroppableRef}
      className={`rounded-lg mb-4 ${
        isOver ? 'bg-blue-50 border-2 border-blue-300 border-dashed' : 'bg-gray-50'
      }`}
      style={{ minHeight: isOver ? 80 : 120, padding: isOver ? 0 : '12px' }}
    >
      {!isOver && (
        <div>
          <Input
            value={group.title}
            onChange={(e) => dispatch(updateGroupTitle({ id: group.id, title: e.target.value }))}
            placeholder="Group Title"
            className="font-medium text-sm mb-2"
            style={{ border: 'none', boxShadow: 'none', padding: '4px 0', backgroundColor: 'transparent' }}
          />
          {fieldIds.length > 0 ? (
            <SortableContext items={fieldIds} strategy={verticalListSortingStrategy}>
              {group.fields.map((field: any) => (
                <Field key={field.id} field={field} sectionId={sectionId} groupId={groupId} />
              ))}
            </SortableContext>
          ) : (
            <div className="text-sm text-gray-400 text-center py-4">
              Drop fields here
            </div>
          )}
        </div>
      )}
      {isOver && (
        <div className="flex items-center justify-center h-full text-sm text-blue-600 font-medium">
          Drop here to add field
        </div>
      )}
    </div>
  );
};

interface SortableSectionProps {
  section: any;
}

const SortableSection: React.FC<SortableSectionProps> = ({ section }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const dispatch = useAppDispatch();

  const handleAddGroup = () => {
    dispatch(addGroup({ sectionId: section.id }));
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="section-card mb-6 bg-white rounded-lg shadow-sm border border-gray-200"
    >
      <div className="section-title p-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1">
          <div className="drag-handle cursor-grab active:cursor-grabbing" {...listeners} {...attributes}>
            <GripVertical className="w-5 h-5 text-gray-400" />
          </div>
          <Input
            value={section.title}
            onChange={(e) => dispatch(updateSectionTitle({ id: section.id, title: e.target.value }))}
            placeholder="Section Title"
            className="font-semibold"
            style={{ border: 'none', boxShadow: 'none', paddingLeft: 0 }}
          />
        </div>
        <div className="flex items-center gap-3">
          <label className="text-[13px] muted flex items-center gap-2">
            Required
            <button role="switch" aria-checked={false} className="toggle">
              <span className="toggle-knob" />
            </button>
          </label>
          <button aria-label="Section settings" className="ui-btn-outline" style={{ padding: '6px 10px', borderRadius: 8 }}>
            <Cog className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-4">
        {section.groups.map((group: any) => (
          <Group key={group.id} sectionId={section.id} group={group} groupId={group.id} />
        ))}
        <button
          onClick={handleAddGroup}
          className="ui-btn-outline w-full flex items-center justify-center gap-2 mt-2"
        >
          <Plus className="w-4 h-4" />
          Add Group
        </button>
      </div>
    </div>
  );
};

export default SortableSection;