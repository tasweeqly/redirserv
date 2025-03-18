module.exports  = (sequelize, DataTypes) => {

    const Users = sequelize.define('Users', {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    Users.associate = (models) => {
        Users.hasMany(models.WhatsNums, {
            onDelete: 'cascade'
        })
        Users.hasMany(models.Ips, {
            onDelete: 'cascade'
        })
    }
    return Users

}