# Product CRUD API

## Overview
This is a RESTful API built with Node.js and Express.js that allows users to perform CRUD (Create, Read, Update, Delete) operations on products.

## Features
- Create a new product
- Retrieve all products
- Retrieve a single product by ID
- Update a product by ID
- Delete a product by ID

## Technologies Used
- Node.js
- Express.js
- TypeScript (optional)
- Nodemon (for development)
- Body-parser

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/akack/product-crud-api.git
   ```
2. Navigate into the project directory:
   ```bash
   cd product-crud-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Server

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

## API Endpoints

### 1. Get All Products
```http
GET /products
```
**Response:**
```json
[
  {
    "id": 1,
    "name": "Product A",
    "price": 100,
    "category": "Electronics"
  }
]
```

### 2. Get Product by ID
```http
GET /products/:id
```
**Response:**
```json
{
  "id": 1,
  "name": "Product A",
  "price": 100,
  "category": "Electronics"
}
```

### 3. Create a New Product
```http
POST /products
```
**Request Body:**
```json
{
  "name": "Product B",
  "price": 150,
  "category": "Home"
}
```
**Response:**
```json
{
  "id": 2,
  "name": "Product B",
  "price": 150,
  "category": "Home"
}
```

### 4. Update a Product by ID
```http
PUT /products/:id
```
**Request Body:**
```json
{
  "name": "Updated Product",
  "price": 200,
  "category": "Furniture"
}
```
**Response:**
```json
{
  "id": 1,
  "name": "Updated Product",
  "price": 200,
  "category": "Furniture"
}
```

### 5. Delete a Product by ID
```http
DELETE /products/:id
```
**Response:**
```json
{
  "message": "Product deleted successfully"
}
```

## Environment Variables
Create a `.env` file in the root directory and add the following variables:
```
PORT=7000
```

## License
This project is licensed under the MIT License.

## Author
Your Name - [GitHub Profile](https://github.com/akack)

