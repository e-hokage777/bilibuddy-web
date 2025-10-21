"use client";

import MultiFormProgressIndicator from "@/app/_components/multi_form_progress";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  RegisterFormProvider,
  RegisterFormContext,
} from "./_service/register_form_context";
import FacilityForm, { FacilityFormData } from "./_components/facility_form";
import { useContext } from "react";
import ManagerForm, { ManagerFormData } from "./_components/manager_form";
import { cn } from "@/lib/utils";

export default function FacilityRegisterPage() {
  return (
    <main className="flex flex-row h-screen overflow-hidden">
      <div className="flex-1 p-4">
        <div className="relative h-full overflow-hidden rounded-lg">
          <Image
            objectFit="cover"
            src="/images/neonatal_care_hospital.jpg"
            alt="Smiling baby with mother"
            fill
          />
          <div className="w-full h-full bg-black/50 absolute top-0 left-0 flex flex-col gap-4 justify-center items-center text-primary-foreground">
            <h3 className="text-4xl font-semibold">Parents</h3>
            <p className="text-2xl max-w-100 font-light text-center">
              With Bilibuddy, parents can easily monitory theic
            </p>
            <Button className="text-2xl bg-primary-foreground text-primary px-8 py-6 hover:text-primary-foreground">
              Get the App Now
            </Button>
          </div>
        </div>
      </div>
      <RegisterFormProvider>
        <RegisterForms />
      </RegisterFormProvider>
    </main>
  );
}

function RegisterForms() {
  const { activePage, setActivePage, setFacility } =
    useContext(RegisterFormContext);
  return (
    <div className="flex-1 h-full overflow-y-auto">
      <div className="flex flex-col gap-8  p-4 pt-20 mx-auto max-w-xl">
        <MultiFormProgressIndicator
          sections={["Facility", "Manager"]}
          activeIndex={activePage}
        />

        <div className={cn(activePage != 0 && "hidden")}>
          <FacilityForm
            handleSubmit={(data: FacilityFormData) => {
              setFacility({
                name: data.facility_name,
                type: data.facility_type,
                region: data.facility_region,
                district: data.facility_district,
                community: data.facility_community,
              });

              setActivePage(activePage + 1);
            }}
          />
        </div>

        <div className={cn(activePage != 1 && "hidden")}>
          <ManagerForm
            handleSubmit={(data: ManagerFormData) => {
              // handle manager form submission (example: advance to next page)
              console.log("Manager form submitted:", data);
              setActivePage(activePage + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
}
