const { GenreDTO } = require('../dto/genre.dto');
const db = require('../models')


const genreService = {
    getAll : async (offset, limit) => {
        //Récupération des genres, tels qu'ils sont en db
        //const genres = await db.Genre.findAll();
        //Avec la méthode findAndCountAll, on obtiendra un object avec les lignes (rows) et le count(toutes les lignes de la table)
        const { rows, count } = await db.Genre.findAndCountAll({
            distinct : true,
            offset : offset, //offset : 12 ou offset : offset -> simplifé en offset
            limit : limit
        });

        //Transformation en GenreDTO
        return {
            genres : rows.map(genre => new GenreDTO(genre)),
            count
        } 
    },

    getById : async (id) => {
        //const genre = await db.Genre.findOne({ id }); //Recherche via un where
        const genre = await db.Genre.findByPk(id); //Recherche directement sur la primary key

        return genre ? new GenreDTO(genre) : null; 
        //Si le genre n'est pas undefined, on renvoie le DTO, sinon, on envoie null
    },

    create : async (genreToAdd) => {
        const genre = await db.Genre.create(genreToAdd);
        return genre ? new GenreDTO(genre) : null;
    },

    update : async (id, genreToUpdate) => {
        const updatedRow = await db.Genre.update(genreToUpdate, {
            where : { id }
        });
        // updateRow est un tableau qui contient 
        // - dans la première case, le nombre de lignes affectées
        // - dans la deuxième case, les lignes affectées
        return updatedRow[0] === 1; //Est-ce que nb row affectées = 1 ? si oui update réussi, si non update raté
    },

    delete : async (id) => {
        const nbDeletedRow = await db.Genre.destroy({
            where : { id }
        });

        return nbDeletedRow === 1; //Est-ce que nbrow supprimées = 1 ? si oui delete réussi, si non delete raté
    }
}


module.exports = genreService;