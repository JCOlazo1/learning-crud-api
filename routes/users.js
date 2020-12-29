import express from 'express';
import {createUser, getUsers, getSingleUser, deleteUser, updateUser} from '../controllers/users.js';

const router = express.Router();

// Routes: -NOTE- ALL routes in here start at '/users'
router.get('/', getUsers);

// use Postman to check 'Post' requests since browsers can only send 'get' requests
router.post('/', createUser);

// GET Request for a single user:
router.get('/:id', getSingleUser);

// DELETE a specific user:
router.delete('/:id', deleteUser);

// PATCH request to update a user:
router.patch('/:id', updateUser)

export default router;