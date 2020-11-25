import { baseURL } from '.'

export interface CategoryPG {
    items: Category[];
}

export interface Category {
    id: number;
    name: string;
}


export const fetchCategories = async () => {
    let result = await fetch(baseURL + '/categories/')
    let categories = await result.json()
    return (categories as CategoryPG).items
}