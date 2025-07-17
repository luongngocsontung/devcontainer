import { Module } from '@nestjs/common';
import { ScenariosController } from './scenarios.controller';
import { ScenariosService } from './scenarios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScenarioSchema } from './scenerios.schema';

@Module({
  imports: [TypeOrmModule.forFeature([ScenarioSchema])],
  controllers: [ScenariosController],
  providers: [ScenariosService],
})
export class ScenariosModule {}
