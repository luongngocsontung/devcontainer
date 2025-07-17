import { Body, Controller, Get, Post } from '@nestjs/common';
import { ScenariosService } from './scenarios.service';
import { Scenario } from './scenarios.entity';

@Controller('scenarios')
export class ScenariosController {
  constructor(private scenariosService: ScenariosService) {}

  @Get()
  getAllScenarios() {
    return this.scenariosService.findAll();
  }

  @Post()
  createScenario(@Body() scenario: Scenario) {
    return this.scenariosService.create(scenario);
  }
}
