"use server";

import api from "@/data/core/api";
import { Endpoints } from "@/data/endpoints";
import {
  PersonnelCreateModel,
  PersonnelReadModel,
} from "@/data/models/personnel_model";
import { camelCaseKeysToSnake, snakeCaseKeysToCamel } from "@/lib/utils";

export async function createPersonnel({
  personnel,
}: {
  personnel: PersonnelCreateModel;
}) {
  try {
    const response = await api.post(
      Endpoints.personnel.create,
      camelCaseKeysToSnake(personnel)
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

export async function getPersonnel(): Promise<PersonnelReadModel[]> {
  try {
    const response = await api.get(Endpoints.personnel.get);
    return (response.data as []).map(
      (item) => snakeCaseKeysToCamel(item) as PersonnelReadModel
    );
  } catch (error: any) {
    throw error ?? "Something went wrong";
  }
}
