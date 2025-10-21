"user server";

import { FacilityManagerCreateModel } from "@/data/models/facility_manager_model";
import { FacilityCreateModel } from "@/data/models/facility_model";
import api from "@/data/models/api";
import path from "path";
import { AuthEndpoints } from "@/data/endpoints";

async function registerFacility(
  facility: FacilityCreateModel,
  manager: FacilityManagerCreateModel
) {
  try {
    const response = await api.post(AuthEndpoints.register)

  } catch (error) {}
}
