import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  OPEN_AI_KEY: z.string(),
  PORT: z.string().transform((port) => Number(port)),
});

export const env = envSchema.parse(process.env);
