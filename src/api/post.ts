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

function hasReaded (id: number | string): boolean {
    const hasReadedList: Array<number> = JSON.parse(localStorage.getItem('hasReaded') || "[]")
    const idi = Number(id);
    if (hasReadedList.includes(idi)) return true
    else {
        hasReadedList.unshift(idi)
        localStorage.setItem("hasReaded", JSON.stringify(hasReadedList))
        return false
    }
}


export const fetchPosts = async (page: number | string, per_page: number | string = 5, category: number | string = "") => {
    const uri = baseURL + `/posts/?page=${page || 1}&per_page=${per_page}&category=${category}`

    let result = await fetch(uri)
    let posts = await result.json()
    return posts as PostPagination
}

export const fetchPost = async (id: number | string) => {
    let result = await fetch(baseURL + '/posts/' + id + `${hasReaded(id) ? '' : 'never=1'}`)
    let post = await result.json()
    return post as Post
}