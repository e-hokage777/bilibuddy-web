export const Endpoints = {
  manager: {
    create: "users/facility_manager",
    login: "auth/login",
  },

  personnel: {
    create: "users/health_personnel",
    get: "facility_manager/personnel",
  },

  facility: {
    get: "facility_manager/facility",
    create: "facility_manager/facility"
  }
};
