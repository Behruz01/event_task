import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { BasketEntity } from "./basket.entity";


@Entity({ name: "users" })
export class UserEntity extends BaseEntity {
    @Column()
    username: string

    @Column()
    password: string

    @OneToMany(() => BasketEntity, (basket) => basket.user)
    basket: BaseEntity[]
}