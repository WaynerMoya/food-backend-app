
/* Importing the Dish class from the dish.entity.ts file. */
import { Dish } from "../entity/dish.entity"

/* Importing the AppDataSource class from the data-source.ts file. */
import { AppDataSource } from "../data-source"

/* Importing the Response and Request objects from the express module. */
import {
    Response,
    Request
} from 'express'

export const DishController = {

    /* This function will be used to get all dishes in database an return to the frontend */
    getAllDishes: async (req: Request, res: Response) => {

        try {

            /* Getting the repository of the Dish entity. */
            const dishRepository = AppDataSource.getRepository(Dish)

            /* Getting all the dishes from the database. */
            const allDishes = await dishRepository.find()


            /* Checking if the dishes were found. If not, it will return a JSON object with the message
            and success in false. */
            if (!allDishes) {
                return res.status(404).json({
                    message: 'Dishes was not founded',
                    success: false
                })
            }

            /* Returning a JSON object with the message, dishes and success. */
            return res.status(200).json({
                message: 'dishes searched successfully',
                dishes: allDishes,
                success: true
            })

        } catch (error) {

            /* Returning a JSON object with the message and success. */
            return res.status(500).json({
                message: error?.message || 'Error to get dishes',
                success: false
            })

        }
    }

}
