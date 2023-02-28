const { AlbumDTO } = require('../dto/album.dto');
const db = require('../models')



const albumService = {
    getAll : async (offset, limit) => {

        const { rows, count } = await db.Album.findAndCountAll({
            distinct : true,
            offset,
            limit
        });

        return {
            albums : rows.map(album => new AlbumDTO(album)),
            count
        } 
    },

    getById : async (id) => {
        const album = await db.Album.findByPk(id); 

        return album ? new AlbumDTO(album) : null; 
        //Si le genre n'est pas undefined, on renvoie le DTO, sinon, on envoie null
    },

    create : async (albumToAdd) => {
        const album = await db.Album.create(albumToAdd);
        return album ? new AlbumDTO(album) : null;
    },

    update : async (id, albumToUpdate) => {
        const updatedRow = await db.Album.update(albumToUpdate, {
            where : { id }
        });
       
        return updatedRow[0] === 1; 
    },

    delete : async (id) => {
        const nbDeletedRow = await db.Album.destroy({
            where : { id }
        });

        return nbDeletedRow === 1; //Est-ce que nbrow supprimées = 1 ? si oui delete réussi, si non delete raté
    }
}


module.exports = albumService;