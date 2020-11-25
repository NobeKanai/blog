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
    const neverVisit = !localStorage.getItem('hasVisited')
    let result = await fetch(baseURL + '/' + (neverVisit ? '?never=1' : ''))
    let externalLinks = await result.json()

    // 设置此浏览器为已经访问过
    localStorage.setItem('hasVisited', 'true')
    return externalLinks as Core
}