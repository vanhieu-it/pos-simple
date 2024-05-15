import React, { useState, useEffect } from 'react';
import { getOrders, createOrder, updateOrder, deleteOrder } from '../services/api';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Button, TextField, Dialog, DialogActions, DialogContent,
  DialogContentText, DialogTitle, Box, Typography
} from '@mui/material';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [currentOrderId, setCurrentOrderId] = useState(null);
  const [order, setOrder] = useState({ customer_id: '', order_date: '', total_amount: '' });

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const response = await getOrders();
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditing(false);
    setOrder({ customer_id: '', order_date: '', total_amount: '' });
  };

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (editing) {
        await updateOrder(currentOrderId, order);
      } else {
        await createOrder(order);
      }
      loadOrders();
      handleClose();
    } catch (error) {
      console.error('Error saving order:', error);
    }
  };

  const handleEdit = (order) => {
    setOrder(order);
    setEditing(true);
    setCurrentOrderId(order.id);
    handleClickOpen();
  };

  const handleDelete = async (id) => {
    try {
      await deleteOrder(id);
      loadOrders();
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="h6">Order List</Typography>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Add Order
        </Button>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editing ? 'Edit Order' : 'Add Order'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {editing ? 'Edit the order information below.' : 'Enter the new order information below.'}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="customer_id"
            label="Customer ID"
            value={order.customer_id}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            name="order_date"
            label="Order Date"
            type="date"
            value={order.order_date}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            name="total_amount"
            label="Total Amount"
            type="number"
            value={order.total_amount}
            onChange={handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            {editing ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Customer ID</TableCell>
              <TableCell>Order Date</TableCell>
              <TableCell>Total Amount</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer_id}</TableCell>
                <TableCell>{order.order_date}</TableCell>
                <TableCell>{order.total_amount}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(order)}>Edit</Button>
                  <Button onClick={() => handleDelete(order.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrderList;
