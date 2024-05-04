const { getAll, create, getOne, remove, update  } = require('../controllers/form.controllers');
const express = require('express');

const formRouter = express.Router();

formRouter.route("/users")
		.get(getAll)
        .post(create);    
        
formRouter.route("/users/:id")
  .get(getOne)
  .delete(remove)
  .put(update);



module.exports = formRouter;