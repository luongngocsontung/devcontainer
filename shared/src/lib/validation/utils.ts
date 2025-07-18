import { z } from 'zod';

// Utility functions for validation

/**
 * Safely parse data with a Zod schema and return result
 */
export function safeParse<T>(schema: z.ZodSchema<T>, data: unknown) {
  return schema.safeParse(data);
}

/**
 * Parse data with a Zod schema and throw if invalid
 */
export function parse<T>(schema: z.ZodSchema<T>, data: unknown): T {
  return schema.parse(data);
}

/**
 * Validate data with a Zod schema and return boolean
 */
export function isValid<T>(schema: z.ZodSchema<T>, data: unknown): data is T {
  return schema.safeParse(data).success;
}

/**
 * Get validation errors as a flat array of strings
 */
export function getValidationErrors(error: z.ZodError): string[] {
  return error.issues.map((err: z.ZodIssue) => err.message);
}

/**
 * Create a validation error response
 */
export function createValidationErrorResponse(error: z.ZodError) {
  return {
    success: false as const,
    error: 'Validation Error',
    message: 'Invalid request data',
    errors: getValidationErrors(error),
    statusCode: 400,
  };
}

/**
 * Transform date strings to Date objects for Zod schemas
 */
export const dateTransformer = z.preprocess((arg) => {
  if (typeof arg === 'string' || arg instanceof Date) return new Date(arg);
}, z.date());

/**
 * Transform string to number for Zod schemas
 */
export const numberTransformer = z.preprocess((arg) => {
  if (typeof arg === 'string') return parseInt(arg, 10);
  return arg;
}, z.number());
