import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { useLocation, useParams } from 'react-router-dom';
import models from '../../modelData/models';
import './TopBar.css';

function TopBar() {
  const location = useLocation();
  const params = useParams();
  const [context, setContext] = useState('');

  useEffect(() => {
    const path = location.pathname;

    if (path.startsWith('/photos/')) {
      const user = models.userModel(params.userId);
      setContext(`Photos of ${user.first_name} ${user.last_name}`);
    } else if (path.startsWith('/users/') && params.userId) {
      const user = models.userModel(params.userId);
      setContext(`${user.first_name} ${user.last_name}`);
    } else {
      setContext('');
    }
  }, [location, params]);

  return (
    <AppBar position="absolute">
      <Toolbar>
        <Typography variant="h6" className="topbar-left">
          Your Name
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Typography variant="h6" className="topbar-right">
          {context}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
