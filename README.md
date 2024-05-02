
# Frontend and Backend Integration Guide

This repository contains the frontend and backend code for a web application built with React.js and Node.js, respectively. This guide will walk you through the setup process and explain how to run both the frontend and backend servers simultaneously.

Clone the repository to your local machine: contain Front end and Server folder(Backend).

### git clone <repository_url>

## Backend Setup


1. Navigate to the backend directory:

### cd server


2. Create a .env file in the backend directory and add the following environment variables:

### MONGO_URI=<your_mongodb_uri>
### SECRET_KEY=<your_secret_key>
### PORT=<port_number>

Replace <your_mongodb_uri> with your MongoDB connection string, <your_secret_key> with any uppercase 32 characters secret key, and <port_number> with the desired port number to run the server.

3. Install dependencies using npm:

### npm install

4. Run the backend server:

### npm run start

This will start the backend server on the specified port.



## Frontend Setup


1.  Navigate to the frontend directory:

### cd frontend

3. Install dependencies using npm:

### npm install

4. Run the frontend server:

### npm run start

This will start the frontend server on port 3000 by default or any port.

## Frontend-Backend Integration

To ensure that the frontend can communicate with the backend, you need to set up a proxy in the frontend's `package.json`file. This allows requests from the frontend to be proxied to the backend during development.

1. Open the frontend/package.json file.
2. Add a proxy field with the backend port number:

### "proxy": "http://localhost:<backend_port>/"


Replace <backend_port> with the port number where your backend server is running (e.g., 5000).

With the proxy set up, any API requests made from the frontend will be directed to the backend server

## Running Frontend and Backend Simultaneously

To run both the frontend and backend servers simultaneously, follow these steps:

1. Start the backend server first using the npm start command in the backend directory.
2. Once the backend server is running, start the frontend server using the npm start command in the frontend directory.

Both servers should now be running concurrently, and you can access the web application by navigating to http://localhost:3000 in your web browser.

## Notes

1. If running the frontend and backend on different ports, ensure that the frontend's proxy is correctly configured to forward requests to the backend server.
2. If encountering any issues, double-check that the MongoDB URI, secret key, and port number in the `.env` file are correctly set.
3. Feel free to reach out to me for further assistance or troubleshooting.
That's it! You're now ready to develop and run the web application with frontend and backend integration. Happy coding!
