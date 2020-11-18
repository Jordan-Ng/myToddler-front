import React, {useState} from 'react'
import {useAuth0} from '@auth0/auth0-react'
import Navebar from './Navbar'
import AttCard from './AttCard'

const AttendanceForm = () => {
    const {user, isAuthenticated} = useAuth0()

    return(
        <>
        {isAuthenticated ?
        <div>
        {/* <Navebar user={user}/> */}
        {/* <AttCard user={user}/></div> : '' } */}
        <AttCard/></div> : ''}
        </>
    )
}

export default AttendanceForm