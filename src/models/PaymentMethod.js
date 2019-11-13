module.exports =  (sequelize, DataTypes) => {
    const PaymentMethod = sequelize.define('paymentMethods', {
        id:{type:DataTypes.SMALLINT, primaryKey:true, autoIncrement:true},
        description:{type:DataTypes.STRING, allowNull:false, validate:{notEmpty:true}}
    });

    return PaymentMethod;
}