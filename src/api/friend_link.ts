import memoize from 'lodash.memoize';
import { baseURL } from '.';

export interface FriendLink {
    id: number;
    name: string;
    avatar: string;
    href: string;
}


export const fetchFriendsLink = memoize(async () => {
    let result = await fetch(baseURL + '/friends')
    return (await result.json()) as Array<FriendLink>
})