import React from 'react';
import EmployeeList from '../components/EmployeeList';
import { Container, Paper, Typography } from '@mui/material';

const EmployeePage = () => {
  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Employees
        </Typography>
        <EmployeeList />
      </Paper>
    </Container>
  );
};

export default EmployeePage;
