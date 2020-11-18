import React from 'react'
import {Button} from 'reactstrap'
import {useAuth0} from '@auth0/auth0-react'

const Logout = () => {
    const {logout} = useAuth0()
    return(
        <div style={{width:'100vw', height: '100vh', display: 'flex', justifyContent:'center'}}>
            <Button onClick={() => logout({returnTo: window.location.origin})}>Logout</Button>
        </div>
    )
}

export default Logout