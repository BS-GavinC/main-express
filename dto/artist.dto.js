

class ArtistDTO {
    constructor({ id, firstname, lastname, birthdate, deathdate }) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname ?? null; //Coalesce
        this.birthdate = birthdate ?? null;
        this.deathdate = deathdate ?? null;
    }
}

class ArtistTrackDTO {
    constructor({ id, firstname, lastname, MM_Artist_Track }) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname ?? null; //Coalesce
        this.feat = MM_Artist_Track ? MM_Artist_Track.feat : null
    }
}


// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing

module.exports = { ArtistDTO, ArtistTrackDTO }