module.exports = (sequelize, DataTypes) => {
    const Carrito = sequelize.define('carritos', {
        id:{type:DataTypes.SMALLINT, primaryKey:true, autoIncrement:true},
        cantidad:{type:DataTypes.INTEGER, allowNull:false, validate:{notEmpty:true}}
    });

    return Carrito;
}