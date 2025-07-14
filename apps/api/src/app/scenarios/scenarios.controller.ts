import { Controller, Get } from '@nestjs/common';

@Controller('scenarios')
export class ScenariosController {
  @Get()
  getScenarios() {
    return {
      data: [
        { id: 1, name: 'Scenario 1' },
        { id: 2, name: 'Scenario 2' },
        { id: 3, name: 'Scenario 3' },
      ],
    };
  }
}
