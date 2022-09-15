/* Importing the express module from the node_modules folder. */
import * as express from 'express'

/* Creating a new route object. */
const routeDish = express.Router()

/* Importing the DishController class from the DishController file. */
import { DishController } from '../controllers/DishController'

/* This is a route that is used to get all dishes in database */
routeDish.get('/get-all-dishes', DishController.getAllDishes)

/* Exporting the route variable to be used in the index.js file. */
export default routeDish;