import express from 'express'
import db from './queries.js';

const app = express()

// ---------- API ----------
// categories
app.get('/categories', db.getAllCategories);
app.post('/categories', db.addCategory);
app.put('/categories/:id', db.updateCategory);
app.delete('/categories/:id', db.deleteCategory);
// items
app.get('/items', db.getAllItems);
app.post('/items', db.addItem);
app.put('/items/:id', db.updateItem);
app.delete('/items/:id', db.deleteItem);

const { PORT } = process.env
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})