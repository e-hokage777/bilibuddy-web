"use server";
import api from "@/data/core/api";
import { Endpoints } from "@/data/endpoints";
import {
  FacilityCreateModel,
  FacilityModel,
} from "@/data/models/facility_model";
import { camelCaseKeysToSnake, snakeCaseKeysToCamel } from "@/lib/utils";

/** returns the facility of the manager */
export async function getFacility(): Promise<FacilityModel | null> {
  try {
    const response = await api.get(Endpoints.facility.get);
    return snakeCaseKeysToCamel(response.data) as FacilityModel;
  } catch (error: any) {
    throw error.message;
  }
}

export async function createFacility(
  facility: FacilityCreateModel
): Promise<FacilityModel> {
  try {
    const response = await api.post(
      Endpoints.facility.create,
      camelCaseKeysToSnake(facility)
    );
    return response.data;
  } catch (error: any) {
    throw error.message;
  }
}

export async function getFacilityStatistics(): Promise<{
  totalNewborns: number;
  totalHealthPersonnel: number;
}> {
  try {
    const response = await api.get(Endpoints.facility.statistics);

    return snakeCaseKeysToCamel(response.data) as any;
  } catch (error: any) {
    throw error.message;
  }
}

export async function deleteFacility(): Promise<void> {}
