// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Routes
router.post('/', userController.createUser);        // Create User
router.get('/', userController.getUsers);           // Read All Users
router.get('/:id', userController.getUserById);     // Read User by ID
router.put('/:id', userController.updateUser);      // Update User
router.delete('/:id', userController.deleteUser);   // Delete User

module.exports = router;
