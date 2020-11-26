export interface BaseUser {
  id: number;
  email: string;
  password: string;
  salt: string;
  updatedAt: Date;
}
