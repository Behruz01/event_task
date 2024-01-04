import { Repository } from "typeorm";
import { EventEntity } from "../entities/event.entity";

export type EventRepo = Repository<EventEntity>