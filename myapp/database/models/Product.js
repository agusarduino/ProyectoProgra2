module.exports = function(sequelize, dataTypes) {

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

    
    return Usuario;
}

