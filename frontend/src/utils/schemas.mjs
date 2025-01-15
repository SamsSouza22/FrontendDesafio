import { z } from "zod";

const loginSchema = z.object({
    email: z.string().email('Invalid email address').nonempty('Email is required'),
    password: z.string().min(6, 'Password must be at least 6 characters').nonempty('Password is required'),
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
    email: z.string().email('Invalid email address').nonempty('Email is required'),
    password: z.string().min(6, 'Password must be at least 6 characters').nonempty('Password is required'),
  });

export { loginSchema, postSchema, registerSchema };