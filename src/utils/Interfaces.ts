export interface LoginProps {
    login: string,
    setLogin: (login: string) => void
}

export interface AuthProps {
    login: string,
    setLogin: (login: string) => void,
    password: string,
    setPassword: (password: string) => void
}

export interface SetAuthProps {
    setLogin: (login: string) => void,
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
    image: string,
    category: string,
    quantity: number,
    producer: string
}

export interface ProductProps {
    listProducts: Product[]
}
