const { Sequelize, ModelStatic, DataTypes } = require("sequelize");

/**
 * Constructeur du Modele Artist
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
    const Artist = sequelize.define('Artist', {
        firstname : {
            type : DataTypes.STRING(100),
            allowNull : false,
            validate : {
                // N'autorise pas les ' ou -
                //isAlpha : true,
                notNull : true,
                notEmpty : true,
                len : [1, 100]
            }
        },
        lastname : {
            type : DataTypes.STRING(50),
            allowNull : true,
            validate : {
                //isAlpha : true,
                notEmpty : true,
                len : [1, 50]
            }
        },
        birthdate : {
            type : DataTypes.DATE,
            allowNull : true,
            validate : {
                isDate : true
            }
        },
        deathdate : {
            type : DataTypes.DATE,
            allowNull : true,
            validate : {
                isDate : true,
                customValidator(){
                    if (this.deathdate != null && this.birthdate >= this.deathdate) {
                        throw new Error('La date de naissance doit etre plus petite que la date de mort.')
                    }
                    
                }
            }
        }
    }, {
        tableName : 'Artist',
    });

    return Artist;
}