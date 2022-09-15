/* Importing the Entity, PrimaryGeneratedColumn, and Column decorators from the typeorm library. */
import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from "typeorm"

/* The Dish class is an entity that has a name, temperature, kind, price, image, and description */
@Entity()
export class Dish {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    temperature: string

    @Column()
    kind: string

    @Column()
    price: string

    @Column()
    image: string

    @Column()
    description: string
}