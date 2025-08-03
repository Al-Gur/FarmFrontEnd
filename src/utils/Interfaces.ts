export interface Product {
    id: string,
    name: string,
    image: string,
    category: string,
    price: number,
    quantity: number,
    producer: string
}

export interface ProductsProps {
    listProducts: Product[],
    setListProducts: (list: Product[]) => void,
    listProducts2: Product[],
    setListProducts2: (list: Product[]) => void
}

export interface ProductCardProps {
    value: Product,
    index: number,
    onCardClick: () => void
}

export interface ProductListProps {
    listProducts: Product[],
    listProducts2: Product[]
}


export interface UserProps {
    login: string,
    setLogin: (login: string) => void,
    listProducts: Product[],
    setListProducts: (list: Product[]) => void
    listProducts2: Product[],
    setListProducts2: (list: Product[]) => void
}

export interface LoggedProps {
    login: string,
    setLogin: (login: string) => void,
    password: string,
    setPassword: (password: string) => void,
    listProducts: Product[],
    setListProducts: (list: Product[]) => void
    listProducts2: Product[],
    setListProducts2: (list: Product[]) => void
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
