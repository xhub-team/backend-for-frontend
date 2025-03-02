export interface UserDAO {
    id: string;
    login: string;
    emaul: string;
    password: string;
    is_author: boolean;
    is_prime: boolean;
    created_at: Date;
}
