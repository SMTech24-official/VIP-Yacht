// src/components/LoginForm.tsx
"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Cookies from "js-cookie"; // Import js-cookie
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLoginMutation } from "@/redux/service/own/auth/authApi";
import { useAppDispatch } from "@/redux/hooks/hooks";
import ApiErrorHandler from "@/utils/ApiErrorHandler";
import { toast } from "sonner";
import { login } from "@/redux/feature/authSlice";
import { useRouter } from "next/navigation";

// Define the validation schema using Zod
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm() {
  // Initialize the form with react-hook-form and Zod resolver
  const [loginUser, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useRouter();
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: LoginFormData) => {
    try {
      const res = await loginUser(data).unwrap();
      if (res.success) {
        toast.success(res.message);

        // Extract token and user data from the response
        const { accessToken, user } = res.data || {};

        // Set the user's role in cookies
        if (user?.roll) {
          Cookies.set("roll", user.roll, { expires: 7 }); // Expires in 7 days
        }

        // Dispatch the login action to update the Redux state
        dispatch(
          login({
            token: accessToken || "",
            user: user,
          })
        );

        navigate.push("/admin");
      }
    } catch (error) {
      ApiErrorHandler(error);
    }
  };

  return (
    <div className="max-w-md w-full border p-4 shadow">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button disabled={isLoading} type="submit" className="w-full">
            {isLoading ? (
              <span className="text-gray-500">Logging in...</span>
            ) : (
              "Login"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
