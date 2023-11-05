module.exports = (sequelize, DataTypes) => {
    const ResourceFunctions = sequelize.define("ResourceFunctions", {
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false, 
    });
    
    ResourceFunctions.associate = models => {
        ResourceFunctions.hasOne(models.Resources, {
            foreignKey: "PrimaryFunctionId"
        })
        ResourceFunctions.hasOne(models.Resources, {
            foreignKey: "SecondaryFunctionId",
            constraints: false
        })
    }
    return ResourceFunctions;
}