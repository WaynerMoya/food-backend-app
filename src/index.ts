/* This is importing the express module. */
import * as express from 'express'

/* This is importing the cors module. */
import * as cors from 'cors'

/* This is a way to set the port number. */
const PORT: String = process.env.PORT || "3001"

/* This is a way to set the environment variable. */
const ENV: String = process.env.ENV || "local"

/* This is importing the dish.route.ts file. */
import routeDish from './routes/dish.route'

/* Creating an instance of the express module. */
const app = express()

/* This is a whitelist of domains that are allowed to make requests to the server. */
const whitelist = [
    "http://localhost:3000",
    "http://empowerment-labs-web-app.s3-website-us-east-1.amazonaws.com",
    "http://empowerment-labs-web-app.s3-website-us-east-1.amazonaws.com/*"
]

/* This is a whitelist of domains that are allowed to make requests to the server. */
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    credentials: true,
}

/* This is a whitelist of domains that are allowed to make requests to the server. */
app.use(cors(corsOptions))

/* This is a middleware that parses the body of the request and makes it available on the request
object. */
app.use(express.json())

/* This is a way to set the route. */
app.use('/dish', routeDish)

/* This is a way to set the port number. */
app.listen(PORT, () => {
    console.log(`Server is running on the port ${PORT}`)
})

