const express = require('express');
const {MovieResources, GenreResources, UserResources} = require('../resources');
const router = express.Router();

router.use('/', MovieResources);
router.use('/', GenreResources);
router.use('/', UserResources);

module.exports = router;