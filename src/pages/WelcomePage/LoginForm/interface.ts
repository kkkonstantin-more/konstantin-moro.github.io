export enum LoginFormType {
  Default = 'DEFAULT',
  Guest = 'GUEST',
}

export interface LoginFormProps {
  type: LoginFormType;
}

export interface LoginInputs {
  name: string;
  email?: string;
  password?: string;
  requestDescription?: string;
}
