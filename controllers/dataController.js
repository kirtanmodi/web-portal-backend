let data = require('../data/data.csv').split('\n').slice(1).map(row => row.split(','));

function getAllData() {
  return data;
}

function getDataById(id) {
  return data.find(item => item[0] === id);
}

function createData(newData) {
  data.push(newData);
  return newData;
}

function updateData(updatedData) {
  const index = data.findIndex(item => item[0] === updatedData[0]);
  if (index !== -1) {
    data[index] = updatedData;
    return updatedData;
  }
  return null;
}

function deleteData(id) {
  const index = data.findIndex(item => item[0] === id);
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
