module.exports = (sequelize, DataTypes) => {
    const UserRoles = sequelize.define("UserRoles", {
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    });
    

    UserRoles.associate = models => {

        UserRoles.belongsTo(models.RoleCategories, {
            foreignKey: "RoleCategoryId"
        })
    }
    return UserRoles;
}