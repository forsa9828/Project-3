module.exports = function (sequelize, DataTypes) {
    var PTO = sequelize.define("pto", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            msg: 'Please enter your first name'
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            msg: 'Please enter your last name'
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        startTime: {
            type: DataTypes.STRING,
            allowNull: false
        },
        endTime: {
            type: DataTypes.STRING,
            allowNull: false
        },
        approved: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        pending: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }
    });
    return PTO;
};