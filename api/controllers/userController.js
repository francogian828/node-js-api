// controllers/userController.js
const User = require('../models/user');

// Create User (POST)
exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send({ error: 'Invalid data' });
    }
};

// Read all Users (GET)
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch users' });
    }
};

// Read a single User by ID (GET)
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send({ error: 'User not found' });
        res.send(user);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch user' });
    }
};

// Update User (PUT)
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user) return res.status(404).send({ error: 'User not found' });
        res.send(user);
    } catch (error) {
        res.status(400).send({ error: 'Failed to update user' });
    }
};

// Delete User (DELETE)
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).send({ error: 'User not found' });
        res.send({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).send({ error: 'Failed to delete user' });
    }
};
