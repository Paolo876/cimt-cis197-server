module.exports = (sequelize, DataTypes) => {
    const RoleCategories = sequelize.define("RoleCategories", {
        roleDescription: {
            type: DataTypes.STRING,
            allowNull: false,

        }
    }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    });
    
    RoleCategories.associate = models => {
        RoleCategories.hasOne(models.UserRoles, {
            foreignKey: "RoleCategoryId",
        });
    }
    return RoleCategories;
}