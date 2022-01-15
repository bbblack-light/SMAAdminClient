import { ProfileImage } from './ProfileImage';

export class User {
  userId: string;
  firstName: string;
  lastName: string;
  position: string;
  role: string;
  phone: string;
  gender: string;
  image?: ProfileImage;
  email: string;
  company: string;
  password: string;
  groupId: number;
  groupStatus: string;

  constructor(userId?: string,
              firstName?: string,
              lastName?: string,
              position?: string,
              role?: string,
              email?: string,
              company?: string,
              groupId?: number,
              groupStatus?: string,
              phone?: string,
              gender?: string,
              password?: string) {
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.role = role;
    this.email = email;
    this.company = company;
    this.password = password;
    this.groupId = groupId;
    this.groupStatus = groupStatus;
    this.phone = phone;
    this.gender = gender;
    this.password = '';
  }

}
export class UserLoginDataDto {
  userId: string;
  password: string;
  email: string;
  phone: string;
  gender: string;
  firstName: string;
  lastName: string;
  position: string;
  constructor(userId?: string,
              email?: string,
              firstName?: string,
              lastName?: string,
              phone?: string,
              gender?: string, 
              position?: string) {
    this.userId = userId;
    this.password = "";
    this.email = email;
    this.phone = phone;
    this.gender = gender;
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
  }
}
export class UserDetail {
  userId: string;
  firstName: string;
  lastName: string;
  position: string;
  constructor(userId: string = "", firstName: string = "", lastName: string = "", position: string) {
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
  }
}
export class UserProfileImageChangeDto {
  userId: string;
  image: ProfileImage;
  constructor(userId: string = "") {
    this.userId = userId;
  }
}

export class UserRoleDto {
  userId: string;
  role:string;
  constructor(userId: string = "", role:string = "") {
    this.userId = userId;
    this.role=role;
  }
}
