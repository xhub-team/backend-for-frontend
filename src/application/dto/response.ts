export interface UserDto {
  id: string;
  login: string;
  email: string;
  password: string;
  is_author: boolean;
  is_prime: boolean;
  created_at: Date;
}
