module.exports = (sequelize, DataTypes) => {
    const OrderDetail = sequelize.define('ordeDetail', {
        id:{type:DataTypes.SMALLINT, primaryKey:true, autoIncrement:true},
        quantity:{type:DataTypes.INTEGER, allowNull:false, validate:{notEmpty:true}},
        price:{type:DataTypes.DECIMAL, allowNull:false, validate:{notEmpty:true}}
    });

    return OrderDetail;
}