const { AlbumDTO } = require("./album.dto");
const { ArtistTrackDTO } = require("./artist.dto");

class TrackDTO {
    constructor({ id, title, duration, Genre, Albums, Artists }) {
        this.id = id;
        this.title = title;
        this.duration = duration;
        //TODO rajouter le genre
        this.genre = Genre;
        //TODO rajouter la liste des albums
        //this.albums = Albums //albums sera un tableau qui contiendra TOUTES les infos possibles en db sur albums
        this.albums = Albums ? Albums.map(album => new AlbumDTO(album)) : []; //albums sera un tableau qui ne contiendra que les infos prévues par notre AlbumDTO
        //TODO rajouter la liste des artistes
        //this.artists = Artists;
        this.artists = Artists ? Artists.map(artist => new ArtistTrackDTO(artist)) : [];
    }
}


module.exports = { TrackDTO }