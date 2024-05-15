import React from 'react';
import InventoryList from '../components/InventoryList';
import { Container, Paper, Typography } from '@mui/material';

const InventoryPage = () => {
  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Inventory
        </Typography>
        <InventoryList />
      </Paper>
    </Container>
  );
};

export default InventoryPage;
