import { Repository } from "typeorm";
import { UserEntity } from "../entities/users.entity";

export type UserRepo = Repository<UserEntity>