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

function saveDataToFile() {
    const lines = ['"id","name","age","email","city"'];
    data.forEach((row) => {
        const values = Object.values(row).map((value) => `"${value}"`);
        lines.push(values.join(','));
    });
    fs.writeFileSync(dataFilePath, lines.join('\n'));
    console.log('Data has been saved to the file.');
}

function getAllData() {
    return data;
}

function getDataById(id) {
    return data.find((item) => item.id === id);
}

function createData(newData) {
    const existingData = data.find((item) => item.id === newData.id);
    if (existingData) {
        return null; // Return null if user with the same ID already exists
    }
    data.push(newData);
    saveDataToFile();
    return newData;
}

function updateData(updatedData) {
    const index = data.findIndex((item) => item.id === updatedData.id);
    if (index !== -1) {
        data[index] = updatedData;
        saveDataToFile();
        return updatedData;
    }
    return null;
}

function deleteData(id) {
    const index = data.findIndex((item) => item.id === id);
    if (index !== -1) {
        const deletedItem = data.splice(index, 1)[0];
        saveDataToFile();
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
