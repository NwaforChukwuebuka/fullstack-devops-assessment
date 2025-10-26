import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface Field {
  id: string;
  type: 'text' | 'radio' | 'checkbox' | 'file' | 'dropdown';
  label: string;
  placeholder?: string;
  options?: string[];
  required?: boolean;
}

export interface Group {
  id: string;
  title: string;
  fields: Field[];
}

export interface Section {
  id: string;
  title: string;
  groups: Group[];
}

export interface FormState {
  currentForm: {
    id: string | null;
    title: string;
    description: string;
    sections: Section[];
  };
  savedForms: any[];
  loading: boolean;
  error: string | null;
}

const initialState: FormState = {
  currentForm: {
    id: null,
    title: 'Untitled Form',
    description: '',
    sections: [],
  },
  savedForms: [],
  loading: false,
  error: null,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormTitle: (state, action: PayloadAction<string>) => {
      state.currentForm.title = action.payload;
    },
    setFormDescription: (state, action: PayloadAction<string>) => {
      state.currentForm.description = action.payload;
    },
    addSection: (state) => {
      const newSection: Section = {
        id: `section-${Date.now()}`,
        title: 'New Section',
        groups: [],
      };
      state.currentForm.sections.push(newSection);
    },
    updateSectionTitle: (state, action: PayloadAction<{ id: string; title: string }>) => {
      const section = state.currentForm.sections.find(s => s.id === action.payload.id);
      if (section) {
        section.title = action.payload.title;
      }
    },
    removeSection: (state, action: PayloadAction<string>) => {
      state.currentForm.sections = state.currentForm.sections.filter(
        s => s.id !== action.payload
      );
    },
    addGroup: (state, action: PayloadAction<{ sectionId: string }>) => {
      const section = state.currentForm.sections.find(s => s.id === action.payload.sectionId);
      if (section) {
        const newGroup: Group = {
          id: `group-${Date.now()}`,
          title: 'New Group',
          fields: [],
        };
        section.groups.push(newGroup);
      }
    },
    updateGroupTitle: (state, action: PayloadAction<{ id: string; title: string }>) => {
      state.currentForm.sections.forEach(section => {
        const group = section.groups.find(g => g.id === action.payload.id);
        if (group) {
          group.title = action.payload.title;
        }
      });
    },
    removeGroup: (state, action: PayloadAction<{ sectionId: string; groupId: string }>) => {
      const section = state.currentForm.sections.find(s => s.id === action.payload.sectionId);
      if (section) {
        section.groups = section.groups.filter(g => g.id !== action.payload.groupId);
      }
    },
    addField: (
      state,
      action: PayloadAction<{
        sectionId: string;
        groupId: string;
        fieldType: Field['type'];
      }>
    ) => {
      const section = state.currentForm.sections.find(s => s.id === action.payload.sectionId);
      if (section) {
        const group = section.groups.find(g => g.id === action.payload.groupId);
        if (group) {
          const newField: Field = {
            id: `field-${Date.now()}`,
            type: action.payload.fieldType,
            label: getDefaultLabel(action.payload.fieldType),
            options: ['Option 1', 'Option 2'],
          };
          group.fields.push(newField);
        }
      }
    },
    updateField: (state, action: PayloadAction<{ fieldId: string; updates: Partial<Field> }>) => {
      state.currentForm.sections.forEach(section => {
        section.groups.forEach(group => {
          const field = group.fields.find(f => f.id === action.payload.fieldId);
          if (field) {
            Object.assign(field, action.payload.updates);
          }
        });
      });
    },
    removeField: (state, action: PayloadAction<{ sectionId: string; groupId: string; fieldId: string }>) => {
      const section = state.currentForm.sections.find(s => s.id === action.payload.sectionId);
      if (section) {
        const group = section.groups.find(g => g.id === action.payload.groupId);
        if (group) {
          group.fields = group.fields.filter(f => f.id !== action.payload.fieldId);
        }
      }
    },
    reorderSections: (state, action: PayloadAction<Section[]>) => {
      state.currentForm.sections = action.payload;
    },
    reorderFields: (
      state,
      action: PayloadAction<{ sectionId: string; groupId: string; fields: Field[] }>
    ) => {
      const section = state.currentForm.sections.find(s => s.id === action.payload.sectionId);
      if (section) {
        const group = section.groups.find(g => g.id === action.payload.groupId);
        if (group) {
          group.fields = action.payload.fields;
        }
      }
    },
    loadForm: (state, action: PayloadAction<any>) => {
      state.currentForm = action.payload;
    },
    resetForm: (state) => {
      state.currentForm = {
        id: null,
        title: 'Untitled Form',
        description: '',
        sections: [],
      };
    },
  },
});

function getDefaultLabel(type: Field['type']): string {
  const labels = {
    text: 'Text Input',
    radio: 'Radio Button',
    checkbox: 'Checkbox',
    file: 'File Upload',
    dropdown: 'Dropdown',
  };
  return labels[type] || 'Field';
}

export const {
  setFormTitle,
  setFormDescription,
  addSection,
  updateSectionTitle,
  removeSection,
  addGroup,
  updateGroupTitle,
  removeGroup,
  addField,
  updateField,
  removeField,
  reorderSections,
  reorderFields,
  loadForm,
  resetForm,
} = formSlice.actions;

export default formSlice.reducer;

