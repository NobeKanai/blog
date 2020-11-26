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


const __fetchCore = async () => {
    const neverVisit = !localStorage.getItem('hasVisited')
    let result = await fetch(baseURL + '/' + (neverVisit ? '?never=1' : ''))
    let externalLinks = await result.json()

    // 设置此浏览器为已经访问过
    localStorage.setItem('hasVisited', 'true')
    return externalLinks as Core
}

let core: Core

// core is only allowed fetch once
export const fetchCore = async () => {
    if (core) return core
    else {
        core = await __fetchCore()
        return core
    }
}