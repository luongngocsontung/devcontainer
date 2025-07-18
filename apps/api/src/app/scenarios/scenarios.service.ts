import { Injectable } from '@nestjs/common';
import { Scenario } from './scenarios.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateScenarioDto } from '@playstation/shared';

@Injectable()
export class ScenariosService {
  constructor(
    @InjectRepository(Scenario)
    private scenarioRepository: Repository<Scenario>
  ) {}

  async findAll(): Promise<Scenario[]> {
    return this.scenarioRepository.find();
  }

  async create(scenario: CreateScenarioDto): Promise<Scenario> {
    return this.scenarioRepository.save(scenario);
  }
}
