import express from 'express';
import { getTodo, addTodo, getTodoById, editTodo, deleteTodo } from '../controller/user-controller.js';

const router = express.Router();

router.get('/', getTodo);
router.post('/add', addTodo);
router.get('/:id', getTodoById);
router.put('/:id', editTodo);
router.delete('/:id', deleteTodo);

export default router;