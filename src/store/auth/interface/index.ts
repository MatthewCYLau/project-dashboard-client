export interface User {
  user_id: string;
  email: string;
  time_created: string;
}

export interface AuthBody {
  email: string;
  password: string;
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
