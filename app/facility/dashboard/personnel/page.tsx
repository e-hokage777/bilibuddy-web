import { Card } from "@/components/ui/card";
import DashboardSectionHeader from "../_components/dashboard_section_header";
import PersonnelListItem from "./_component/personnel_list_item";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import PersonnelForm from "./_component/personnel_form";
import { FacilityModel } from "@/data/models/facility_model";
import { getFacility } from "@/app/_actions/facility";
import { PersonnelReadModel } from "@/data/models/personnel_model";
import { getPersonnel } from "@/app/_actions/personnel";
import FacilityForm from "../facility/_components/facility_form";

export default async function DashboardPersonnel() {
  // getting facility
  let facility: FacilityModel | null;
  let personnel: PersonnelReadModel[] = [];

  try {
    facility = await getFacility();
  } catch (error: any) {
    throw Error(error.toString());
  }

  if (!facility) {
    return (
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
                Complete the following form and submit to create a new facility
              </DialogDescription>
            </DialogHeader>
            <FacilityForm />
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  // get the personnel
  try {
    personnel = await getPersonnel();
  } catch (error) {
    throw Error("Something went wrong, please check your internet connection");
  }

  return (
    <div>
      <div className="flex flex-row justify-end mb-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="rounded-sm flex gap-1">
              <Plus />
              NEW PERSONNEL
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>New Personnel</DialogTitle>
              <DialogDescription>
                Complete the following form and submit to create a new health
                personnel
              </DialogDescription>
            </DialogHeader>
            <PersonnelForm />
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-col gap-4">
        {/* <PersonnelListItem
          id="someid"
          firstName="Juliet"
          lastName="Grey"
          title="Nurse"
          phoneNumber="+233 1341 342 1"
          email="jgg@bili.com"
        />
        <PersonnelListItem
          id="someid"
          firstName="Juliet"
          lastName="Grey"
          title="Nurse"
          phoneNumber="+233 1341 342 1"
          email="jgg@bili.com"
        /> */}
        {personnel.map((item, index) => (
          <PersonnelListItem
            key={index}
            id={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            title={item.title}
            phoneNumber={item.phoneNumber}
            email={item.email}
          />
        ))}
      </div>
    </div>
  );
}
