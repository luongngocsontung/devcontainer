import { Module } from '@nestjs/common';
import { ScenariosController } from './scenarios.controller';
import { ScenariosService } from './scenarios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scenario } from './scenarios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Scenario])],
  controllers: [ScenariosController],
  providers: [ScenariosService],
})
export class ScenariosModule {}
