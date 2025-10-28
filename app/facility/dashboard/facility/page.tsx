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
    <div className="flex flex-col h-full">
      <DashboardSectionHeader
        title="Facility"
        description="Manager Your Facility"
      />
      <div className="p-5 ps-0 flex-1">
        <Card className="bg-white h-full px-8">
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
        </Card>
      </div>
    </div>
  );
}
