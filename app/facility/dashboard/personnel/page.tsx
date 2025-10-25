import { Card } from "@/components/ui/card";
import DashboardSectionHeader from "../_components/dashboard_section_header";
import PersonnelListItem from "./_component/personnel_list_item";

export default function DashboardPersonnel() {
  return (
    <div className="flex flex-col h-full">
      <DashboardSectionHeader
        title="Personnel"
        description="Manager your facility's personnel"
      />
      <div className="p-5 ps-0 flex-1">
        <Card className="bg-white h-full">
          <div className="flex flex-col gap-8">
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
