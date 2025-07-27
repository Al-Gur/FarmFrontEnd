export interface LoginProps {
    login: string,
    setLogin: (login: string) => void
    password: string,
    setPassword: (password: string) => void
}

export interface RegisterProps {
    setLogin: (login: string) => void,
    setPassword: (password: string) => void,
    setRegistration: (reg: boolean) => void,
}

export interface UserDto {
    login: string,
    fullNames: string,
    roles: string[]
}