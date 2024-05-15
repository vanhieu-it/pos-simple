const express = require('express');
const router = express.Router();
const { User, Customer, Product, Employee, Order, OrderItem, Inventory } = require('./models');

// CRUD cho bảng Users
router.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.post('/users', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

router.put('/users/:id', async (req, res) => {
  const user = await User.update(req.body, { where: { id: req.params.id } });
  res.json(user);
});

router.delete('/users/:id', async (req, res) => {
  const user = await User.destroy({ where: { id: req.params.id } });
  res.json(user);
});

// CRUD cho bảng Customers
router.get('/customers', async (req, res) => {
  const customers = await Customer.findAll();
  res.json(customers);
});

router.post('/customers', async (req, res) => {
  const customer = await Customer.create(req.body);
  res.json(customer);
});

router.put('/customers/:id', async (req, res) => {
  const customer = await Customer.update(req.body, { where: { id: req.params.id } });
  res.json(customer);
});

router.delete('/customers/:id', async (req, res) => {
  const customer = await Customer.destroy({ where: { id: req.params.id } });
  res.json(customer);
});

// CRUD cho bảng Products
router.get('/products', async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

router.post('/products', async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

router.put('/products/:id', async (req, res) => {
  const product = await Product.update(req.body, { where: { id: req.params.id } });
  res.json(product);
});

router.delete('/products/:id', async (req, res) => {
  const product = await Product.destroy({ where: { id: req.params.id } });
  res.json(product);
});

// CRUD cho bảng Employees
router.get('/employees', async (req, res) => {
  const employees = await Employee.findAll();
  res.json(employees);
});

router.post('/employees', async (req, res) => {
  const employee = await Employee.create(req.body);
  res.json(employee);
});

router.put('/employees/:id', async (req, res) => {
  const employee = await Employee.update(req.body, { where: { id: req.params.id } });
  res.json(employee);
});

router.delete('/employees/:id', async (req, res) => {
  const employee = await Employee.destroy({ where: { id: req.params.id } });
  res.json(employee);
});

// CRUD cho bảng Orders
router.get('/orders', async (req, res) => {
  const orders = await Order.findAll();
  res.json(orders);
});

router.post('/orders', async (req, res) => {
  const order = await Order.create(req.body);
  res.json(order);
});

router.put('/orders/:id', async (req, res) => {
  const order = await Order.update(req.body, { where: { id: req.params.id } });
  res.json(order);
});

router.delete('/orders/:id', async (req, res) => {
  const order = await Order.destroy({ where: { id: req.params.id } });
  res.json(order);
});

// CRUD cho bảng OrderItems
router.get('/order_items', async (req, res) => {
  const orderItems = await OrderItem.findAll();
  res.json(orderItems);
});

router.post('/order_items', async (req, res) => {
  const orderItem = await OrderItem.create(req.body);
  res.json(orderItem);
});

router.put('/order_items/:id', async (req, res) => {
  const orderItem = await OrderItem.update(req.body, { where: { id: req.params.id } });
  res.json(orderItem);
});

router.delete('/order_items/:id', async (req, res) => {
  const orderItem = await OrderItem.destroy({ where: { id: req.params.id } });
  res.json(orderItem);
});

// CRUD cho bảng Inventory
router.get('/inventory', async (req, res) => {
  const inventories = await Inventory.findAll();
  res.json(inventories);
});

router.post('/inventory', async (req, res) => {
  const inventory = await Inventory.create(req.body);
  res.json(inventory);
});

router.put('/inventory/:id', async (req, res) => {
  const inventory = await Inventory.update(req.body, { where: { id: req.params.id } });
  res.json(inventory);
});

router.delete('/inventory/:id', async (req, res) => {
  const inventory = await Inventory.destroy({ where: { id: req.params.id } });
  res.json(inventory);
});

module.exports = router;
