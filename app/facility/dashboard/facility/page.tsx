import { Card } from "@/components/ui/card";
import DashboardSectionHeader from "../_components/dashboard_section_header";

import { getFacility } from "@/app/_actions/facility";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import FacilityForm from "./_components/facility_form";

export default async function DashboardFacility() {
  const facility = await getFacility();


  return (
    <div className="h-full">
      {facility ? (
        "ey"
      ) : (
        <div className="text-center text-xl h-full w-full flex flex-col gap-4 items-center justify-center">
          <span>You have not created facility yet</span>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="rounded-sm flex gap-1">
                <Plus />
                NEW FACILITY
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>New Facility</DialogTitle>
                <DialogDescription>
                  Complete the following form and submit to create a new
                  facility
                </DialogDescription>
              </DialogHeader>
              <FacilityForm />
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  );
}
