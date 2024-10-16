import pool from './pool.js';

const getAllCategories = async (req, res) => {
    const strQuery = `SELECT * FROM categories`;
    try {
        const { rows } = await pool.query(strQuery);
        res.status(200).send({
            success: 1,
            data: rows,
        });
    } catch (err) {
        res.status(400).send({
            success: 0,
        });
    }
};
const addCategory = async (req, res) => {
    const { name } = req.body;
    const strQuery = `
        INSERT INTO categories (name)
        VALUES ($1)`;
    try {
        const { rows } = await pool.query(strQuery, [name]);
        res.status(200).send({
            success: 1,
            data: rows,
        });
    } catch (err) {
        res.status(400).send({
            success: 0,
        });
    }
};
const updateCategory = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const strQuery = `
        UPDATE categories
        SET name = $1
        WHERE id = $2`;
    try {
        const { rows } = await pool.query(strQuery, [ name, id ]);
        res.status(200).send({
            success: 1,
            data: rows,
        });
    } catch (err) {
        res.status(400).send({
            success: 0,
        })
    }
};
const deleteCategory = async (req, res) => {
    const { id } = req.params;
    const strQuery = `DELETE FROM categories WHERE id = $1`;
    try {
        const { rows } = await pool.query(strQuery, [ id ]);
        res.status(200).send({
            success: 1,
            data: rows,
        });
    } catch (err) {
        res.status(400).send({
            success: 0,
        })
    }
};

const getAllItems = async (req, res) => {
    const strQuery = `SELECT * FROM items`;
    try {
        const { rows } = await pool.query(strQuery);
        res.status(200).send({
            success: 1,
            data: rows,
        });
    } catch (err) {
        res.status(400).send({
            success: 0,
        });
    }
};
const addItem = async (req, res) => {
    const { name } = req.body;
    const strQuery = `
        INSERT INTO items (name)
        VALUES ($1)`;
    try {
        const { rows } = await pool.query(strQuery, [name]);
        res.status(200).send({
            success: 1,
            data: rows,
        });
    } catch (err) {
        res.status(400).send({
            success: 0,
        });
    }
};
const updateItem = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const strQuery = `
        UPDATE items
        SET name = $1
        WHERE id = $2`;
    try {
        const { rows } = await pool.query(strQuery, [ name, id ]);
        res.status(200).send({
            success: 1,
            data: rows,
        });
    } catch (err) {
        res.status(400).send({
            success: 0,
        })
    }
};
const deleteItem = async (req, res) => {
    const { id } = req.params;
    const strQuery = `DELETE FROM items WHERE id = $1`;
    try {
        const { rows } = await pool.query(strQuery, [ id ]);
        res.status(200).send({
            success: 1,
            data: rows,
        });
    } catch (err) {
        res.status(400).send({
            success: 0,
        })
    }
};
export default {
    getAllCategories,
    addCategory,
    updateCategory,
    deleteCategory,

    getAllItems,
    addItem,
    updateItem,
    deleteItem,
};