import { z } from "zod";

export const repoSchema = z.object({
    title: z.string().min(1, "title is required.").max(255, "Title must be less than 255 character"),
    description: z.string()
});
