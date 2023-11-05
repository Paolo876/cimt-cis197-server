module.exports = (sequelize, DataTypes) => {

    const IncidentCategories =  sequelize.define("IncidentCategories", {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            unique: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },{
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    }
    )

    // IncidentCategories.associate = (models) => {
    //     IncidentCategories.belongsTo(models.Users, {
    //         foreignKey: "UserId",
    //     })
    // }

    return IncidentCategories;
}