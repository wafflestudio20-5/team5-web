export interface SignUpRequest {
  email: string
  password: string
  repassword: string
  shoes: number | string
}

export interface InputChecker {
  name: string
  value: string
}
