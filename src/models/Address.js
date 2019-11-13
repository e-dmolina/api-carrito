module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define('addresses', {
        id: {type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
        street: {type: DataTypes.STRING, allowNull:false, validate:{notEmpty:true}}
    });

    return Address;
}