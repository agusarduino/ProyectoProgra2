module.exports = function (sequelize, dataTypes) {

    /* alias */
    let alias = "Producto";

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
        descripcion: {
            type: dataTypes.STRING
        },
        urlImagen: {
            type: dataTypes.STRING
        },
        id_usuario: {
            type: dataTypes.INTEGER
        }
    }

    /* config de la tabla */
    let config = {
        tableName: "productos",
        timestamps: true,
        underscored: false
    }

    /* definir el modelo */

    let Producto = sequelize.define(alias, cols, config)

    Producto.associate = function (models) {
        Producto.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "id_usuario"
        })
    }

    return Producto;
};

