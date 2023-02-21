import { z } from "zod";
import type { ToZod } from "@/lib/zod";

export type ErrorResponse = {
  message: string;
};

export const ErrorResponseSchema = z.object<ToZod<ErrorResponse>>({
  message: z.string(),
});
