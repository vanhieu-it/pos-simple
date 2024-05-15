import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

// Users API
export const getUsers = () => axios.get(`${API_URL}/users`);
export const createUser = (user) => axios.post(`${API_URL}/users`, user);
export const updateUser = (id, user) => axios.put(`${API_URL}/users/${id}`, user);
export const deleteUser = (id) => axios.delete(`${API_URL}/users/${id}`);

// Customers API
export const getCustomers = () => axios.get(`${API_URL}/customers`);
export const createCustomer = (customer) => axios.post(`${API_URL}/customers`, customer);
export const updateCustomer = (id, customer) => axios.put(`${API_URL}/customers/${id}`, customer);
export const deleteCustomer = (id) => axios.delete(`${API_URL}/customers/${id}`);

// Products API
export const getProducts = () => axios.get(`${API_URL}/products`);
export const createProduct = (product) => axios.post(`${API_URL}/products`, product);
export const updateProduct = (id, product) => axios.put(`${API_URL}/products/${id}`, product);
export const deleteProduct = (id) => axios.delete(`${API_URL}/products/${id}`);

// Employees API
export const getEmployees = () => axios.get(`${API_URL}/employees`);
export const createEmployee = (employee) => axios.post(`${API_URL}/employees`, employee);
export const updateEmployee = (id, employee) => axios.put(`${API_URL}/employees/${id}`, employee);
export const deleteEmployee = (id) => axios.delete(`${API_URL}/employees/${id}`);

// Orders API
export const getOrders = () => axios.get(`${API_URL}/orders`);
export const createOrder = (order) => axios.post(`${API_URL}/orders`, order);
export const updateOrder = (id, order) => axios.put(`${API_URL}/orders/${id}`, order);
export const deleteOrder = (id) => axios.delete(`${API_URL}/orders/${id}`);

// Order Items API
export const getOrderItems = () => axios.get(`${API_URL}/order_items`);
export const createOrderItem = (orderItem) => axios.post(`${API_URL}/order_items`, orderItem);
export const updateOrderItem = (id, orderItem) => axios.put(`${API_URL}/order_items/${id}`, orderItem);
export const deleteOrderItem = (id) => axios.delete(`${API_URL}/order_items/${id}`);

// Inventory API
export const getInventories = () => axios.get(`${API_URL}/inventory`);
export const createInventory = (inventory) => axios.post(`${API_URL}/inventory`, inventory);
export const updateInventory = (id, inventory) => axios.put(`${API_URL}/inventory/${id}`, inventory);
export const deleteInventory = (id) => axios.delete(`${API_URL}/inventory/${id}`);
