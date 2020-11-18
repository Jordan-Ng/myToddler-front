import React, {useState, useEffect} from 'react'
import Navebar from './Navbar'
import {useAuth0} from '@auth0/auth0-react'
import {useHistory} from 'react-router-dom'
import QRscanner from './QRscanner'
import axios from 'axios'

const TeachDashboard = () => {
    const {user, isAuthenticated, getAccessTokenSilently} = useAuth0()
    let history = useHistory()

    useEffect(async() => {
        if (isAuthenticated) {
        let token = await getAccessTokenSilently()
        axios({
            method: 'GET',
            url: `${process.env.REACT_APP_TEST_API}/private`,
            headers: {Authorization: `Bearer ${token}`, Roles: user['https://example.com/roles'][0]['name']}
        })
        .then(result => console.log(result))
        .catch(error => console.log(error))

    }
    },[])

    return(
        <>
        {isAuthenticated ? <div><Navebar user={user}/> 
        <QRscanner /></div>
        : history.push('/')}
        </>
    )
}

export default TeachDashboard