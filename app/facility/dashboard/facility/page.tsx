import { Card } from "@/components/ui/card";
import DashboardSectionHeader from "../_components/dashboard_section_header";

import { getFacility } from "@/app/_actions/facility";

export default async function DashboardFacility() {
  const facility = await getFacility();

  if (!facility) {
    return <div className="text-center text-xl">No Facility</div>;
  }

  return (
    <div className="flex flex-col h-full">
      <DashboardSectionHeader
        title="Facility"
        description="Manager Your Facility"
      />
      <div className="p-5 ps-0 flex-1">
        <Card className="bg-white h-full px-8">{facility ? "ey" : "No"}</Card>
      </div>
    </div>
  );
}
