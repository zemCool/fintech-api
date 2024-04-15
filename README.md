# API Endpoints

## Authentication

#### **POST /api/auth/registration**

Description: Register a new user.

Request body:
```sh
username (string): User's username.
password (string): User's password.
```
Response:
- Success: 200 OK

- Error: 400 Bad Request

#### **POST /api/auth/login**

Description: Log in an existing user.

Request body:
```sh
username (string): User's username.
password (string): User's password.
```
Response:
- Success: 200 OK

- Error: 401 Unauthorized

## Requests

#### **POST /api/requests/**

Description: Add a new financial request.

Authorization: Requires user authentication.

Request body:
```sh
card_name (enum: 'VISA', 'MasterCard'): Type of card.
money_count (number): Amount of money requested.
```
Response:
- Success: 200 OK

- Error: 401 Unauthorized

#### **DELETE /api/requests/:requestId**

Description: Delete a financial request by ID.

Authorization: Requires admin privileges.

Response:
- Success: 200 OK

- Error: 401 Unauthorized

## User Management

#### **GET /api/users/**

Description: Get all users.

Authorization: Requires admin privileges.

Response:
- Success: 200 OK with array of user objects

- Error: 401 Unauthorized

#### **GET /api/users/:userId**

Description: Get a user by ID.

Authorization: Requires admin privileges.

Response:
- Success: 200 OK with user object

- Error: 401 Unauthorized

#### **DELETE /api/users/:userId**

Description: Delete a user by ID.

Authorization: Requires admin privileges.

Response:
- Success: 200 OK

- Error: 401 Unauthorized

# Data Models

## Request
`card_name (enum: 'VISA', 'MasterCard')` : Type of card.

`request_owner_id (string)` : ID of the user who made the request.

`money_count (number)` : Amount of money requested.

`date_of_request (date)` : Date of the request creation.

## Role

`value (string)` : Role value, e.g., 'USER', 'ADMIN'.

## User

`username (string)` : User's username.

`password (string)` : User's password.

`roles (array of strings)` : User's roles.

# Deployment Process

1. Clone this repository to your local machine.
2. Install dependencies using npm install.
3. Set up environment variables for database connection, JWT secret, etc.
4. Run the server using `npm start`.
5. Access the API endpoints using the provided routes.

## Links
[Github][dill]

[Deployment][drf]


[dill]: <https://github.com/zemCool/fintech-api>
[drf]: <https://dashboard.render.com/web/srv-coeefkgl5elc7386kstg/events>
