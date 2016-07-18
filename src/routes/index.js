'use strict';

import express from 'express';
import MoviesController from '../controllers/movies';

const router = express.Router();
const movies = new MoviesController();

router.get('/movies',   movies.getAll);
router.post('/movies',  movies.add);

export default router;
