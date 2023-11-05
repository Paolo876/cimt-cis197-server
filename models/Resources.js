module.exports = (sequelize, DataTypes) => {
    const Resources = sequelize.define("Resources", {
        id: {
            type: DataTypes.UUID,
            defaultValue: sequelize.UUIDV4,
            primaryKey: true,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        capabilities: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        distance: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        cost: {
            type: DataTypes.STRING,
            allowNull: false, 
        },

    }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    });
    

    Resources.associate = models => {

        Resources.belongsTo(models.ResourceFunctions, {
            foreignKey: "PrimaryFunctionId"
        });

        Resources.belongsTo(models.ResourceFunctions, {
            foreignKey: "SecondaryFunctionId",
            constraints: false
        });
        Resources.belongsTo(models.Users, {
            foreignKey: "owner"
        });
    }
    return Resources;
}