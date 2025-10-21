import { ZodEmail } from "zod";

export interface FacilityManagerModel {
    firstName: string;
    lastName: string;
    email: string;
}

export interface FacilityManagerCreateModel extends FacilityManagerModel{
    password: string;
}