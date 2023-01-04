export interface SignUpRequest {
  email: string;
  password: string;
  shoes: number | string;
}

export interface SignUpExample {
  email: string;
  password: string;
  repassword: string;
}

export interface InputChecker {
  name: string;
  value: string;
}
