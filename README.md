# Welcome to Flights Service
 ## Project Setup
 - clone the project on your local
 - execute `npm instal` on the same path as of your root directory of the downloaded project
 - create a `.env` file in the root directory and add the following environment variables
 - `PORT = 3000`
 - Inside the `sre/config` folder create a new file `config.json` and then add the following piece of json

 ```

 {
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}


```
- Once you have added the db config as listed above, go to the src folder and execute `npx sequelize db:create`
and then migrate `npx sequelize db:migrate`

```