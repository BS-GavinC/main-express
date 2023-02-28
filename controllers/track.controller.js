const { Request, Response } = require('express');
const trackService = require('../services/track.service');
const { SuccessArrayResponse, SuccessResponse } = require('../utils/success.response');


const trackController = {

    /** 
     * Get All
     * @param {Request} req
     * @param {Response} res
     */
    getAll : async (req, res) => {
        const { offset, limit } = req.pagination;
        const { tracks , count } = await trackService.getAll(offset, limit);
        res.status(200).json(new SuccessArrayResponse( tracks , count)); 
    },

    /** 
     * Get By Id
     * @param {Request} req
     * @param {Response} res
     */
    getById : async (req, res) => {
        const { id } = req.params;
        const track = await trackService.getById(id);
        if(!track) {
            res.sendStatus(404);
            return;
        }
        res.status(200).json(new SuccessResponse(track));
    },

    /** 
     * Create
     * @param {Request} req
     * @param {Response} res
     */
    create : async (req, res) => {
        const data = req.body;
        const track = await trackService.create(data);
        res.location('/track/'+ track.id);
        res.status(201).json(new SuccessResponse(track, 201));
    },

    /** 
     * Update
     * @param {Request} req
     * @param {Response} res
     */
    update : async (req, res) => {
        const { id } = req.params;
        const data = req.body;

        const updated = await trackService.update(id, data);
        if(!updated) {
            res.sendStatus(404);
            return;
        }
        res.sendStatus(204);
    },

    /** 
     * Delete
     * @param {Request} req
     * @param {Response} res
     */
    delete : async (req, res) => {
        const { id } = req.params;
        const deleted = await trackService.delete(id);
        if(!deleted) {
            res.sendStatus(404);
            return;
        }
        res.sendStatus(204);
    }
}

module.exports = trackController;