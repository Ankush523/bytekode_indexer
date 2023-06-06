// server.ts
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'contracts',
    password: '050203',
    port: 5432,
});

const app = express();
app.use(cors())
app.use(express.json());

app.post('/contracts', async (req, res) => {
    const { deployedAddress, contractAbi, deploymentChain, apiKey } = req.body;

    // Check if the contract already exists
    const { rowCount } = await pool.query('SELECT 1 FROM contract_details WHERE deployed_address = $1', [deployedAddress]);

    if (rowCount > 0) {
        return res.status(400).json({ message: 'Contract already exists' });
    }

    // Insert the new contract into the database
    const result = await pool.query(
        'INSERT INTO contract_details (deployed_address, contract_abi, deployment_chain, api_key) VALUES ($1, $2, $3, $4)',
        [deployedAddress, contractAbi, deploymentChain, apiKey]
    );

    return res.status(201).json({ message: 'Contract added successfully' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});