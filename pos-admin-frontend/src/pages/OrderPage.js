import React from 'react';
import OrderList from '../components/OrderList';
import { Container, Paper, Typography } from '@mui/material';

const OrderPage = () => {
  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Orders
        </Typography>
        <OrderList />
      </Paper>
    </Container>
  );
};

export default OrderPage;
