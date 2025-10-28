"use server";

import {
  FacilityManagerCreateModel,
  FacilityManagerLoginModel,
} from "@/data/models/facility_manager_model";
import { FacilityCreateModel } from "@/data/models/facility_model";
import api from "@/data/core/api";
import { Endpoints } from "@/data/endpoints";
import { camelCaseKeysToSnake } from "@/lib/utils";
import { cookies } from "next/headers";

export async function createManager(manager: FacilityManagerCreateModel) {
  try {
    const response = await api.post(
      Endpoints.manager.create,
      camelCaseKeysToSnake(manager)
    );
  } catch (error: any) {
    throw error.message;
    // if (error.response) {
    //   // The request was made and the server responded with a status code
    //   // that falls out of the range of 2xx
    //   throw error.response.data.detail ?? "Something went wrong";
    // } else if (error.message) {
    //   throw error.message!;
    // }
    // throw "Something went wrong";
  }
}

export async function logManagerIn(loginDetails: FacilityManagerLoginModel) {
  try {
    const response = await api.post(Endpoints.manager.login, loginDetails, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const data = response.data as { access_token: string; token_type: string };

    const cookiesStore = await cookies();
    cookiesStore.set("access_token", data["access_token"], { secure: true });
  } catch (error: any) {
    throw error.message;
    // if (error?.message) {
    //   throw error.message!;
    // }
    // throw "Something went wrong";
  }
}
