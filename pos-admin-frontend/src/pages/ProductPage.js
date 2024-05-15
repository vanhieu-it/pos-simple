import React from 'react';
import ProductList from '../components/ProductList';
import { Container, Paper, Typography } from '@mui/material';

const ProductPage = () => {
  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Products
        </Typography>
        <ProductList />
      </Paper>
    </Container>
  );
};

export default ProductPage;
