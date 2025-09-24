export interface MainContextValue {
    login: string,
    fullName: string,
    isSeller: boolean,
    refresh: boolean,
    setRefresh: (refresh: boolean) => void
}

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

export interface OwnProductListProps {
    listProducts: Product[],
    setListProducts: (list: Product[]) => void
}

export interface ProductCardProps {
    value: Product,
    addToCart: (n: number) => void,
    closeBigCard: () => void
}

export interface AddProductProps {
    value: Product,
    setProduct: (value: Product) => void,
    removeProduct?: (value: Product) => void,
    closeBigCard?: () => void
}

export interface UserProps {
    login: string,
    setLogin: (login: string) => void,
    setFullName: (fullName: string) => void,
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
    setFullName: (fullName: string) => void
}


export interface RegisterProps {
    setLogin: (login: string) => void,
    setPassword: (password: string) => void,
    setRegistration: (reg: boolean) => void,
}

export interface UserDto {
    login: string,
    fullName: string,
    roles: string[]
}


export interface MenuProps {
    menuItem: number,
    setMenuItem: (item: number) => void
}

export const menuItems = ["Home", "About us", "Feedback", "My account", "Log out"]
export const menuNames = ["HOME", "ABOUT", "FEEDBACK", "ACCOUNT", "LOGOUT"]