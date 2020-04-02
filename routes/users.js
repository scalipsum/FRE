const express = require('express');
const router = express.Router();

const controller = require('../controllers/users');

// Middleware: /api/users/
router.get('/', controller.getAllUsers);
router.get('/get', controller.getSingleUser);
router.post('/register', controller.registerUser);
router.post('/login', controller.loginUser);
router.patch('/update', controller.updateUser);
router.delete('/delete', controller.deleteUser);

module.exports = router;
