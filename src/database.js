const Sequelize = require('sequelize');

const UserModel = require('./models/User');
const AddressModel = require('./models/Address');
const RolModel = require('./models/Roles');
const ProductModel = require('./models/Products');
const CarritoModel = require('./models/Carrito');
const PaymentMethodModel = require('./models/PaymentMethod');
const OrderModel = require('./models/Order');
const OrderDetailModel = require('./models/OrderDetail');

// cadena de conexion
const DB_URL = 'mysql://root:Soledad_14@localhost:3306/focacciadbmysql';

// instancia de BD
const sequelize = new Sequelize(DB_URL);

// Importo los modelos
const User = UserModel(sequelize, Sequelize);
const Address = AddressModel(sequelize, Sequelize);
const Rol = RolModel(sequelize, Sequelize);
const Product = ProductModel(sequelize, Sequelize);
const Carrito = CarritoModel(sequelize, Sequelize);
const PaymentMethod = PaymentMethodModel(sequelize, Sequelize);
const Order = OrderModel(sequelize, Sequelize);
const OrderDetail = OrderDetailModel(sequelize,Sequelize);

// Relacion 1 a muchos User x Address
User.hasMany(Address);  
Address.belongsTo(User);
// Relacion 1 a muchos Rol x User
Rol.hasMany(User);
User.belongsTo(Rol);
// Relacion 1 a muchos Carrito x Products
Product.hasMany(Carrito);
Carrito.belongsTo(Product);
// Relacion 1 a muchos Carrito x User
User.hasMany(Carrito);
Carrito.belongsTo(Product);
// Relacion 1 a muchos PaymentMethod x Order
PaymentMethod.hasMany(Order);
Order.belongsTo(PaymentMethod);
// Relacion 1  a muchos User x Order
User.hasMany(Order);
Order.belongsTo(User);
// Relacion 1  a muchos Adrress x Order
Address.hasMany(Order);
Order.belongsTo(Address);
// Relacion 1  a muchos OrderDetail x Order
Order.hasMany(OrderDetail);
OrderDetail.belongsTo(Order);
// Relacion 1  a muchos OrderDetail x Product
Product.hasMany(OrderDetail);
OrderDetail.belongsTo(Product);


sequelize.sync()
  .then(() => console.log('Tablas creadas'))

module.exports = {
  User,
  Address,
  Rol,
  Product,
  PaymentMethod,
  Order,
  OrderDetail
};

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('La conexión ha sido establecida satisfactoriamente.');
//   })
//   .catch(err => {
//     console.error('No se conectó:', err);
//   });


