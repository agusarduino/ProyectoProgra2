module.exports = function (sequelize, dataTypes) {

    /* alias */
    let alias = "Usuario";

    /* configuracion de las columnas */
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        contrasena: {
            type: dataTypes.STRING
        }
    }

    /* config de la tabla */
    let config = {
        tableName: "usuarios",
        timestamps: false,
        underscored: false
    }

    /* definir el modelo */

    let Usuario = sequelize.define(alias, cols, config)

    Usuario.associate = function (models) {
        Usuario.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "id_usuario"
        })
    }

    return Usuario;
};

