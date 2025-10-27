export const Endpoints = {
  manager: {
    create: "users/facility_manager",
    login: "auth/login",
  },

  personnel: {
    create: "users/health_personnel",
  },

  facility: {
    get: "facility_manager/facility",
    create: "facility"
  }
};
