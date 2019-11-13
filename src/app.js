const express = require('express');
const cors = require('cors');
const app = express();
const AuthToken = require('./middlewares/AuthToken');

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(AuthToken);
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/login', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/products', require('./routes/products'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/addresses', require('./routes/addresses'));
app.use('/api/roles', require('./routes/roles'));
app.use('/api/products', require('./routes/products'));
app.use('/api/paymentMethods', require('./routes/paymentMethods'));
app.use('/api/orderDetails', require('./routes/orderDetails'));

module.exports = app;