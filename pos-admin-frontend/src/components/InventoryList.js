import React, { useState, useEffect } from 'react';
import { getInventories, createInventory, updateInventory, deleteInventory } from '../services/api';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Button, TextField, Dialog, DialogActions, DialogContent,
  DialogContentText, DialogTitle, Box, Typography
} from '@mui/material';

const InventoryList = () => {
  const [inventories, setInventories] = useState([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [currentInventoryId, setCurrentInventoryId] = useState(null);
  const [inventory, setInventory] = useState({ product_id: '', quantity: '', location: '' });

  useEffect(() => {
    loadInventories();
  }, []);

  const loadInventories = async () => {
    try {
      const response = await getInventories();
      setInventories(response.data);
    } catch (error) {
      console.error('Error fetching inventories:', error);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditing(false);
    setInventory({ product_id: '', quantity: '', location: '' });
  };

  const handleChange = (e) => {
    setInventory({ ...inventory, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (editing) {
        await updateInventory(currentInventoryId, inventory);
      } else {
        await createInventory(inventory);
      }
      loadInventories();
      handleClose();
    } catch (error) {
      console.error('Error saving inventory:', error);
    }
  };

  const handleEdit = (inventory) => {
    setInventory(inventory);
    setEditing(true);
    setCurrentInventoryId(inventory.id);
    handleClickOpen();
  };

  const handleDelete = async (id) => {
    try {
      await deleteInventory(id);
      loadInventories();
    } catch (error) {
      console.error('Error deleting inventory:', error);
    }
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="h6">Inventory List</Typography>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Add Inventory
        </Button>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editing ? 'Edit Inventory' : 'Add Inventory'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {editing ? 'Edit the inventory information below.' : 'Enter the new inventory information below.'}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="product_id"
            label="Product ID"
            value={inventory.product_id}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            name="quantity"
            label="Quantity"
            type="number"
            value={inventory.quantity}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            name="location"
            label="Location"
            value={inventory.location}
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
              <TableCell>Product ID</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inventories.map((inventory) => (
              <TableRow key={inventory.id}>
                <TableCell>{inventory.id}</TableCell>
                <TableCell>{inventory.product_id}</TableCell>
                <TableCell>{inventory.quantity}</TableCell>
                <TableCell>{inventory.location}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(inventory)}>Edit</Button>
                  <Button onClick={() => handleDelete(inventory.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default InventoryList;
