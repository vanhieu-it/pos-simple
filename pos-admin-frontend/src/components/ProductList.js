import React, { useState, useEffect } from 'react';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../services/api';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Button, TextField, Dialog, DialogActions, DialogContent,
  DialogContentText, DialogTitle, Box, Typography
} from '@mui/material';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);
  const [product, setProduct] = useState({ name: '', price: '', stock: '', supplier_id: '' });

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditing(false);
    setProduct({ name: '', price: '', stock: '', supplier_id: '' });
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (editing) {
        await updateProduct(currentProductId, product);
      } else {
        await createProduct(product);
      }
      loadProducts();
      handleClose();
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleEdit = (product) => {
    setProduct(product);
    setEditing(true);
    setCurrentProductId(product.id);
    handleClickOpen();
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      loadProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="h6">Product List</Typography>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Add Product
        </Button>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editing ? 'Edit Product' : 'Add Product'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {editing ? 'Edit the product information below.' : 'Enter the new product information below.'}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            value={product.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            name="price"
            label="Price"
            type="number"
            value={product.price}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            name="stock"
            label="Stock"
            type="number"
            value={product.stock}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            name="supplier_id"
            label="Supplier ID"
            value={product.supplier_id}
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
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Supplier ID</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{product.supplier_id}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(product)}>Edit</Button>
                  <Button onClick={() => handleDelete(product.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductList;
