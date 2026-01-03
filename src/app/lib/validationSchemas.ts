import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório."),
  email: z.string().email("Por favor, insira um e-mail válido."),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres."),
});