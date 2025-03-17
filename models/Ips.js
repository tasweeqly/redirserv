module.exports  = (sequelize, DataTypes) => {

    const Ips = sequelize.define('Ips', {
        WhatsNum: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Ips

}