import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm"
import { EventModule } from './api/event/event.module';
import { AdminModule } from './api/admin/admin.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "postgres",
    url: 'postgres://postgres:2002@localhost:5432/event',
    synchronize: true,
    logging: false,
    autoLoadEntities: true,
    entities: []
  }), EventModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
