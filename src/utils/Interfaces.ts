export interface LoginProps {
    login: string,
    setLogin: (login: string) => void
    password: string,
    setPassword: (password: string) => void
}

export interface UserDto {
    login: string,
    fullNames: string,
    roles: string[]
}