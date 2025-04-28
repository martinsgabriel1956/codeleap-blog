import { z } from "zod";

export const loginSchema = z.object({
  username: z.string({
    message: "Field Required!"
  }).min(1, "Field Required!")
})