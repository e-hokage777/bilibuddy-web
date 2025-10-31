"use client";

import { deletePersonnel } from "@/app/_actions/personnel";
import DeleteButton from "@/app/_components/delete_button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";

export default function PersonnelListItem({
  id,
  firstName,
  lastName,
  title,
  phoneNumber,
  email,
}: {
  id: string;
  firstName: string;
  lastName: string;
  title: string;
  phoneNumber: string;
  email: string;
}) {
  const titleStyles = "text-sm text-primary text-bold text-gray-400";
  const valueStyles = "text-sm text-secondary text-white";
  return (
    <div className="flex flex-row justify-between items-center p-4 border border-primary rounded-md bg-secondary">
      <Avatar className="w-16 h-16">
        <AvatarImage src="" />
        <AvatarFallback>
          <span className="uppercase">
            {firstName[0]}
            {lastName[0]}
          </span>
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2">
        <span className={cn(titleStyles)}>Name</span>
        <span className={cn(valueStyles)}>
          {firstName} {lastName}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <span className={cn(titleStyles)}>Title</span>
        <span className={cn(valueStyles)}>{title}</span>
      </div>
      <div className="flex flex-col gap-2">
        <span className={cn(titleStyles)}>Phone</span>
        <span className={cn(valueStyles)}>{phoneNumber ?? "N/A"}</span>
      </div>
      <div className="flex flex-col gap-2">
        <span className={cn(titleStyles)}>Email</span>
        <span className={cn(valueStyles)}>{email}</span>
      </div>
      <div className="flex gap-4">
        <DeleteButton
          handleDelete={deletePersonnel.bind(null, { id })}
          description="This action cannot be reversed. Deleting this personnel will remove all their details from the servers"
        />
      </div>
    </div>
  );
}
