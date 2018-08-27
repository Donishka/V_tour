var express = require('express');
var router = express.Router();

var ctrlUsers = require('../controllers/userController.js');

router
  .route('/users')
  .get(ctrlUsers.usersGetAll)
  .post(ctrlUsers.usersAddNew);


router
  .route('/users/:userID')
  .get(ctrlUsers.usersGetOne)
  .put(ctrlUsers.usersUpdateOne)
  .delete(ctrlUsers.usersDeleteOne);

module.exports = router;