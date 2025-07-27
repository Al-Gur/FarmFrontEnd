export interface Product {
    id: string,
    name: string,
    image: string,
    category: string,
    quantity: number,
    producer: string
}

export interface ProductProps {
    listProducts: Product[],
    setListProducts: (list: Product[]) => void
}

export interface ProductListProps {
    listProducts: Product[]
}


export interface UserProps {
    login: string,
    setLogin: (login: string) => void,
    listProducts: Product[],
    setListProducts: (list: Product[]) => void
}

export interface LoggedProps {
    login: string,
    setLogin: (login: string) => void,
    password: string,
    setPassword: (password: string) => void,
    listProducts: Product[],
    setListProducts: (list: Product[]) => void
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
