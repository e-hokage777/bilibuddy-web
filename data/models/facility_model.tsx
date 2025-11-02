export interface FacilityModel {
  name: string;
  type: string;
  region: string;
  district: string;
  community: string;
  createdAt: string;
  updatedAt: string;
}

export interface FacilityCreateModel extends FacilityModel {}
