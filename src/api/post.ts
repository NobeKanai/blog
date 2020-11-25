import { baseURL } from '.'

export interface PostPagination {
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

export interface Category {
    id: number;
    name: string;
}



export const fetchPosts = async (page: number, per_page: number = 5) => {
    const uri = baseURL + `/posts/?page=${page}&per_page=${per_page}`

    let result = await fetch(uri)
    let posts = await result.json()
    return posts as PostPagination
}

export const fetchPost = async (id: number) => {
    let result = await fetch(baseURL + '/posts/' + id)
    let post = await result.json()
    return post as Post
}