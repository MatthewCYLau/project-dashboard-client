export interface User {
  _id: string;
  email: string;
  name: string
  time_created: string;
}

export interface AuthBody {
  email: string;
  password: string;
}

export interface RegistrationBody extends AuthBody {
  name: string;
}

export interface VerifyEmailBody {
  email: string;
  code: string;
}

export interface TriggerVerificationBody {
  email: string;
}

export interface Token {
  token: string;
}
