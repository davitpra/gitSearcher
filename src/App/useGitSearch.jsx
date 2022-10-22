import {React, useState} from 'react'
import {getGitHubUser} from '../service/user'

function useGitSearch() {
    const [inputUser, setInputUser] = userState ("octocat");
    const [userState, setUserState]= useState (inputUser);
    const [notFound, setNotFound] = useState (false);
    
    const gettinUser = async(user) => {
        const userResponse = await getGitHubUser (user)

    if (userState === 'octocat'){
        localStorage.setItem('octocat',JSON.stringify(userResponse)) 
    }

    if (userResponse.message === 'Not Found'){
        const { octocat } = localStorage
        setInputUser(octocat)
        setUserState(JSON.parse(octocat)) // JSON.parse()
        setNotFound(true)
    }else {
        setUserState(userResponse)
        setNotFound(false) // **
    }
    }

    useEffect(() => {
    gettinUser (inputUser)
    }
    , [inputUser])
return 
    {

    }

}

export default useGitSearch