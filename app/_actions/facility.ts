"use server";
import api from "@/data/core/api";
import { Endpoints } from "@/data/endpoints";
import { FacilityModel } from "@/data/models/facility_model";

/** returns the facility of the manager */
export async function getFacility(): Promise<FacilityModel | undefined> {
  try {
    const response = await api.get(Endpoints.facility.get);
    return response.data;
  } catch (error: any) {
    throw error.message;
  }
}
