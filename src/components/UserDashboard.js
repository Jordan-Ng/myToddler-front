import React, {useState, useEffect} from 'react'
import {useAuth0} from '@auth0/auth0-react'
import Navebar from './Navbar'
import {useHistory} from 'react-router-dom'
import  Addtoddler from './Addtoddler'
import {Spinner} from 'reactstrap'
import QRcarousel from './QRcarousel'
import axios from 'axios'
import Nochildinfo from './Nochildinfo'

const UserDashboard = () => {
    const {user, isAuthenticated, getAccessTokenSilently } = useAuth0()
    const [childrenInfo, setChildrenInfo] = useState([])
    const [apiFetched, setApifetched] = useState(false)
    const [institutions, setInstitutions] = useState([])
    let history = useHistory()
    
    useEffect(async()=> {
        console.log(user)
        if (isAuthenticated) {
        let token = await getAccessTokenSilently()
        // console.log(`${process.env.REACT_APP_API_URL}/info`)
        axios({
            method: 'get',
            // url: 'http://localhost:5000/api/info',
            url: `${process.env.REACT_APP_TEST_API}/info`,
            headers: {Authorization: `Bearer ${token}`, Roles: user['https://example.com/roles'][0]['name']},
        })
        .then(result => {
            setChildrenInfo(result.data.child_info)
            setInstitutions(result.data.institutions)
            setApifetched(true)
        })
        .catch(error => console.log(error))}
    },[isAuthenticated])


    return(
    <>
    {isAuthenticated ? 
    <div style={{height: '100vh', width: '100vw'}}>
        <Navebar user={user}/>
        <div style={{width: '100vw', paddingLeft: '2.5vw', paddingRight: '2.5vw', marginTop:'1vh'}}>
        {apiFetched ? <Addtoddler institutions={institutions} setInstitutions={setInstitutions} /> : ''}
        </div>

        {apiFetched ? childrenInfo.length > 0 ? <QRcarousel childrenInfo={childrenInfo}/> : <Nochildinfo /> :<div style={{marginTop:'2vh', width:'100vw', display:'flex', justifyContent:'center'}}><Spinner color='primary'/></div>}
    </div> 
    : history.push('/')}
    </>)
}

export default UserDashboard