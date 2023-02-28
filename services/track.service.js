const { TrackDTO } = require('../dto/track.dto');
const { Genre, Album, Artist } = require('../models');
const db = require('../models')



const trackService = {
    getAll: async (offset, limit) => {

        const { rows, count } = await db.Track.findAndCountAll({
            distinct: true,
            offset,
            limit,
            //TODO rajouter genre
            include: [Genre, Album, Artist]
            //TODO rajouter albums
            //TODO rajouter artists
        });

        console.log(rows);

        return {
            tracks: rows.map(track => new TrackDTO(track)),
            count
        }
    },

    getById: async (id) => {
        const track = await db.Track.findByPk(id, {
            //TODO rajouter genre
            //TODO rajouter albums 
            //TODO rajouter artists
            //include : [ 'Genre', 'Album']
            include: [Genre, Album, Artist]
            //On inclut via le Genre (Model) et le Album (Model) les données sur LE genre et les données sur LES albums
            //Comme notre model Genre est relié au model Track via une One to Many 
            // Fera automatiquement un objet Genre : { id : '' , name : ''} (au singulier)
            //Comme notre model Album est relié au model Track via une Many to Many
            // Fera automatiquement un tableau Albums : [ { id : '', title : '', cover : '', createdAt : '', updatedAt : ''}, {}] composé des albums tels qu'ils sont dans le model
            //Comme notre model Artist est relié au model Track via une Many to Many
            // Fera automatiquement un tableau Artists : [ { id : '', firstname : '', lastname : '', createdAt : '', updatedAt : ''}, {}] composé des albums tels qu'ils sont dans le model
        });

        return track ? new TrackDTO(track) : null;
        //Si le genre n'est pas undefined, on renvoie le DTO, sinon, on envoie null
    },

    create: async (trackToAdd) => {
        //trackToAdd = data envoyée en post (actuellement via insomnia)
        //trackToAdd.title
        //trackToAdd.duration
        //trackToAdd.GenreId
        //trackToAdd.albums
        //trackToAdd.artists

        //TODO créer une transaction pour pouvoir faire plusieurs actions db et rollback si pb
        //Ajout de la transaction -> Sécurité pour s'assurer que toutes les opérations en DB à venir soient réalisée ou aucune
        const transaction = await db.sequelize.transaction()

        let track;
        try {

            //Pour rajouter le genre à la track, il suffit, de rajouter dans le body GenreId : value
            track = await db.Track.create(trackToAdd, { transaction });

            //#region Explication fonctions add autogénérées par Sequelize
            //Sequelize, à partir des relations qu'on lui a renseigné et des models qu'on lui a fourni nous a créée 3 méthodes
            //A partir d'un Album ou d'un Artist -> Lui ajouter toutes les tracks qui lui sont liées
            //Album.addTrack()
            //Artist.addTrack()
            //A partir d'une Track :
            // -> lui ajouter tous les albums qui lui sont liée
            //Track.addAlbum()
            // -> lui ajouter tous les artists qui lui sont liés
            //Track.addArtist()
            //#endregion
            //TODO ajouter liens albums
            await track.addAlbum(trackToAdd.albums, { transaction })

            //TODO ajouter liens artists
            //Pour chacun des artists reçus
            for(const artist of trackToAdd.artists) {
                await track.addArtist(artist.id, {through : { feat : artist.feat },  transaction })
            }           

            //Validation des modifications en DB
            await transaction.commit();

            //Récupérer en db la track avec artists et albums
            const addedTrack = await db.Track.findByPk(track.id, {
                include: [Genre, Album, Artist]
            });

            return addedTrack ? new TrackDTO(addedTrack) : null;
        }
        catch (err) {
            //Retour à l'état initial -> rollback
            await transaction.rollback();
            return null;
        }


    },

    update: async (id, trackToUpdate) => {
        const updatedRow = await db.Track.update(trackToUpdate, {
            where: { id }
        });

        return updatedRow[0] === 1;
    },

    delete: async (id) => {
        const nbDeletedRow = await db.Track.destroy({
            where: { id }
        });

        return nbDeletedRow === 1; //Est-ce que nbrow supprimées = 1 ? si oui delete réussi, si non delete raté
    }
}


module.exports = trackService;