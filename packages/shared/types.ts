export interface User {
  id: number
  name: string
  email: string
}

export interface CreateUserDto {
  name: string
  email: string
  password: string
}

export interface LoginDto {
  email: string
  password: string
}

export interface AuthResponse {
  token: string
  user: User
}