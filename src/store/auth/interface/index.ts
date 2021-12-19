export interface User {
  user_id: string;
  email: string;
  time_created: string;
}

export interface AuthBody {
  email: string;
  password: string;
}

export interface Token {
  token: string;
}
