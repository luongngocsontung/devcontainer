import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { ScenariosService } from './scenarios.service';
import type { CreateScenarioDto } from '@playstation/shared';
import { createScenarioSchema } from '@playstation/shared';
import { ZodValidationPipe } from '../pipes/zod.pipe';

@Controller('scenarios')
export class ScenariosController {
  constructor(private scenariosService: ScenariosService) {}

  @Get()
  getAllScenarios() {
    return this.scenariosService.findAll();
  }

  @Post()
  @UsePipes(new ZodValidationPipe(createScenarioSchema))
  createScenario(@Body() scenario: CreateScenarioDto) {
    return this.scenariosService.create(scenario);
  }
}
