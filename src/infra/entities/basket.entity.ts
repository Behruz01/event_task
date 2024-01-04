import { Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { UserEntity } from "./users.entity";
import { EventEntity } from "./event.entity";


@Entity({ name: "basket" })
export class BasketEntity extends BaseEntity {
    @ManyToOne(() => UserEntity, (user) => user.basket)
    user: UserEntity

    @ManyToOne(() => EventEntity, (event) => event.basket)
    event: EventEntity
}