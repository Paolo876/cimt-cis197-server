
module.exports = (sequelize, DataTypes) => {

    const Users =  sequelize.define("Users", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        displayName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    })

    Users.associate = (models) => {
        Users.hasOne(models.UserRoles, {
            foreignKey: "username",
            onDelete: "cascade"
        })
        Users.hasMany(models.Resources, {
            foreignKey: "owner",
            onDelete: "cascade"
        })

    }

    return Users;
}