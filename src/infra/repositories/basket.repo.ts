import { Repository } from "typeorm";
import { BasketEntity } from "../entities/basket.entity";

export type BasketRepo = Repository<BasketEntity>