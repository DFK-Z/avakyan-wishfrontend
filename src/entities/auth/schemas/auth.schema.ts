import { z } from 'zod';

export const loginSchema = z.object({
   email: z.string().email('Введите корректный email'),
   password: z.string().min(6, 'Минимальная длина пароля 6 символов'),
});

export const registerSchema = z.object({
   email: z.string().email('Введите корректный email'),
   name: z.string().min(1, { message: 'Поле обязательно к заполнению' }),
   password: z.string().min(6, 'Минимальная длина пароля 6 символов'),
});