import { z } from "zod";

const loginSchema = z.object({
    email: z.string().nonempty('Email is required').email('Inform a valid email address'),
    password: z.string().nonempty('Password is required').min(6, 'Password must be at least 6 characters'),
  });

const postSchema = z.object({
    title: z.string().min(1, "Title is required"),
    content: z
      .string()
      .min(1, "Content is required")
      .max(300, "Content must be at most 300 characters"),
  });

  const registerSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().nonempty('Email is required').email('Invalid email address'),
    password: z.string().nonempty('Password is required').min(6, 'Password must be at least 6 characters'),
  });

export { loginSchema, postSchema, registerSchema };