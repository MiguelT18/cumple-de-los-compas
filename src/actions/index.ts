import { defineAction } from "astro:actions";
import { studentSchema } from "../lib/schemas";

// Extrae IP real del cliente evitando spoofing básico.
function getClientIp(ctx: any): string {
  const h = ctx?.request?.headers;
  const first = (v?: string | null) => v?.split(",")[0]?.trim();
  return (
    first(h?.get("cf-connecting-ip")) ||
    first(h?.get("x-vercel-forwarded-for")) ||
    first(h?.get("x-real-ip")) ||
    first(h?.get("x-forwarded-for")) ||
    (ctx as any)?.clientAddress ||
    "unknown"
  );
}

export const server = {
  sendForm: defineAction({
    input: studentSchema,
    handler: async (input, context) => {
      const ip = getClientIp(context);
      console.log("IP del cliente:", ip);
      console.log("Datos del formulario:", input);
      return { success: true };
    },
  }),
};
