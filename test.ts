import { z } from "zod";

export const HexSchema = z.custom<`0x${string}`>(
  (value) =>
    z
      .string()
      .regex(/^0x[0-9a-fA-F]+$/)
      .safeParse(value).success
);

/**
 * tesfsdf
 */
export const CommentDataSchema = z.object({
  content: z.string(),
  address: HexSchema,
});

export type CommentData = z.infer<typeof CommentDataSchema>;
