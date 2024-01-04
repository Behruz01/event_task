import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm"

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "postgres",
    url: 'postgres://postgres:2002@localhost:5432/event',
    synchronize: true,
    logging: false,
    autoLoadEntities: true,
    entities: []
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
