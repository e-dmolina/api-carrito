module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('orders', {
        id:{type:DataTypes.SMALLINT, primaryKey:true, autoIncrement:true},
        total:{type:DataTypes.DECIMAL, allowNull:false, validate:{notEmpty:true}}
    });

    return Order;
}