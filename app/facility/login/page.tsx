"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ManagerLoginForm from "./_components/manager_login_form";

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
            <div className="flex flex-col gap-4 items-center p-10 backdrop-blur-md rounded-lg overflow-hidden">
              <h3 className="text-4xl font-semibold">
                Sign In
              </h3>
              <p className="text-2xl max-w-100 font-light text-center">
                Welcome back, please log into your account.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 mt-10">
        <ManagerLoginForm/>
      </div>
    </main>
  );
}
