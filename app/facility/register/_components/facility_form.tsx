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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  facility_name: z.string().min(1),
  facility_type: z.string(),
  facility_region: z.string().min(1),
  facility_district: z.string().min(1),
  facility_community: z.string().min(1),
});

export type FacilityFormData = z.infer<typeof formSchema>;

export default function FacilityForm({
  handleSubmit,
}: {
  handleSubmit: (data: FacilityFormData) => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      facility_name: "",
      facility_type: "",
      facility_region: "",
      facility_district: "",
      facility_community: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    handleSubmit(values);
  }

  // styles for inputs
  const inputStyles: string = "bg-muted w-full";

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl text-primary text-center">Facility</h2>
        <p className="text-center text-secondary">
          Please enter your facility's details
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-3xl mx-auto py-10 w-full"
        >
          <FormField
            control={form.control}
            name="facility_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    className={inputStyles}
                    placeholder="Name of your facility"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Name of facility</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="facility_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className={inputStyles}>
                      <SelectValue placeholder="What kind of facility do you belong to" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="hospital">Hospital</SelectItem>
                    <SelectItem value="clinic">Clinic</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>type of facility</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="facility_region"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Region</FormLabel>
                <FormControl>
                  <Input
                    className={inputStyles}
                    placeholder="What region is your facility in ?"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Region that the facility can be found in
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="facility_district"
            render={({ field }) => (
              <FormItem>
                <FormLabel>District</FormLabel>
                <FormControl>
                  <Input
                    className={inputStyles}
                    placeholder="What district can your facility be found in ?"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  District that facility can be found in
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="facility_community"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Community</FormLabel>
                <FormControl>
                  <Input
                    className={inputStyles}
                    placeholder="What community can your facility be found in"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Community in which facility can be found
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-row justify-end">
            <Button type="submit" className="min-w-30">
              Next
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
