/* Importing the DataSource class from the typeorm package. */
import { DataSource } from "typeorm"

/* Importing the Dish class from the dish.entity.ts file. */
import { Dish } from "./entity/dish.entity"

/* Defining the type of database and the port number. */
const RDS_TYPE = "mysql"
const RDS_PORT = 3306

/* Getting the environment variables from the .env file. */
const RDS_HOSTNAME = process.env.RDS_HOSTNAME
const RDS_USERNAME = process.env.RDS_USERNAME 
const RDS_PASSWORD = process.env.RDS_PASSWORD
const RDS_DATABASE = process.env.RDS_DATABASE

/* Creating a new DataSource object. */
export const AppDataSource = new DataSource({
    type: RDS_TYPE,
    host: RDS_HOSTNAME,
    port: RDS_PORT,
    username: RDS_USERNAME,
    password: RDS_PASSWORD,
    database: RDS_DATABASE,
    synchronize: true,
    logging: true,
    entities: [Dish],
    subscribers: [],
    migrations: [],
})

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))