import React, { useState, useEffect } from 'react'
import {useAuth0} from '@auth0/auth0-react'
import {useParams, useHistory} from 'react-router-dom'
import {Spinner} from 'reactstrap'
import axios from 'axios'

const QRverify = () => {
    const {isAuthenticated, getAccessTokenSilently, user} = useAuth0()
    let params = useParams()
    let history = useHistory()

    useEffect(async() => {
        if (isAuthenticated) {
        let token = await getAccessTokenSilently()
        axios({
            method: 'GET',
            headers: {Authorization: `Bearer ${token}`},
            // url: `http://localhost:5000/api/child/verify/${params.uuid4}`,
            url: `${process.env.REACT_APP_TEST_API}/child/verify/${params.uuid4}`,
        })
        .then(result => {
            if (result.data.valid) {
                history.push(`/teacher/attendance/${params.uuid4}/${result.data.institution}/${result.data.params}/${result.data.guardian_id}`)
            }
            else {
                history.push('/teacher/dashboard')
            }
        })
        .catch(error => console.log(error))
    }
    },[isAuthenticated])

    return(
        <>
        {isAuthenticated ? 
        <div style={{height:'100vh', width:'100vw', background:'lightBlue', paddingTop:'20vh'}}>
            <div style={{display: 'flex', justifyContent:'center', width:'100vw'}}>
            <Spinner color='light' type='grow'/>
            </div>
            <div style={{display: 'flex', width: '100vw', justifyContent:'center'}}>
            <p style={{color: 'dimGray'}}>Hang tight, verifying QR code ...</p>
            </div>
            </div> : history.push('/')}
        </>
    )
}

export default QRverify