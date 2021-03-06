module.exports = function(sequelize, DataTypes) {
    var Availability = sequelize.define("availability", {
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
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        startTime: {
            type: DataTypes.STRING,
            allowNull: false
        },
        endTime: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Availability;
};