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

export interface Product {
    id: string,
    name: string,
    quantity: number,
    producer: string
}

export interface ProductProps {
    listProducts: Product[]
}
