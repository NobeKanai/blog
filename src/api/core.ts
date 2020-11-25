import { baseURL } from '.'

export interface Core {
    avatar: string;
    create_date: string;
    id: number;
    name: string;
    subtitle: string;
    summary: string;
    title: string;
    bg_image: string;
}


export const fetchCore = async () => {
    let result = await fetch(baseURL + '/')
    let externalLinks = await result.json()
    return externalLinks as Core
}