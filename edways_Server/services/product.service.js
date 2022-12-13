const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const moment = require('moment');

async function getMultiple(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT ProductId, Name, Description, Type, CreatedBy, CreatedOn, UpdatedBy, UpdatedOn 
    FROM products LIMIT ${offset},${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = { page };

    return {
        data,
        meta
    }
}

async function create(product) {
    const result = await db.query(
        `INSERT INTO products (Name, Description, Type, CreatedBy) VALUES ("${product.Name}", "${product.Description}", "${product.Type}", "${1}")`
    );

    let message = 'Error while creating a Product';

    if (result.affectedRows) {
        message = 'Product added successfully';
    }

    const res = await db.query(`SELECT * FROM products WHERE 'ProductId'= LAST_INSERT_ID()`);
    var obj = res.find(x => x.ProductId === result.insertId);
    return obj;
}

module.exports = {
    getMultiple,
    create
}