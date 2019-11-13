module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('users', {
        id: {type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
        firstname: {type: DataTypes.STRING, allowNull:false, validate:{notEmpty:true}} ,
        lastname: {type: DataTypes.STRING, allowNull:false, validate:{notEmpty:true}},
        email: {type: DataTypes.STRING, allowNull:false, validate:{notEmpty:true}},
        pass: {type: DataTypes.STRING, unique:true, allowNull:false, validate:{notEmpty:true}},
        telephone: {type: DataTypes.STRING, allowNull:false, validate:{notEmpty:true}},
        lastLogin: {type: DataTypes.DATE, defaultValue: DataTypes.fn('now')}
      });

      return User;
}



