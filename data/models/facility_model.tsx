export interface FacilityBaseModel {
  name: string;
  type: string;
  region: string;
  district: string;
  community: string;
  createdAt: string;
  updatedAt: string;
}

export interface FacilityModel extends FacilityBaseModel {
  id: string;
}

export interface FacilityCreateModel extends FacilityBaseModel {}

export interface FacilityUpdateModel extends FacilityBaseModel {}
