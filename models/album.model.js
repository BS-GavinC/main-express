const { Sequelize, ModelStatic, DataTypes } = require("sequelize");

/**
 * Constructeur du Modele Album
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
    const Album = sequelize.define('Album', {
        title : {
            type : DataTypes.STRING(50),
            allowNull : false,
            validate : {
                notNull : true, //null
                notEmpty : true, //''
                notContains : '/'
            }
        },
        cover : {
            type : DataTypes.STRING,
            allowNull : true,
            validate : {
                notEmpty : true,
                // Regex qui n'autorise que les path : '/monImage.png'
                // is : /^(\/[^\/]+){0,2}\/?$/,

                // custom validator qui demande que le nom de l'album soit le nom de la photo
                // customValidator() {
                //     console.log(this.title);
                //     if (!this.cover.includes(this.title)) {
                //         throw new Error('Le titre doit etre contenu dans le nom de la photo.');
                //     }
                // }
            }
        }
    }, {
        tableName : 'Album',
    });

    return Album;
}