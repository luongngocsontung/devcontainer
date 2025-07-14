import { Module } from '@nestjs/common';
import { ScenariosController } from './scenarios.controller';
import { ScenariosService } from './scenarios.service';

@Module({
  controllers: [ScenariosController],
  providers: [ScenariosService],
})
export class ScenariosModule {}
