import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm"
import { EventModule } from './api/event/event.module';
import { AdminModule } from './api/admin/admin.module';
import { AdminEntity } from './infra/entities/admin.entity';
import { EventEntity } from './infra/entities/event.entity';
import { BasketEntity } from './infra/entities/basket.entity';
import { UserEntity } from './infra/entities/users.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "postgres",
    url: 'postgres://postgres:2002@localhost:5432/event',
    synchronize: true,
    logging: false,
    autoLoadEntities: true,
    entities: [AdminEntity, EventEntity, BasketEntity, UserEntity]
  }), EventModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
