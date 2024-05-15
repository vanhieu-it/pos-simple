import React, { useState, useEffect } from 'react';
import { getOrderItems, createOrderItem, updateOrderItem, deleteOrderItem } from '../services/api';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Button, TextField, Dialog, DialogActions, DialogContent,
  DialogContentText, DialogTitle, Box, Typography
} from '@mui/material';

const OrderItemList = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [currentOrderItemId, setCurrentOrderItemId] = useState(null);
  const [orderItem, setOrderItem] = useState({ order_id: '', product_id: '', quantity: '' });

  useEffect(() => {
    loadOrderItems();
  }, []);

  const loadOrderItems = async () => {
    try {
      const response = await getOrderItems();
      setOrderItems(response.data);
    } catch (error) {
      console.error('Error fetching order items:', error);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditing(false);
    setOrderItem({ order_id: '', product_id: '', quantity: '' });
  };

  const handleChange = (e) => {
    setOrderItem({ ...orderItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (editing) {
        await updateOrderItem(currentOrderItemId, orderItem);
      } else {
        await createOrderItem(orderItem);
      }
      loadOrderItems();
      handleClose();
    } catch (error) {
      console.error('Error saving order item:', error);
    }
  };

  const handleEdit = (orderItem) => {
    setOrderItem(orderItem);
    setEditing(true);
    setCurrentOrderItemId(orderItem.id);
    handleClickOpen();
  };

  const handleDelete = async (id) => {
    try {
      await deleteOrderItem(id);
      loadOrderItems();
    } catch (error) {
      console.error('Error deleting order item:', error);
    }
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="h6">Order Item List</Typography>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Add Order Item
        </Button>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editing ? 'Edit Order Item' : 'Add Order Item'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {editing ? 'Edit the order item information below.' : 'Enter the new order item information below.'}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="order_id"
            label="Order ID"
            value={orderItem.order_id}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            name="product_id"
            label="Product ID"
            value={orderItem.product_id}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            name="quantity"
            label="Quantity"
            type="number"
            value={orderItem.quantity}
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
              <TableCell>Order ID</TableCell>
              <TableCell>Product ID</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderItems.map((orderItem) => (
              <TableRow key={orderItem.id}>
                <TableCell>{orderItem.id}</TableCell>
                <TableCell>{orderItem.order_id}</TableCell>
                <TableCell>{orderItem.product_id}</TableCell>
                <TableCell>{orderItem.quantity}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(orderItem)}>Edit</Button>
                  <Button onClick={() => handleDelete(orderItem.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrderItemList;
