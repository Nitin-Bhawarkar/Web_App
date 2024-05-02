
# Frontend and Backend Integration Guide

This repository contains the frontend and backend code for a web application built with React.js and Node.js, respectively. This guide will walk you through the setup process and explain how to run both the frontend and backend servers simultaneously.

Clone the repository to your local machine: contain the Front end and Server folder(Backend).

`git clone <repository_url>`

## Backend Setup


1. Navigate to the backend directory:

`cd server`


2. Create a .env file in the backend directory and add the following environment variables:

`MONGO_URI=<your_mongodb_uri>`
`SECRET_KEY=<your_secret_key>`
`PORT=<port_number>`

Replace <your_mongodb_uri> with your MongoDB connection string, <your_secret_key> with any uppercase 32 characters secret key, and <port_number> with the desired port number to run the server.

3. Install dependencies using npm:

`npm install`

4. Run the backend server:

`npm run start`

This will start the backend server on the specified port.


## Frontend Setup


1.  Navigate to the frontend directory:

`cd frontend`

3. Install dependencies using npm:

`npm install`

4. Run the frontend server:

`npm run start`

This will start the frontend server on port 3000 by default or any port.

## Frontend-Backend Integration

To ensure that the frontend can communicate with the backend, you need to set up a proxy in the frontend's `package.json`file. This allows requests from the frontend to be proxied to the backend during development.

1. Open the frontend/package.json file.
2. Add a proxy field with the backend port number:

`"proxy": "http://localhost:<backend_port>/"`


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
That's it! You're now ready to develop and run the web application with front-end and back-end integration. Happy coding!

## Before Login 
### 1. Home Page
![Before_login Home Page](https://github.com/Nitin-Bhawarkar/Web_App/assets/50537129/da46a308-3b31-4915-b62f-f676e5784991)

### 2. Navbar
![Before_login Home Page -Navbar](https://github.com/Nitin-Bhawarkar/Web_App/assets/50537129/c770234e-7d26-476a-87d5-a637af27f90d)

### 3. Contact Page
![Bfore login contact page](https://github.com/Nitin-Bhawarkar/Web_App/assets/50537129/8cff351e-9109-45d6-a465-60e8733627fb)

### 3. Registration Page

Here, we add all the required credentials. After hitting the register. The user is registered in the MongoDB database.

![signup](https://github.com/Nitin-Bhawarkar/Web_App/assets/50537129/0b51632e-504f-4145-9136-c5eb9148ef8e)

### 4. Login Page
![signin](https://github.com/Nitin-Bhawarkar/Web_App/assets/50537129/1d024cea-18b1-423a-b6ae-83cb8c481e87)

## After Login 

### 1. After Entering login credentials

After entering the correct login credentials user will log in site. Poppul has shown login successful.

![login_cred](https://github.com/Nitin-Bhawarkar/Web_App/assets/50537129/630df3d8-c9a9-4dab-8482-a90fe3f7e44f)

### 2. Home Page

![login_homepage](https://github.com/Nitin-Bhawarkar/Web_App/assets/50537129/5737715c-922e-4568-9225-9df3c48eb208)

### 3. About Page

In the About Us page user details are fetched from the database.

![login_about](https://github.com/Nitin-Bhawarkar/Web_App/assets/50537129/360a0602-9d31-4c80-b5c7-1b19844525d7)

### 4. Contact Page
In contact us after login we can send a message which is directly saved in database
![login contact](https://github.com/Nitin-Bhawarkar/Web_App/assets/50537129/75703cef-4a8c-42d3-a6e7-81da5d4be24a)







