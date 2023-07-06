# Backend Repository

This repository contains the backend code for the web portal built using Node.js and Express. It provides REST-based APIs for performing CRUD operations on a CSV-formatted file stored in the local storage.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/kirtanmodi/web-portal-backend.git
   ```

2. Navigate to the backend directory:

   ```bash
   cd backend
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

   The backend server will start running on port 11000.

## Available APIs

- `GET /` - Retrieves all data from the CSV file.
- `GET /:id` - Retrieves data by ID.
- `POST /` - Creates new data.
- `PUT /:id` - Updates data by ID.
- `DELETE /:id` - Deletes data by ID.

## Testing

Unit tests have been implemented to ensure the correctness of the backend code. To run the tests, use the following command:

```bash
npm test
```

Make sure that the backend server is not running while executing the tests.

---

Frontend Repository README:
