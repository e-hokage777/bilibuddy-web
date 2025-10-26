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

export default function DashboardPersonnel() {
  return (
    <div className="flex flex-col h-full">
      <DashboardSectionHeader
        title="Personnel"
        description="Manager your facility's personnel"
      />
      <div className="p-5 ps-0 flex-1">
        <Card className="bg-white h-full px-8">
          <div className="flex flex-row justify-end">
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
                    Complete the following form and submit to create a new
                    health personnel
                  </DialogDescription>
                </DialogHeader>
                <PersonnelForm />
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex flex-col gap-4">
            <PersonnelListItem
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
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
