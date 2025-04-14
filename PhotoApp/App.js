import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { Grid } from '@mui/material';

import TopBar from './components/TopBar/TopBar';
import UserList from './components/UserList/UserList';
import UserDetail from './components/UserDetail/UserDetail';
import UserPhotos from './components/UserPhotos/UserPhotos';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <UserList />
          </Grid>
          <Grid item xs={9}>
            <Routes>
              <Route path="/" element={<Navigate to="/users" replace />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/users/:userId" element={<UserDetail />} />
              <Route path="/photos/:userId" element={<UserPhotos />} />
            </Routes>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}

export default App;
