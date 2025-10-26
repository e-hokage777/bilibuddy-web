"use server";

import {
  FacilityManagerCreateModel,
  FacilityManagerLoginModel,
} from "@/data/models/facility_manager_model";
import { FacilityCreateModel } from "@/data/models/facility_model";
import api from "@/data/core/api";
import { AuthEndpoints } from "@/data/endpoints";
import { camelCaseKeysToSnake } from "@/lib/utils";

export async function createManager(manager: FacilityManagerCreateModel) {
  try {
    const response = await api.post(
      AuthEndpoints.manager.create,
      camelCaseKeysToSnake(manager)
    );
  } catch (error: any) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw error.response.data.detail ?? "Something went wrong";

    } else if (error.message) {
      throw error.message!;
    }
    throw "Something went wrong";
  }
}

export async function logManagerIn(loginDetails: FacilityManagerLoginModel) {
  try {
    const response = await api.post(AuthEndpoints.manager.login, loginDetails, {
      headers: {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    });
  } catch (error: any) {
    if (error?.message) {
      throw error.message!;
    }
    throw "Something went wrong";
  }
}
