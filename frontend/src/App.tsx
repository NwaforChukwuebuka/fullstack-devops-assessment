import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigProvider, App as AntApp } from 'antd';
import { store } from './store/store';
import Login from './pages/Login';
import Register from './pages/Register';
import FormBuilder from './pages/FormBuilder';
import FormsList from './pages/FormsList';
import ProtectedRoute from './components/ProtectedRoute';
import StyleGuide from './pages/StyleGuide';
import './styles/main.scss';
import './styles/antd-fixes.css';
import './index.css';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1890ff',
          colorSuccess: '#52c41a',
          colorWarning: '#faad14',
          colorError: '#ff4d4f',
          colorInfo: '#1890ff',
          borderRadius: 6,
        },
        components: {
          Button: {
            paddingInline: 16,
          },
          Card: {
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
          },
          Input: {
            borderRadius: 6,
          },
        },
      }}
    >
      <AntApp>
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/forms"
                element={
                  <ProtectedRoute>
                    <FormsList />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/builder/:id?"
                element={
                  <ProtectedRoute>
                    <FormBuilder />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/style-guide"
                element={
                  <ProtectedRoute>
                    <StyleGuide />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Navigate to="/forms" replace />} />
            </Routes>
          </Router>
        </Provider>
      </AntApp>
    </ConfigProvider>
  );
}

export default App;
