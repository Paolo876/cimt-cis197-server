module.exports = (sequelize, DataTypes) => {
    const CostUnit = sequelize.define("CostUnit", {
        Unit: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    });
    
    return CostUnit;
}