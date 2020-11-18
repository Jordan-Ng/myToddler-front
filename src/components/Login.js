import React, { useState, useEffect} from 'react'
import {useAuth0} from '@auth0/auth0-react'
import {useHistory} from 'react-router-dom'
import { Card, Button, CardHeader, CardFooter, CardBody, Spinner } from 'reactstrap';

const Login = () => {
    const {loginWithRedirect, isLoading, isAuthenticated, user} = useAuth0()
    let history = useHistory ()

    useEffect(() => {
        if (isAuthenticated && user['https://example.com/roles'][0]['name'] == 'Parent') {
            history.push('/user/dashboard')}
        else if (isAuthenticated && user['https://example.com/roles'][0]['name'] == 'Teacher'){
            history.push('teacher/dashboard')
        }
        
    },[isAuthenticated])

    return (
        <>
        {isLoading ? <div style={{width: '100vw', height:'100vh', paddingLeft: '50vw', paddingTop: '50vh'}}><Spinner color='light'/></div> :
        <div style={{ paddingLeft: '10vw', paddingRight: '10vw', paddingTop: '25vh', paddingBottom: '25vh' }}>
            <Card style={{ width: '80vw' }}>
                <CardHeader tag="p" style={{textAlign:'center'}}>MyToddler</CardHeader>
                <CardBody>
                    <Button color='primary' style={{width: '100%'}} onClick={() => {loginWithRedirect()}}>Login</Button>
                </CardBody>
            </Card>
        </div>}
        </>
    )
}

export default Login