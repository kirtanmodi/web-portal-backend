const fs = require('fs');
const csv = require('csv-parser');

const dataFilePath = 'data/data.csv';
let data = [];

fs.createReadStream(dataFilePath)
    .pipe(csv())
    .on('data', (row) => {
        data.push(row);
    })
    .on('end', () => {
        console.log('CSV file has been loaded.');
    });

function getAllData() {
    return data;
}

function getDataById(id) {
    return data.find((item) => item.id === id);
}

function createData(newData) {
    data.push(newData);
    return newData;
}

function updateData(updatedData) {
    const index = data.findIndex((item) => item.id === updatedData.id);
    if (index !== -1) {
        data[index] = updatedData;
        return updatedData;
    }
    return null;
}

function deleteData(id) {
    const index = data.findIndex((item) => item.id === id);
    if (index !== -1) {
        const deletedItem = data.splice(index, 1)[0];
        return deletedItem;
    }
    return null;
}

module.exports = {
    getAllData,
    getDataById,
    createData,
    updateData,
    deleteData,
};
