import { baseURL, generalArgsResolver } from '.'
import { Category } from './category'
import memorize from 'lodash.memoize'

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
    needs_verify: boolean;
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


export const fetchPosts = memorize(async (page: number | string, per_page: number | string = 5, category: number | string = "") => {
    const uri = baseURL + `/posts/?page=${page || 1}&per_page=${per_page}&category=${category}`

    let result = await fetch(uri)
    let posts = await result.json()
    return posts as PostPagination
}, generalArgsResolver)


export const fetchPost = memorize(async (id: number | string, password?: string) => {
    let url = baseURL + '/posts/' + id

    if (!hasReaded(id) || password)
        url += '?'
    if (!hasReaded(id))
        url += '&never=1'
    if (password)
        url += '&password=' + password
    let result = await fetch(url)
    let post = await result.json()
    return post as Post
}, generalArgsResolver)