import { z } from 'zod';

// Base scenario schema
export const scenarioBaseSchema = z.object({
  id: z.string().uuid(),
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters'),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// Create scenario schema
export const createScenarioSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters'),
});

// Update scenario schema (all fields optional)
export const updateScenarioSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters')
    .optional(),
});

// Response schema
export const scenarioResponseSchema = scenarioBaseSchema;

// List response schema
export const scenarioListResponseSchema = z.object({
  data: z.array(scenarioResponseSchema),
  pagination: z.object({
    page: z.number().int().min(1),
    limit: z.number().int().min(1).max(100),
    total: z.number().int().min(0),
  }),
});

// Form data schema (for client-side forms)
export const scenarioFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters'),
});

// Filters schema
export const scenarioFiltersSchema = z.object({
  search: z.string().optional(),
  page: z.number().int().min(1).optional().default(1),
  limit: z.number().int().min(1).max(100).optional().default(10),
  sortBy: z
    .enum(['name', 'createdAt', 'updatedAt'])
    .optional()
    .default('createdAt'),
  sortOrder: z.enum(['asc', 'desc']).optional().default('desc'),
});

// Type exports
export type ScenarioBase = z.infer<typeof scenarioBaseSchema>;
export type CreateScenarioDto = z.infer<typeof createScenarioSchema>;
export type UpdateScenarioDto = z.infer<typeof updateScenarioSchema>;
export type ScenarioResponseDto = z.infer<typeof scenarioResponseSchema>;
export type ScenarioListResponseDto = z.infer<
  typeof scenarioListResponseSchema
>;
export type ScenarioFormData = z.infer<typeof scenarioFormSchema>;
export type ScenarioFiltersDto = z.infer<typeof scenarioFiltersSchema>;
