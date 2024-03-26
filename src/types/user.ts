export type userType = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
};

export type loginType = {
  username: string;
  password: string;
};

export type generalUserType = {
  address: object;
  age: number;
  bank: object;
  birthDate: string;
  bloodGroup: string;
  company: object;
  crypto: object;
  domain: string;
  ein: string;
  email: string;
  eyeColor: string;
  firstName: string;
  gender: string;
  hair: object;
  height: 189;
  id: 1;
  image: string;
  ip: string;
  lastName: string;
  macAddress: string;
  maidenName: string;
  password: string;
  phone: string;
  ssn: string;
  university: string;
  userAgent: string;
  username: string;
  weight: number;
};

export type addUserType = {
  firstName: string;
  lastName: string;
  email: string;
};
