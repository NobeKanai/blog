import memoize from 'lodash.memoize'
import { baseURL } from '.'

export interface ExternalLink {
    href: string;
    icon: string;
    id: number;
}


export const fetchExternalLinks = memoize(async () => {
    let result = await fetch(baseURL + '/external_links')
    let externalLinks = await result.json()
    return externalLinks as Array<ExternalLink>
})