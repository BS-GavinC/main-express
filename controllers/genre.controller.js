const { Request, Response } = require('express');
const genreService = require('../services/genre.service');
const { SuccessArrayResponse, SuccessResponse } = require('../utils/success.response');

const genreController = {

    /** 
     * Get All
     * @param {Request} req
     * @param {Response} res
     */
    getAll : async (req, res) => {
        //res.sendStatus(501); // 501 : Not Implemented (La route existe mais ne renvoie pas encore de résultat, elle est en cours de construction)

        //AVANT middleware pagination
        // //Récupération dans la query, des propriétés limit et offset
        // console.log(req.query);
        // const offset = req.query.offset || 0; //Si offset n'a pas été fourni (undefined), si c'est une chaine vide, si c'est null, on prendra la valeur 0, sinon on prend la valeur de offset
        // const limit = req.query.limit || 50; 

        //AVEC middleware pagination
        //On récupère les propriétés offset et limit présentes dans pagination ajouté à la requête par notre middleware
        const { offset, limit } = req.pagination;

        //On fournit maintenant offset et limit à notre getAll pour qu'il puisse les utiliser dans la requête
        const { genres, count } = await genreService.getAll(offset, limit);
        //200 - Ok (Tout s'est bien passé)
        res.status(200).json(new SuccessArrayResponse(genres, count));
    },

    /** 
     * Get By Id
     * @param {Request} req
     * @param {Response} res
     */
    getById : async (req, res) => {
        //res.sendStatus(501);

        //Récupération de l'id dans la requête
        const { id } = req.params;

        const genre = await genreService.getById(id)

        //Vérifier si genre est null
        if(!genre) {
            //Si pas de genre récupéré -> erreur 404
            res.sendStatus(404);
            return;
        }
        //Si on a bien récup un genre
        res.status(200).json(new SuccessResponse(genre));
    },

    /** 
     * Create
     * @param {Request} req
     * @param {Response} res
     */
    create : async (req, res) => {
        //res.sendStatus(501);

        //Récupération des données du genre qu'on veut créer
        const data = req.body; 
        //TODO -> Mettre en place un middleware qui valide ces données
        
        const genre = await genreService.create(data)

        //On va aller modifier la response, pour ajouter le lien vers la requête sur le genre qui vient d'être crée (getById)
        res.location('/genre/' + genre.id);

        //201 - Created (Ok tout s'est bien passé et on a fait une création)
        res.status(201).json(new SuccessResponse(genre, 201))
    },

    /** 
     * Update
     * @param {Request} req
     * @param {Response} res
     */
    update : async (req, res) => {
        //res.sendStatus(501);

        //Récupération de l'id
        const { id } = req.params;

        //Récupération du body
        const data = req.body;

        const isUpdated = await genreService.update(id, data);
        //Si l'update n'a pas eu lieu, id non trouvé
        if(!isUpdated) {
            res.sendStatus(404);
            return;
        }
        //204 - No Content (Ok tout s'est bien passé et on n'a pas de contenu à renvoyer)
        res.sendStatus(204)
    },

    /** 
     * Delete
     * @param {Request} req
     * @param {Response} res
     */
    delete : async (req, res) => {
        //res.sendStatus(501);

        const { id } = req.params;
        const isDeleted = await genreService.delete(id);

        if(!isDeleted) {
            res.sendStatus(404);
            return;
        }
        
        res.sendStatus(204);
    }
}

module.exports = genreController;