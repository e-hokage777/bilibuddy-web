interface PersonnelModel {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

interface PersonnelCreateModel extends PersonnelModel {
  password: string;
}
