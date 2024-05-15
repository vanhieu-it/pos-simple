import React from 'react';
import UserList from '../components/UserList';
import { Container, Paper, Typography } from '@mui/material';

const UserPage = () => {
  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Users
        </Typography>
        <UserList />
      </Paper>
    </Container>
  );
};

export default UserPage;
