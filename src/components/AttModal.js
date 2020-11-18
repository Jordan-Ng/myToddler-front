import React, {useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {useHistory} from 'react-router-dom'
import {toast} from 'react-toastify'
import {useAuth0} from '@auth0/auth0-react'
import axios from 'axios';

const AttModal = ({temp, remark, fname, lname, guardian, switchLabel, guardianId, checkIn, checkOut, inst }) => {
    const [modal, setModal] = useState(false);
    const {user, getAccessTokenSilently} = useAuth0()
    let history = useHistory()

    const toggle = () => {
        let states = [temp, fname, lname]
        let check = []
        // console.log(temp, reason, fname, lname, switchLabel )
        for (let i=0; i<states.length; i++) {
            if (states[i] !== '' &&  states[i] !== null) {
                if (i == 0) {
                    if (switchLabel === 'check-in' && (parseFloat(states[i]) < 35 || parseFloat(states[i]) >= 37.6) ){
                        check.push(false)
                    }
                    else if (switchLabel === 'check-out') {
                        check.push(true)
                    }
                    else {
                        check.push(true)
                    }
                }
                else {
                check.push(true)
            }
            }
            else {
                check.push(false)
            }
        }
        if (!check.includes(false)) {
        setModal(!modal)}
        else {
            console.log(check)
            toast('incomplete/invalid information. Please check again')
        }
    }

    const cancel = () => {
        setModal(!modal)
    }
    
    const formSubmit = async(e) => {
        e.preventDefault()
        let token = await getAccessTokenSilently()
        axios({
            method: 'post',
            // url: 'http://localhost:5000/api/child/attendance',
            url: `${process.env.REACT_APP_TEST_API}/child/attendance`,
            headers: {Authorization: `Bearer ${token}`, Roles: user['https://example.com/roles'][0]['name']},
            data: {
                fname: fname,
                lname: lname,
                guardian: guardian,
                guardianId : guardianId,
                label: switchLabel,
                temperature: temp,
                remark: remark,
                employee: user.sub,
                institution: inst
            }
        })
        .then(result => {
            toast(result.data.message)
            if (result.data.success) {
                history.push('/teacher/dashboard')
            }
            
        })
        .catch(error => console.log(error))
        // toast('child info sent to server for storing')
        // history.push('/teacher/dashboard')
    }
    return(
        <>
        <Button color="primary" style={{width:'100%'}} onClick={toggle}>Confirm & Review</Button>
        <Modal isOpen={modal} toggle={cancel} style={{marginTop:'20vh'}}>
            <ModalHeader toggle={cancel}>Confirm Details</ModalHeader>
                <ModalBody>
                <div>Please Review and Submit:</div>
                <div>Child Name: {lname},{fname}</div>
                <div>Temperature: {temp}</div>
    {switchLabel === 'check-in' ? <div>Checked in with: {guardian}</div> : 
                    <div>
                        <div>Checking out with: {guardian}</div>
                        {/* <div>Reason: {reason}</div> */}
                    </div>}
                <div>institution: {inst}</div>
                <div>employee: {user.nickname}</div>
                <div>remarks: {remark}</div>
                </ModalBody>
            <ModalFooter>
        <Button color="primary" onClick={formSubmit} style={{width: '100%'}}>Submit</Button>
        </ModalFooter>
      </Modal>
        </>
    )
}

export default AttModal