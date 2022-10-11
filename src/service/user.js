import {urlFetch} from '../constants/index'

export const getGitHubUser = async(user) => {
    const resp = await fetch (`${urlFetch}${user}`, {
        method: 'GET'
    })

    const payload = resp.json ();
    return payload
}