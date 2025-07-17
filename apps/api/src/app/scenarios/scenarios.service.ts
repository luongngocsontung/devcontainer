import { Injectable, NotFoundException } from '@nestjs/common';
import { Scenario } from './scenarios.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ScenariosService {
  constructor(
    @InjectRepository(Scenario)
    private scenarioRepository: Repository<Scenario>
  ) {}

  async findAll(): Promise<Scenario[]> {
    return this.scenarioRepository.find();
  }

  async findOne(id: number): Promise<Scenario> {
    const scenario = await this.scenarioRepository.findOne({ where: { id } });
    if (!scenario) {
      throw new NotFoundException('Scenario not found');
    }
    return scenario;
  }

  async create(scenario: Scenario): Promise<Scenario> {
    return this.scenarioRepository.save(scenario);
  }

  async update(id: number, scenario: Scenario): Promise<Scenario> {
    await this.scenarioRepository.update(id, scenario);
    return this.findOne(id);
  }
}
