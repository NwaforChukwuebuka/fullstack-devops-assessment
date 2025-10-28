import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, List, Empty, Spin, Typography } from 'antd';
import { PlusOutlined, FileTextOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { logoutUser } from '../store/slices/authSlice';
import { loadForm } from '../store/slices/formSlice';

const FormsList: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state: any) => state.auth);
  const [forms, setForms] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetchForms();
  }, []);

  const fetchForms = async () => {
    try {
      const response = await axios.get('/forms');
      if (response.data.success) {
        setForms(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching forms:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async (id: string) => {
    try {
      const response = await axios.get(`/forms/${id}`);
      if (response.data.success) {
        dispatch(loadForm(response.data.data));
        navigate(`/builder/${id}`);
      }
    } catch (error) {
      console.error('Error loading form:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/forms/${id}`);
      fetchForms();
    } catch (error) {
      console.error('Error deleting form:', error);
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="forms-list-container">
      <div className="forms-header-bar">
        <Typography.Title level={1} className="forms-title">My Forms</Typography.Title>
        <div className="forms-header-actions">
          <Typography.Text className="welcome-text">Welcome, {user?.name}</Typography.Text>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </div>

      <div className="forms-toolbar">
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => navigate('/builder')}
        >
          Create New Form
        </Button>
        <Button style={{ marginLeft: 8 }} onClick={() => navigate('/style-guide')}>
          Style Guide
        </Button>
      </div>

      {forms.length === 0 ? (
        <div className="forms-empty-card">
          <Card>
            <Empty
              description="No forms yet. Create your first form!"
              image={Empty.PRESENTED_IMAGE_SIMPLE}
            >
              <Button type="primary" onClick={() => navigate('/builder')}>
                Create Form
              </Button>
            </Empty>
          </Card>
        </div>
      ) : (
        <List
          className="forms-grid"
          grid={{ gutter: 16, column: 3 }}
          dataSource={forms}
          renderItem={(form) => (
            <List.Item>
              <Card
                hoverable
                actions={[
                  <Button
                    key="edit"
                    type="text"
                    icon={<EditOutlined />}
                    onClick={() => handleEdit(form.id)}
                  >
                    Edit
                  </Button>,
                  <Button
                    key="delete"
                    type="text"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => handleDelete(form.id)}
                  >
                    Delete
                  </Button>,
                ]}
              >
                <Card.Meta
                  avatar={<FileTextOutlined />}
                  title={form.title}
                  description={form.description || 'No description'}
                />
              </Card>
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default FormsList;

