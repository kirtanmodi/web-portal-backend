const dataController = require('./dataController');

describe('Data Controller', () => {
    let originalData;

    beforeEach(() => {
        // Save a copy of the original data for restoration after each test
        originalData = dataController.getAllData();
    });

    afterEach(() => {
        // Restore the original data after each test
        dataController.data = originalData;
    });

    test('should get all data', () => {
        const allData = dataController.getAllData();
        expect(allData).toHaveLength(3);
    });


    test('should create new data', () => {
        const newData = ['4', 'Mark', '40', 'mark@example.com', 'San Francisco'];
        const createdData = dataController.createData(newData);
        expect(createdData).toEqual(newData);
        const allData = dataController.getAllData();
        expect(allData).toHaveLength(4);
    });

    test('should get data by id', () => {
        const data = dataController.getDataById('2');
        expect(data).toEqual({
            id: '2',
            name: 'Jane',
            age: '25',
            email: 'jane@example.com',
            city: 'Los Angeles'
        });
    });

    test('should update data', () => {
        const updatedData = {
            id: '2',
            name: 'Jane Doe',
            age: '30',
            email: 'janedoe@example.com',
            city: 'Los Angeles'
        };
        const result = dataController.updateData(updatedData);
        expect(result).toEqual(updatedData);
        const data = dataController.getDataById('2');
        expect(data).toEqual(updatedData);
    });


    test('should delete data', () => {
        const deletedData = dataController.deleteData('1');
        expect(deletedData).toEqual(['1', 'John', '30', 'john@example.com', 'New York']);
        const allData = dataController.getAllData();
        expect(allData).toHaveLength(2);
    });
});
