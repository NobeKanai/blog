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

const hasReadedList: Array<number> = JSON.parse(localStorage.getItem('hasReaded') || "[]")


function hasRead (id: number | string): boolean {
    const idi = Number(id);
    if (hasReadedList.includes(idi)) return true
    else
        return false
}

function setHasRead (id: number | string) {
    const idi = Number(id);
    hasReadedList.unshift(idi)
    localStorage.setItem("hasReaded", JSON.stringify(hasReadedList))
}


export const fetchPosts = memorize(async (page: number | string, per_page: number | string = 5, category: number | string = "") => {
    const uri = baseURL + `/posts/?page=${page || 1}&per_page=${per_page}&category=${category}`

    let result = await fetch(uri)
    let posts = await result.json()
    return posts as PostPagination
}, generalArgsResolver)


export const fetchPost = memorize(async (id: number | string, password?: string) => {
    let url = baseURL + '/posts/' + id

    if (!hasRead(id) || password)
        url += '?'
    if (!hasRead(id))
        url += '&never=1'
    if (password)
        url += '&password=' + password
    let result = await fetch(url)
    let post: Post = await result.json()
    if (!hasRead(id) && !post.needs_verify) setHasRead(id)
    return post
}, generalArgsResolver)