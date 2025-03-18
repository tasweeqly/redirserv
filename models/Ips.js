module.exports  = (sequelize, DataTypes) => {

    const Ips = sequelize.define('Ips', {
        Ip: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Ips

}