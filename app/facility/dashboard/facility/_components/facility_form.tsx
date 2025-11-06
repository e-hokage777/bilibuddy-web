"use client";
import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
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
import { createFacility, updateFacility } from "@/app/_actions/facility";
import {
  FacilityCreateModel,
  FacilityModel,
  FacilityUpdateModel,
} from "@/data/models/facility_model";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(1).min(1),
  type: z.string().min(1),
  region: z.string().min(1),
  district: z.string().min(1).min(1),
  community: z.string().min(1).min(1),
});

export default function FacilityForm({
  facility,
  onSuccess,
}: {
  facility?: FacilityModel;
  onSuccess?: (facility: FacilityModel) => void;
}) {
  const [loading, setLoading] = useState<boolean>(false);
  const { refresh } = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: facility?.name || "",
      type: facility?.type || "",
      region: facility?.region || "",
      district: facility?.district || "",
      community: facility?.community || "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const response = await (facility
        ? updateFacility(facility.id, values as FacilityUpdateModel)
        : createFacility(values as FacilityCreateModel));
      if (onSuccess) onSuccess(response);
      else refresh();
    } catch (error: any) {
      toast.error(error.toString());
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full mx-auto py-10"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name of facility" type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Facility's type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="hospital">Hospital</SelectItem>
                  <SelectItem value="clinic">Clinic</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="region"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Region</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Region in which facility is found" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Greater Accra">Greater Accra</SelectItem>
                  <SelectItem value="Ashanti">Ashanti</SelectItem>
                  <SelectItem value="Volta">Volta</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="district"
          render={({ field }) => (
            <FormItem>
              <FormLabel>District</FormLabel>
              <FormControl>
                <Input
                  placeholder="Facility's district"
                  type="text"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="community"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comunity</FormLabel>
              <FormControl>
                <Input
                  placeholder="Facility's community"
                  type="text"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="float-right" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
