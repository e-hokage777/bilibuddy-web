"use client";

import { FacilityManagerCreateModel } from "@/data/models/facility_manager_model";
import { FacilityCreateModel } from "@/data/models/facility_model";
import { createContext, useState } from "react";

interface RegisterFormContextProps {
  activePage: number;
  facility?: FacilityCreateModel;
  manager?: FacilityManagerCreateModel;
  setActivePage: (index: number) => void;
  setFacility: (data: FacilityCreateModel | undefined) => void;
  setManager: (data: FacilityManagerCreateModel | undefined) => void;
}

export const RegisterFormContext = createContext<RegisterFormContextProps>({
  activePage: 0,
  setActivePage: (index) => null,
  setFacility: (data) => null,
  setManager: (data) => null,
});

export function RegisterFormProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [activePage, setActivePage] = useState<number>(0);
  const [facility, setFacility] = useState<FacilityCreateModel | undefined>(
    undefined
  );
  const [manager, setManager] = useState<
    FacilityManagerCreateModel | undefined
  >(undefined);
  return (
    <RegisterFormContext.Provider
      value={{
        activePage,
        facility,
        manager,
        setActivePage,
        setFacility,
        setManager,
      }}
    >
      {children}
    </RegisterFormContext.Provider>
  );
}
