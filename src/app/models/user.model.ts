export interface user{
    id: number;
    name: string;
    email: string;
    password: string;
    role: 'principal' | 'teacher' | 'student';
    className?: string;
}