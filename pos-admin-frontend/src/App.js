import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserPage from './pages/UserPage';
import CustomerPage from './pages/CustomerPage';
import ProductPage from './pages/ProductPage';
import EmployeePage from './pages/EmployeePage';
import OrderPage from './pages/OrderPage';
import OrderItemPage from './pages/OrderItemPage';
import InventoryPage from './pages/InventoryPage';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              POS Admin
            </Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/users">Users</Button>
            <Button color="inherit" component={Link} to="/customers">Customers</Button>
            <Button color="inherit" component={Link} to="/products">Products</Button>
            <Button color="inherit" component={Link} to="/employees">Employees</Button>
            <Button color="inherit" component={Link} to="/orders">Orders</Button>
            <Button color="inherit" component={Link} to="/order-items">Order Items</Button>
            <Button color="inherit" component={Link} to="/inventory">Inventory</Button>
          </Toolbar>
        </AppBar>
        <Container>
          <Routes>
            <Route path="/users" element={<UserPage />} />
            <Route path="/customers" element={<CustomerPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/employees" element={<EmployeePage />} />
            <Route path="/orders" element={<OrderPage />} />
            <Route path="/order-items" element={<OrderItemPage />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/" element={
              <Typography variant="h4" component="h1" gutterBottom style={{ textAlign: 'center', padding: '20px', marginTop: '20px' }}>
                Welcome to POS Admin
              </Typography>
            } />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
