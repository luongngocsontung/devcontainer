import { EntitySchema } from 'typeorm';
import { Scenario } from './scenarios.entity';

export const ScenarioSchema = new EntitySchema<Scenario>({
  name: 'Scenario',
  target: Scenario,
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
    },
    name: {
      type: String,
      nullable: false,
    },
    createdAt: {
      type: Date,
      default: () => 'CURRENT_TIMESTAMP',
    },
    updatedAt: {
      type: Date,
      default: () => 'CURRENT_TIMESTAMP',
    },
  },
});
