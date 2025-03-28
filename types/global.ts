/* eslint-disable @typescript-eslint/no-explicit-any */
export interface TApiResponse<T> {
  success: boolean;
  status: number;
  message: string;
  data?: T;
  error: any;
  meta?: {
    page?: number;
    total?: number;
    limit?: number;
  };
}

export interface TQuery {
  name: string;
  value: any;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  roll: "SUPER_ADMIN" | "USER"; // Corrected "roll" to "role"
}

export interface ILoginResponse {
  user: IUser;
  accessToken: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}
