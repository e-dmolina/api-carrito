module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('products', {
        id:{type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
        nombre:{type: DataTypes.STRING, allowNull:false, validate:{notEmpty:true}},
        precio:{type:DataTypes.DECIMAL, alloNull:false, validate:{notEmpty:true}}
    });

    return Product;
}