# KoinX Assignment - Backend Intern

## Project Overview

This project is a backend application built using Node.js and Express. It interacts with the Ethereum blockchain to fetch user transactions and with CoinGecko to retrieve Ethereum price data. The application provides APIs to calculate user expenses based on their Ethereum transactions and retrieves the current price of Ethereum.

## Deployed Links

- **API Documentation**: [https://koinx-d3ih.onrender.com/api-docs](https://koinx-d3ih.onrender.com/api-docs)
- **API Endpoint**: [https://koinx-d3ih.onrender.com](https://koinx-d3ih.onrender.com)
- **GitHub Repository**: [https://github.com/Utsavrai1/KoinX-Assignment](https://github.com/Utsavrai1/KoinX-Assignment)

## Features

1. **Transaction Fetching**: Retrieves and stores Ethereum transactions for a given user address.
2. **Price Fetching**: Fetches and stores the price of Ethereum every 10 minutes.
3. **Expense Calculation**: Calculates and returns total expenses for a user based on their Ethereum transactions.

## Installation & Setup

### Prerequisites

- Node.js
- Docker (optional, for containerization)
- MongoDB (local or Atlas)
- Etherscan API Key

### Steps to Run Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Utsavrai1/KoinX-Assignment.git
   cd KoinX-Assignment
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Setup environment variables:**

   Create a `.env` file in the root directory with the following:

   ```
   NODE_ENV=development
   PORT=3000
   MONGO_URI=<Your MongoDB URI>
   ETHERSCAN_API_KEY=<Your Etherscan API Key>
   ```

4. **Start the application:**

   ```bash
   npm run dev
   ```

5. **Run using Docker (Optional):**

   - For development:

     ```bash
     npm run docker:dev
     ```

   - For production:

     ```bash
     npm run docker:prod
     ```

## Running Test Cases

To run the test cases for this project, follow these steps:

1. **Install Dependencies**:
   Ensure all required dependencies are installed.

   ```bash
   npm install
   ```

2. **Run the Test Cases**: Execute the test cases by running:

   ```bash
   npm test
   ```

## Task Completion

### Task 1: Fetching Crypto Transactions

- **What I did**: Developed an API endpoint to fetch Ethereum transactions for a given user address using the Etherscan API. I stored these transactions in a MongoDB database, which helps in managing and querying the data efficiently.
- **Endpoint**: `GET /api/v1/transactions/:address`

### Task 2: Fetching Ethereum Prices

- **What I did**: Set up a cron job that runs every 10 minutes to fetch the latest Ethereum price in INR using the CoinGecko API. This price data is stored in MongoDB for further use.
- **Cron Job**: Runs every 10 minutes to ensure the price data is up-to-date.

### Task 3: Calculating User Expenses

- **What I did**: Created an API endpoint that calculates a user's total expenses based on the gas used and gas price from their Ethereum transactions. It also fetches and returns the latest Ethereum price from the database.
- **Formula**: `expense = gasUsed * gasPrice / 1e18`
- **Endpoint**: `GET /api/v1/expenses/:address`

## Industry Standards Followed

- **Docker**: Containerized the application using Docker, making it easy to deploy and scale.
- **Code Organization**: Followed a modular structure with separate files for routes, models, and configuration to maintain clean and scalable code.
- **Environment Variables**: Secured sensitive information using environment variables.
- **Logging**: Added logging in development mode using `morgan` for better debugging.
- **Cron Jobs**: Automated periodic tasks with `node-cron`.
- **API Documentation**: Added Swagger API documentation for better understanding and testing of the API endpoints.
- **Testing**: Added comprehensive test cases for transaction and expense APIs to ensure functionality and reliability.
