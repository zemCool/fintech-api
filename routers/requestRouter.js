const express        = require('express');
const controller     = require('../controller/requestController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const requestRouter  = express.Router();

requestRouter.post('/', authMiddleware, controller.addRequest);
requestRouter.delete('/:requestId', roleMiddleware(["ADMIN"]), controller.deleteRequest)

module.exports = requestRouter;
