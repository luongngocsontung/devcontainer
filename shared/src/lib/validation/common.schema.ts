import { z } from 'zod';

// Common schemas used across the application

// UUID schema
export const uuidSchema = z.string().uuid('Invalid UUID format');

// Pagination schema
export const paginationSchema = z.object({
  page: z.number().int().min(1, 'Page must be at least 1'),
  limit: z
    .number()
    .int()
    .min(1, 'Limit must be at least 1')
    .max(100, 'Limit cannot exceed 100'),
  total: z.number().int().min(0, 'Total cannot be negative'),
});

// Sort schema
export const sortSchema = z.object({
  sortBy: z.string().optional(),
  sortOrder: z.enum(['asc', 'desc']).optional().default('desc'),
});

// Search filters schema
export const searchFiltersSchema = z.object({
  search: z.string().optional(),
  page: z.number().int().min(1).optional().default(1),
  limit: z.number().int().min(1).max(100).optional().default(10),
  sortBy: z.string().optional(),
  sortOrder: z.enum(['asc', 'desc']).optional().default('desc'),
});

// API response schema
export const apiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    success: z.boolean(),
    data: dataSchema.optional(),
    message: z.string().optional(),
    error: z.string().optional(),
  });

// API error response schema
export const apiErrorSchema = z.object({
  success: z.literal(false),
  error: z.string(),
  message: z.string(),
  statusCode: z.number().int().min(400).max(599),
});

// Date range schema
export const dateRangeSchema = z.object({
  from: z.date().optional(),
  to: z.date().optional(),
});

// Type exports
export type PaginationDto = z.infer<typeof paginationSchema>;
export type SortDto = z.infer<typeof sortSchema>;
export type SearchFiltersDto = z.infer<typeof searchFiltersSchema>;
export type ApiErrorDto = z.infer<typeof apiErrorSchema>;
export type DateRangeDto = z.infer<typeof dateRangeSchema>;
