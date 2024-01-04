import { Column, Entity, OneToMany, Timestamp } from "typeorm";
import { BaseEntity } from "./base.entity";
import { BasketEntity } from "./basket.entity";


@Entity({ name: "events" })
export class EventEntity extends BaseEntity {
    @Column()
    start_date: Timestamp

    @Column()
    end_date: Timestamp

    @Column()
    event_name: string

    @Column()
    event_desc: string

    @OneToMany(() => BasketEntity, (basket) => basket.event)
    basket: BaseEntity[]
}