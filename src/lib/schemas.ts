import { z } from "zod";

export const studentSchema = z.object({
  full_name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede exceder 100 caracteres")
    .trim(),
  gender: z.enum(["male", "female", "other"], {
    errorMap: () => ({ message: "Selecciona un género válido" }),
  }),
  born_at: z
    .string()
    .min(1, "La fecha de nacimiento es requerida")
    .refine(
      (date) => {
        const birthDate = new Date(date);
        const today = new Date();
        return birthDate < today;
      },
      { message: "La fecha de nacimiento debe ser anterior a hoy" },
    ),
  phone: z
    .string()
    .min(12, "El teléfono debe tener al menos 12 caracteres")
    .max(14, "El teléfono no puede exceder 14 caracteres")
    .regex(
      /^\+591[ -]?[67]\d{7}$/,
      "El teléfono debe ser de Bolivia (+591) y válido",
    ),
  email: z
    .string()
    .min(1, "El correo electrónico es requerido")
    .email("Formato de correo electrónico inválido"),
});
