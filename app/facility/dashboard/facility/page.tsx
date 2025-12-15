import { Card } from "@/components/ui/card";

import {
  deleteFacility,
  getFacility,
  getFacilityStatistics,
} from "@/app/_actions/facility";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Hospital, IdCard, MapPin, Pen, Plus } from "lucide-react";
import FacilityForm from "./_components/facility_form";
import DeleteButton from "@/app/_components/delete_button";
import { toast } from "sonner";

export default async function DashboardFacility() {
  let facility = null;
  let stats = null;

  try {
    [facility, stats] = await Promise.all([
      getFacility(),
      getFacilityStatistics(),
    ]);
  } catch (error) {
    console.error("Error fetching facility data:", error);
  }

  return (
    <div className="h-full">
      {facility ? (
        <div className="flex flex-row justify-center items-stretch gap-8 mt-8">
          <Card className="w-full p-8 pb-32 flex-1 max-w-[465px]">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold mb-4">
                Facility Information
              </h2>
              <div className="flex flex-row items-center gap-4">
                <DeleteButton
                  handleDelete={deleteFacility}
                  description="This action will permanently delete your facility and it's associated personnel and newborns"
                />
                <Dialog>
                  <DialogTrigger asChild>
                    <Pen className="text-gray-500 hover:text-primary cursor-pointer" />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit Facility</DialogTitle>
                      <DialogDescription>
                        Complete the following form and submit to edit your
                        facility
                      </DialogDescription>
                    </DialogHeader>
                    <FacilityForm facility={facility} />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="space-y-4 flex flex-col gap-8">
              <div>
                <div className="flex flex-row gap-2 items-center">
                  <IdCard className="stroke-gray-500" />
                  <label className="block font-medium text-gray-500 text-md">
                    FACILITY NAME
                  </label>
                </div>
                <p className="mt-1 text-primary text-xl ms-8">
                  {facility.name}
                </p>
              </div>
              <div>
                <div className="flex flex-row gap-2 items-center">
                  <Hospital className="stroke-gray-500" />
                  <label className="block font-medium text-gray-500 text-md">
                    FACILITY TYPE
                  </label>
                </div>
                <p className="mt-1 text-primary text-xl ms-8">
                  {facility.type}
                </p>
              </div>
              <div>
                <div className="flex flex-row gap-2 items-center">
                  <MapPin className="stroke-gray-500" />
                  <label className="block font-medium text-gray-500 text-md">
                    FACILITY LOCATION
                  </label>
                </div>
                <p className="mt-1 text-primary text-xl ms-8">
                  {facility.community} {facility.district} <br />{" "}
                  {facility.region}{" "}
                </p>
              </div>
              <div>
                <div className="flex flex-row gap-2 items-center">
                  <MapPin className="stroke-gray-500" />
                  <label className="block font-medium text-gray-500 text-md">
                    DATE CREATED
                  </label>
                </div>
                <p className="mt-1 text-primary text-xl ms-8">
                  {new Date(facility.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </Card>
          <div className="flex flex-col flex-1 gap-4 max-w-[465px]">
            <div className="rounded-md flex flex-col justify-center items-center gap-4 border-2 border-primary flex-1 h-full">
              <p className="text-lg text-gray-500">Personnel</p>
              <p className="text-8xl text-primary font-bold">
                {stats?.totalHealthPersonnel}
              </p>
            </div>
            <div className="rounded-md flex flex-col justify-center items-center gap-4 bg-primary flex-1 h-full">
              <p className="text-lg text-gray-500">New Borns</p>
              <p className="text-8xl  font-bold text-primary-foreground">
                {stats?.totalNewborns}
              </p>
            </div>
          </div>
        </div>
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
