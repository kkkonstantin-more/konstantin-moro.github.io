export enum LoginFormType {
  Default = 'DEFAULT',
  NoPassword = 'NO_PASSWORD',
  Guest = 'GUEST',
}

export interface LoginFormProps {
  type: LoginFormType;
}

export interface DefaultInputs {
  name: string;
  password: string;
}

export interface NoPasswordInputs {
  name: string;
  email: string;
}

export interface GuestInputs {
  name: string;
  email: string;
  description: string;
}
