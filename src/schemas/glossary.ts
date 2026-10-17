import { z } from "astro/zod";

export const glossarySchema = z.object({
  term: z.string().min(1),
  aliases: z.array(z.string()).default([]),
});
