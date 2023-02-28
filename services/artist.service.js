const { ArtistDTO } = require('../dto/artist.dto');
const db = require('../models')



const  artistService = {
    getAll : async (offset, limit) => {

        const { rows, count } = await db.Artist.findAndCountAll({
            distinct : true,
            offset,
            limit
        });

        return {
            artists : rows.map(artist => new ArtistDTO(artist)),
            count
        } 
    },

    getById : async (id) => {
        const artist = await db.Artist.findByPk(id); 

        return artist ? new ArtistDTO(artist) : null; 
        //Si le genre n'est pas undefined, on renvoie le DTO, sinon, on envoie null
    },

    create : async (artistToAdd) => {
        const artist = await db.Artist.create(artistToAdd);
        return artist ? new ArtistDTO(artist) : null;
    },

    update : async (id, artistToUpdate) => {
        const updatedRow = await db.Artist.update(artistToUpdate, {
            where : { id }
        });
       
        return updatedRow[0] === 1; 
    },

    delete : async (id) => {
        const nbDeletedRow = await db.Artist.destroy({
            where : { id }
        });

        return nbDeletedRow === 1; //Est-ce que nbrow supprimées = 1 ? si oui delete réussi, si non delete raté
    }
}


module.exports = artistService;