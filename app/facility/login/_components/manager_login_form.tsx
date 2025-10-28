"use client";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { PhoneInput } from "@/components/ui/phone-input";
import { PasswordInput } from "@/components/ui/password-input";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { createManager, logManagerIn } from "@/app/_actions/auth";
import { useState } from "react";
import {
  FacilityManagerCreateModel,
  FacilityManagerLoginModel,
} from "@/data/models/facility_manager_model";
import Link from "next/link";
import { redirect } from "next/navigation";

const formSchema = z.object({
  email: z.string().min(1),
  password: z.string().min(1),
});

export default function ManagerLoginForm({}: {}) {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    const loginDetails: FacilityManagerLoginModel = {
      username: values.email,
      password: values.password,
    };
    try {
      const response = await logManagerIn(loginDetails);
      toast.success("Login successful");
      redirect("/facility/dashboard/personnel");
    } catch (error: any) {
      if (error.message === "NEXT_REDIRECT") {
        throw error; // Re-throw the redirect error
      }
      toast.error(error.toString());
    } finally {
      setLoading(false);
    }
  }

  // styles for inputs
  const inputStyles: string = "bg-muted w-full";

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl text-primary text-center">Sign In</h2>
        <p className="text-center text-secondary">
          We're glad to have you back
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-3xl mx-auto py-10 w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className={inputStyles}
                    placeholder="Your email"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Manager's email address </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput placeholder="Enter your password" {...field} />
                </FormControl>
                <FormDescription>Enter your password.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-2">
            <Button
              type="submit"
              className="w-full text-lg py-4"
              disabled={loading}
            >
              {loading ? "Loading..." : "Submit"}
            </Button>
            <span className="text-sm">
              Not registered yet ?{" "}
              <Link href="/facility/register" className="text-secondary">
                Sign up
              </Link>
            </span>
          </div>
        </form>
      </Form>
    </div>
  );
}
