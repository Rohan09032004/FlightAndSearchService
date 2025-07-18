# Welcome to Flights Service
 ## Project Setup
 - clone the project on your local.
 - execute `npm instal` on the same path as of your root directory of the downloaded project.
 - create a `.env` file in the root directory and add the following environment variables.
 - `PORT = 3000`
 - Inside the `sre/config` folder create a new file `config.json` and then add the following piece of json.

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

```

- Once you have added the db config as listed above, go to the src folder and execute `npx sequelize db:create`
and then migrate by running `npx sequelize db:migrate`

```

## DB Design

```

- Airplane Table
- Flight 
- Airpot
- City

- A flight belongs to an airplane but one airplane can be used in multiple flights.
- A city has many airports but one airport belongs to a city.
- One airport can have many flights, but a flight belongs to one airport.

```

##Tables

### City -> id, name, created_at, updated_at.
### Airport -> id, name, address, city_id, created_at, updated_at.
  Relationship -> City haas many airports and airports
  belongs to a city(one to many).
