"use client";
import { startTransition, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function DeleteButton({
  handleDelete,
  title,
  description,
  children,
}: {
  handleDelete: () => Promise<void>;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}) {
  const [isPending, startTransition] = useTransition();
  const { refresh } = useRouter();
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {children ?? (
          <Trash2 className="text-gray-500 hover:text-red-500 cursor-pointer " />
        )}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {title ?? "Are you absolutely sure?"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {description ??
              "This action cannot be undone. This will permanently delete your account and remove your data from our servers."}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              startTransition(() => {
                handleDelete()
                  .then(() => {
                    refresh();
                    toast.success("Deleted successfully");
                  })
                  .catch(() => {
                    // Handle error if needed
                    toast.error("Failed to delete. Please try again.");
                  });
              });
            }}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
