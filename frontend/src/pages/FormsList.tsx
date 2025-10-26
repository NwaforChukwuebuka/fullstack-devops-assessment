import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, List, Empty, Spin } from 'antd';
import { PlusOutlined, FileTextOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { logoutUser } from '../store/slices/authSlice';

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
      <div className="header">
        <h1>My Forms</h1>
        <div className="header-actions">
          <span>Welcome, {user?.name}</span>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </div>

      <div className="content">
        <div className="toolbar">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => navigate('/builder')}
          >
            Create New Form
          </Button>
        </div>

        {forms.length === 0 ? (
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
        ) : (
          <List
            grid={{ gutter: 16, column: 3 }}
            dataSource={forms}
            renderItem={(form) => (
              <List.Item>
                <Card
                  hoverable
                  actions={[
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
    </div>
  );
};

export default FormsList;

