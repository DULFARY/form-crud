const express = require('express');
const formRouter = require('./form.router');
const router = express.Router();

// colocar las rutas aquí
router.use(formRouter);


module.exports = router;