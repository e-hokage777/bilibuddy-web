interface PersonnelModelBase {
  firstName: string;
  lastName: string;
  title: string
  email: string;
  phoneNumber: string;
}

export interface PersonnelReadModel extends PersonnelModelBase {
  id: string;
}

export interface PersonnelCreateModel extends PersonnelModelBase {
  password: string;
}
