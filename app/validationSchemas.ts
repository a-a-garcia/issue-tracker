import { z } from "zod";

export const issueSchema = z.object({
    title: z.string().min(1, "Title must contain at least one character").max(255),
    description: z.string().min(1, "Description must contain as least one character.")
});

export const patchIssueSchema = z.object({
    title: z
    .string()
    .min(1, "Title must contain at least one character")
    .max(255)
    .optional(),
    description: z
    .string()
    .min(1, "Description must contain as least one character.")
    .max(65535)
    .optional(),
    assignedToUserId: z
    .string()
    .min(1, "assignedToUserId is required.")
    .max(255)
    .optional()
    .nullable()
})