module.exports  = (sequelize, DataTypes) => {

    const WhatsNums = sequelize.define('WhatsNums', {
        WhatsNum: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    WhatsNums.associate = (models) => {
        WhatsNums.hasMany(models.Ips, {
            onDelete: 'cascade'
        })
    }
    return WhatsNums

}