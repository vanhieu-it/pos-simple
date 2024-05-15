import React from 'react';
import CustomerList from '../components/CustomerList';
import { Container, Paper, Typography } from '@mui/material';

const CustomerPage = () => {
  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Customers
        </Typography>
        <CustomerList />
      </Paper>
    </Container>
  );
};

export default CustomerPage;
