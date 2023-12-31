﻿# NewsSphere Backend

NewsSphere Backend is the server-side component of the NewsSphere project, responsible for handling data related to news articles, user accounts, and interactions.

# Features

- User authentication and authorization
- CRUD operations for news articles
- User-specific saved articles
- RESTful API endpoints
- Error handling and validation

# Installation

1. Clone the repository:

    ``` shell
    git clone https://github.com/Harshdev625/newssphere-backend
    cd newssphere-backend
    ```
2. Install the required dependencies by running npm install:

    ``` shell
    npm install
    ```
3. Create a MongoDB Atlas account and set up a cluster. Here's how you can do it:

    - Go to the MongoDB Atlas website: https://www.mongodb.com/cloud/atlas
    - Sign up for an account if you don't have one, or log in if you do.
    - Create a new project and cluster.
    - Follow the prompts to configure your cluster settings, such as clouprovider and region.
    - Once your cluster is created, you'll get a connection string. This will be used in your backend server.

4. Create a .env file in the root folder of the project and add the following environment variables:
    ``` shell
    MONGODB_URI=YOUR_CONNECTION_STRING
    ```
    Replace YOUR_CONNECTION_STRING with the actual connection string you obtained from MongoDB Atlas.

5. Run the server using :

    ```shell
    nodemon index.js
    ```
6. The backend server is now running on http://localhost:8080.

7. Open MongoDB Compass:

    - Download and install MongoDB Compass: https://www.mongodb.com/try/download/compass
    - Open MongoDB Compass.
    - Connect to your MongoDB Atlas cluster using the connection string.
    - You can now interact with your MongoDB database using the MongoDB Compass GUI.


Make sure to follow each step carefully and replace placeholders with actual values. This guide should help you set up your backend server and connect it to your MongoDB Atlas cluster using MongoDB Compass for database management.

# Contributing
Contributions to the NewsSphere Backend are welcome! If you encounter any bugs, or issues, or have ideas for improvements, please open an issue on the repository. Pull requests with enhancements are also appreciated.

# Tech Stack Used
 - Node.js
 - Express.js
 - MongoDB
Just so you know, the frontend repository [NewsSphere](https://github.com/Harshdev625/NewsSphere) needs to be set up and connected to this backend server for the complete functionality of the application.
