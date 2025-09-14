export interface Product {
    id: string,
    name: string,
    image: string,
    category: string,
    price: number,
    quantity: number,
    producer: string
}

export interface Category {
    category: string,
    count: number
}

export interface ProductListDto {
    products: Product[],
    categories: Category[]
}


export interface ProductsProps {
    listProducts: Product[],
    setListProducts: (list: Product[]) => void,
    listProducts2?: Product[],
    setListProducts2?: (list: Product[]) => void
}

export interface ProductListProps {
    listProducts: Product[],
    listProducts2?: Product[],
    setListProducts2?: (list: Product[]) => void,
    selectedCategory: string,
    maxPrice: number,
    sortBy: string
}

export interface ProductCardProps {
    value: Product,
    addToCart: (n: number) => void,
    closeBigCard: () => void;
}

export interface AddProductProps {
    value: Product,
    setProduct: (value: Product) => void,
    closeBigCard?: () => void;
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


export interface MenuProps {
    menuItem: number,
    setMenuItem: (item: number) => void,
    login: string
}

export const menuItems = ["Home", "About us", "My account"]
export const menuNames = ["HOME", "ABOUT", "ACCOUNT"]