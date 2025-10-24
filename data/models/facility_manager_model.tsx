import { ZodEmail } from "zod";

export interface FacilityManagerModel {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
}

export interface FacilityManagerCreateModel extends FacilityManagerModel {
  password: string;
}

export interface FacilityManagerLoginModel {
  email: string;
  password: string;
}
