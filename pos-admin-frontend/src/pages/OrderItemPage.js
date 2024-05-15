import React from 'react';
import OrderItemList from '../components/OrderItemList';
import { Container, Paper, Typography } from '@mui/material';

const OrderItemPage = () => {
  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Order Items
        </Typography>
        <OrderItemList />
      </Paper>
    </Container>
  );
};

export default OrderItemPage;
