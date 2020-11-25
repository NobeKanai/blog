import { baseURL } from '.'
import { Category } from './category'

export interface PostPagination {
    category: Category;
    has_next: boolean;
    has_prev: boolean;
    items: Post[];
    page: number;
    pages: number;
    total: number;
}

export interface Post {
    bg_image: string;
    category: Category;
    create_date: string;
    id: number;
    read_number: number;
    seo_title: string;
    subtitle: string;
    tags: Category[];
    title: string;
}





export const fetchPosts = async (page: number | string, per_page: number | string = 5, category: number | string = "") => {
    const uri = baseURL + `/posts/?page=${page || 1}&per_page=${per_page}&category=${category}`

    let result = await fetch(uri)
    let posts = await result.json()
    return posts as PostPagination
}

export const fetchPost = async (id: number | string) => {
    let result = await fetch(baseURL + '/posts/' + id)
    let post = await result.json()
    return post as Post
}