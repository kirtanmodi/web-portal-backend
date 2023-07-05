const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.get('/', (req, res) => {
    const allData = dataController.getAllData();
    res.json(allData);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const data = dataController.getDataById(id);
    if (!data) {
        return res.status(404).json({ error: 'Data not found.' });
    }
    res.json(data);
});

router.post('/', (req, res) => {
    const newData = req.body;
    const createdData = dataController.createData(newData);
    res.json(createdData);
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    updatedData[0] = id; // Ensure the ID from the URL is used
    const result = dataController.updateData(updatedData);
    if (!result) {
        return res.status(404).json({ error: 'Data not found.' });
    }
    res.json(result);
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const deletedData = dataController.deleteData(id);
    if (!deletedData) {
        return res.status(404).json({ error: 'Data not found.' });
    }
    res.json(deletedData);
});

module.exports = router;
