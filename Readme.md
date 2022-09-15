# Nodejs Backend

# Environment vars
This project uses the following environment variables:

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|CORS           | Cors accepted values            | "3000"      |


# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 14.18.3


### Important setting the file .env

- please copy the contents of the .env.example file and create a new file named .env

- Later you must have a mysql instance with its respective credentials to provide it in the configuration file

-  Obviously the data in the database is not full, at this point you must create new data so that you can display it in the frontend


# Getting started
- Clone the repository
```
git clone  https://github.com/WaynerMoya/food-backend-app.git
```
- Install dependencies
```
cd food-backend-app
npm install
```
- Build and run the project
```
npm start
```

# TypeScript + Node 
The main purpose of this repository is to show a project setup and workflow for writing microservice. The Rest APIs will be using the Swagger (OpenAPI) Specification.


## Getting TypeScript
Add Typescript to project `npm`.
```
npm install -D typescript
```

## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **node_modules**         | Contains all  npm dependencies                                                            |
| **src**                  | Contains  source code that will be compiled to the dist dir                               |
| **src/controllers**      | Controllers define functions to serve various express routes. 
| **src/routes**           | Contain all express routes, separated by module/area of application                       
| **src**/index.ts         | Entry point to express app                                                               |
| package.json             | Contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)   | 
| tsconfig.json            | Config settings for compiling source code only written in TypeScript    
                                     |

## Building the project
### Configuring TypeScript compilation
```json
{
    "compilerOptions": {
        "target": "es6",
        "rootDir": "src",
        "outDir": "build",
        "experimentalDecorators": true, // 👈️ must be enabled
        "emitDecoratorMetadata": true,
        "moduleResolution": "node"
    },
    "include": [
        "src/**/*"
    ],
    "exclude": [
        "node_modules"
    ],
}
