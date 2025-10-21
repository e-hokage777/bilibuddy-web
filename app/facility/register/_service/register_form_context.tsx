"use client";

import { FacilityManagerCreateModel } from "@/data/models/facility_manager_model";
import { FacilityCreateModel } from "@/data/models/facility_model";
import { createContext, useState } from "react";

interface RegisterFormContextProps {
  loading: boolean;
  activePage: number;
  facility?: FacilityCreateModel;
  manager?: FacilityManagerCreateModel;
  setLoading: (value: boolean) => void;
  setActivePage: (index: number) => void;
  setFacility: (data: FacilityCreateModel | undefined) => void;
  setManager: (data: FacilityManagerCreateModel | undefined) => void;
  submit: () => void;
}

export const RegisterFormContext = createContext<RegisterFormContextProps>({
  activePage: 0,
  loading: false,
  setLoading: (value) => null,
  setActivePage: (index) => null,
  setFacility: (data) => null,
  setManager: (data) => null,
  submit: () => null,
});

export function RegisterFormProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [loading, setLoading] = useState<boolean>(false);
  const [activePage, setActivePage] = useState<number>(0);
  const [facility, setFacility] = useState<FacilityCreateModel | undefined>(
    undefined
  );
  const [manager, setManager] = useState<
    FacilityManagerCreateModel | undefined
  >(undefined);

  const submit = () => {
    setLoading(true);
    // try to submit
    setLoading(false);
  };

  return (
    <RegisterFormContext.Provider
      value={{
        loading,
        activePage,
        facility,
        manager,
        setLoading,
        setActivePage,
        setFacility,
        setManager,
        submit,
      }}
    >
      {children}
    </RegisterFormContext.Provider>
  );
}
