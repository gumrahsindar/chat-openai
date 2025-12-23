import { z } from "zod";

export const CreateChatSchema = z.object({
  title: z.string().min(1).optional(),
  projectId: z.uuid().optional(),
});
