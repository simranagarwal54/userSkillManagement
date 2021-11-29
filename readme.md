# Workgenius Project 
This repository can be used as a basic sturucture to start off with a simple many-to-many relationship modeling service.

Problem Statement: 
1. I choose a user
2. I attach skill "javascript" to the user
3. I filter the list of users by skill "javascript"
4. I see result 1 row with the user from 2nd step

## APIs

Route to User Service: 
BaseUrl= `http://localhost:8080/api/users/`

-- User Controller--
1. Create: 

    Route: BaseUrl/

    Description: This Api will help create and save a new user in the user table

    curl:

    ```bash
    curl --location --request POST 'http://localhost:8080/api/users/' \
    --header 'Content-Type: application/json' \
    --data-raw '{
    "username": "john Doe",
    "email": "john.doe@gmail.com",
    "password":"test1"
    }'
    ```

    response:
    ```json
    {
        "id": 3,
        "username": "john Doe",
        "email": "john.doe@gmail.com",
        "password": "test1",
        "updatedAt": "2021-11-29T17:26:15.681Z",
        "createdAt": "2021-11-29T17:26:15.681Z"
    }
    ```
2. FindAll: 

    Route: BaseUrl?email={email}

    Description: // Retrieve all User Details along with skills from the database.

    curl:

    ```bash
    http://localhost:8080/api/users?email=john.doe@gmail.comcurl --location --request POST 'http://localhost:8080/api/users/' \
    --header 'Content-Type: application/json' \
    --data-raw '{
    "username": "john Doe",
    "email": "john.doe@gmail.com",
    "password":"test1"
    }'
    ```

    response:
    ```json
    [
    {
        "id": 3,
        "username": "john Doe",
        "email": "john.doe@gmail.com",
        "password": "test1",
        "createdAt": "2021-11-29T17:26:15.000Z",
        "updatedAt": "2021-11-29T17:26:15.000Z",
        "Skills": [
            {
                "name": "test3",
                "description": "test333"
            }
        ]
    }
    ]
    ```
3. FindOne: 

    Route: BaseUrl/{id} here id is the userId

    Description: This Api will retrive the userId and send response based on the userId, which is the primary key of the User table

4. Update:

    Route: BaseUrl/{id} here id is the user id

    Description: Update User Details in the database.

    curl:

    ```bash
    curl --location --request PUT 'http://localhost:8080/api/users/3' \
    --header 'Content-Type: application/json' \
    --data-raw '{
    "username": "john Doe",
    "email": "john.doe@gmail.com",
    "password":"test3"
    }'
    ```

    response:
    ```json
    [
    {
        "id": 3,
        "username": "john Doe",
        "email": "john.doe@gmail.com",
        "password": "test3",
        "createdAt": "2021-11-29T17:26:15.000Z",
        "updatedAt": "2021-11-29T17:26:15.000Z",
        "Skills": [
            {
                "name": "test3",
                "description": "test333"
            }
        ]
    }
    ]
    ```
5. Delete:

    Route: BaseUrl/{id} here id is the user id

    Description: Delete User Details by id in the database.

    curl:

    ```bash
    curl --location --request DELETE 'http://localhost:8080/api/users/3' \
    --data-raw ''
    ```

    response:
    ```json
    "message": "User was deleted successfully!"
    ```
    
------------
Route to Skill Service:

BaseUrl: http://localhost:8080/api/skills

Skill Controller: This has all the same methods and description similar to users

-------------------

Route to User Skill Service: 

BaseUrl: http://localhost:8080/api/userSkill

UserSkill Controller: (This is this controller which has the services of the junction of join table when we want to refer the users by Skill)

1. Create:

    Route: BaseUrl/ 

    Description: Add skill to user based on the skill Id/userId

    curl:

    ```bash
    curl --location --request POST 'http://localhost:8080/api/userSkill/' \
    --header 'Content-Type: application/json' \
    --data-raw '{
    "userId":6,
    "skillId":[16]
    }'
    ```

    response:
    ```json
    {
    "id": 20,
    "userId": 6,
    "skillId": 16,
    "updatedAt": "2021-11-29T18:41:23.149Z",
    "createdAt": "2021-11-29T18:41:23.149Z"
    }
    ```

2. GetUsersBySkill:

    Route: BaseUrl/getUsersBySkill

    Description: Get skill to user based on the skill Id/userId

    curl:

    ```bash
    curl --location --request GET 'http://localhost:8080/api/userSkill/getUsersBySkill?skillId=16' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "userId":6,
        "skillId":[16]
    }'
    ```

    response:
    ```json
     [
        {
        "id": 20,
        "Skill": {
            "name": "Mananger",
            "description": "1 year"
        },
        "User": {
            "username": "Michael Scott",
            "email": "michaelscott@dundermifflin.com"
        }
        }
    ]
    ```
3. Update:

    Route: BaseUrl/{Id} Here id is user-skill table primary key ID

    Description: Update Mapping of skills to user by id

    curl:

    ```bash
   curl --location --request PUT 'http://localhost:8080/api/userSkill/1' \
    --header 'Content-Type: application/json' \
    --data-raw '{
    "userId":1,
    "skillId":2
    }'
    ```

    response:
    ```json
    {
    "message": "Skill was updated successfully."
    }
    ```
Demo

![](Demo/demo.gif)

## About

Frontend is written in 
>>Angular/Typescript

>>using NgBootstrap, Node.js

The frontend has reusable components like Grid, modal, form.
It also has routing link implemented.
Separate user, skill services are defined to call the backend services.


Backend
>> Node.js

>> Express.js

>> Sequelize ORM used with mySql database 

 I have made sure most of the heavy-lifting is done, and you can start off by simply cloning the repo and writing business logic. 
 
 Things I have taken care of:
    
1. Many to many relationship
```js
User.associate = models => {
    User.belongsToMany(models.Skill, {
      through: models.UserSkill,
      foreignKey: 'skillId'
    });
  }

UserSkill.associate = models => {
        UserSkill.belongsTo(models.User, {
        foreignKey: 'userId'
      });
      UserSkill.belongsTo(models.Skill, {
        foreignKey: 'skillId'
      });
```

2. CORS issue: following the microservices architecture, frontend and backend will be hosted at different servers, so when client communicates from different port, it is not an issue. 

------

## Setting up locally

>>Installation

Backend

Install node [here](https://nodejs.org/en/download/)

Install mysql [here](https://dev.mysql.com/downloads/installer/)

with backend as current directory

Install dependencies
```
npm install
```
Run server locally
```bash
npm run serve
```

Server will run on client: 8080
Frontend:

Assuming we already have Node.js from the backend installation

```
npm install -g @angular/cli
```
Clone the repository and do npm install for the dependencies

Run client locally
```
ng serve
```
open your browser on http://localhost:4200/
---------------------
## Enhancements

Unit Tests

Set up different environments with different env files

Setting up db with migration scripts

Authentication & Authorization

deployment script

pagination

Better Error Logs
