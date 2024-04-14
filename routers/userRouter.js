
const Router         = require('express');
const router         = new Router();
const controller     = require('../controller/userController');
const roleMiddleware = require('../middleware/roleMiddleware');

router.get('/', roleMiddleware(["ADMIN"]), controller.getUsers); 
router.get('/:userId', roleMiddleware(["ADMIN"]), controller.getUserById);
router.delete('/:userId', roleMiddleware(["ADMIN"]), controller.deleteUser); 

module.exports = router;
