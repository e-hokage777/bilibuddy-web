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
import { RegisterFormContext } from "../_service/register_form_context";

const formSchema = z.object({
  first_name: z.string().min(1),
  last_name: z.string().min(1),
  email: z.string().min(1),
  phone_number: z.string().min(1),
  password: z.string().min(1),
  confirm_password: z.string().min(1),
});

export type ManagerFormData = z.infer<typeof formSchema>;

export default function ManagerForm({
  handleSubmit,
  
}: {
  handleSubmit: (data: ManagerFormData) => void;

}) {
  const {activePage, setActivePage} = useContext(RegisterFormContext);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    handleSubmit(values);
  }

  // styles for inputs
  const inputStyles: string = "bg-muted w-full";

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl text-primary text-center">Manager</h2>
        <p className="text-center text-secondary">
          Please enter the facility manager's details
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-3xl mx-auto py-10 w-full"
        >
          <div className="flex flex-row gap-2">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      className={cn(inputStyles, "flex-1")}
                      placeholder="Your First Name"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Manager's first name</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      className={cn(inputStyles, "flex-1")}
                      placeholder="Your last name"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Manager's last name</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

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
            name="phone_number"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <FormLabel>Phone number</FormLabel>
                <FormControl className="w-full">
                  <PhoneInput
                    placeholder="Your phone Number"
                    {...field}
                    defaultCountry="TR"
                  />
                </FormControl>
                <FormDescription>Manager's phone number</FormDescription>
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

          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="Enter your password again"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Enter your password again</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-row justify-between">
            <Button type="button" onClick={() => setActivePage(activePage - 1)} className="min-w-30">
              Previous
            </Button>
            <Button type="submit" className="min-w-30">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
