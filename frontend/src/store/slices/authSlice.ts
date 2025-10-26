import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

// Configure axios defaults
axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';

interface AuthState {
  user: any | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: false,
  error: null,
};

// Add token to axios headers if it exists
if (initialState.token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${initialState.token}`;
}

export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials: { name: string; email: string; password: string; password_confirmation: string }) => {
    const response = await axios.post('/register', credentials);
    return response.data;
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string }) => {
    const response = await axios.post('/login', credentials);
    return response.data;
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async () => {
    await axios.post('/logout');
  }
);

export const fetchUser = createAsyncThunk(
  'auth/fetchUser',
  async () => {
    const response = await axios.get('/user');
    return response.data;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.data.user;
        state.token = action.payload.data.token;
        localStorage.setItem('token', action.payload.data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.data.token}`;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Registration failed';
      })
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.data.user;
        state.token = action.payload.data.token;
        localStorage.setItem('token', action.payload.data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.data.token}`;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Login failed';
      })
      // Logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
      })
      // Fetch User
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.isAuthenticated = true;
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;

