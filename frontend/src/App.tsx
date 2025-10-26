import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import { store } from './store/store';
import Login from './pages/Login';
import Register from './pages/Register';
import FormBuilder from './pages/FormBuilder';
import FormsList from './pages/FormsList';
import ProtectedRoute from './components/ProtectedRoute';
import './styles/main.scss';

import 'antd/dist/reset.css';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1890ff',
        },
      }}
    >
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
              path="/builder"
              element={
                <ProtectedRoute>
                  <FormBuilder />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Navigate to="/forms" replace />} />
          </Routes>
        </Router>
      </Provider>
    </ConfigProvider>
  );
}

export default App;
