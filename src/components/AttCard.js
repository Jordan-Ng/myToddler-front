import React, {useState, useEffect} from 'react'
import AttModal from './AttModal'
import Navebar from './Navbar'
import {useAuth0} from '@auth0/auth0-react'
import {useParams, useHistory} from 'react-router-dom'
import { Card, Button, CardFooter, CardBody,
    CardTitle, Form, FormGroup, Label, Input, CustomInput, FormFeedback } from 'reactstrap';

const AttCard = () => {
    // let params = (useParams().name).split('-')
    const {user, isAuthenticated} = useAuth0()
    let params = useParams()
    let history = useHistory()
    const [switchLabel, setSwitchlabel] = useState('check-in')
    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [guardian, setGuardian] = useState('')
    const [inst, setInst] = useState('')
    const [guardianId, setGuardianId] = useState('')
    const [temp, setTemp] = useState('')
    const [remark, setRemark] = useState('')
    const [validQR, setValidQR] = useState(false)

    useEffect(() => {
        try {
            let parayms = (params.name).split('-')
            if (parayms.length === 3) {
                setfname(parayms[1])
                setlname(parayms[0])
                setGuardian(parayms[2])
                setGuardianId(params.guardian_id)
                setInst(params.inst)
                setValidQR(true)
            }
        }
        catch {
            setValidQR(false)
        }
    },[])

    
    // form control
    const switchLabelToggler = (e) => {
        // let targetId = document.getElementById('check-in-out')
        // setReason('')
        // targetId.value = ''
        if (e.target.checked === true) {
            setSwitchlabel('check-in')
        }
        else {
            setSwitchlabel('check-out')
        }
        
    }

    // const checkOutToggler = () => {
    //     if (switchLabel === 'check-in') {
    //         return {
    //             placeholder: '',
    //             disabled: true}
    //     }
    //     else {
    //         return {
    //             placeholder: checkOut,
    //             disabled: true}
    //     }
    // }

    // const checkOutReasonToggler = () => {
    //     if (switchLabel === 'check-in') {
    //         return {
    //             value: undefined,
    //             disabled: true
    //         }
    //     }
    //     else {
    //         return {
    //             defaultValue: '',
    //             disabled: false
    //         }
    //     }
        
    // }

    // const checkInToggler = () => {
    //     if (switchLabel === 'check-out') {
    //         return {
    //             placeholder: '',
    //             disabled: true}
    //     }
    //     else {
    //         return {
    //             placeholder: checkIn,
    //             disabled: true}
    //     }
    // }

    const handleStates = (e, setstate) => {
        setstate(e.target.value)
    }

    // form validation
    const getFormFeedback = (state) => {
        if (state == '') {
            return <FormFeedback />
        }
        else if (state === null) {
            return <FormFeedback invalid>Field cannot be empty</FormFeedback>
        }
        else if (state !== '' && state !== null) {
            return <FormFeedback valid></FormFeedback>
        }
    }

    // const reasonPrompt = () => {
    //     if (reason == '') {
    //         return {valid: false}
    //     }
    //     else if (reason === null) {
    //         return {invalid: true}
    //     }
    //     else if (reason !== '' && reason !== null) {
    //         return {valid: true}
    //     }
    // }

    const tempPrompt = () => {
        if (temp == '') {
            return {valid: false}
        }
        else if (temp === null || parseFloat(temp) >= 37.6 || parseFloat(temp) < 35) {
            return {invalid: true}
        }
        else if (temp !== '' && temp != null && parseFloat(temp) < 37.6 && parseFloat(temp) > 35) {
            return {valid: true}
        }
    }

    // const getReasonFeedback = () => {
    //     if (reason == '') {
    //         return <FormFeedback />
    //     }
    //     else if (reason === null) {
    //         return <FormFeedback invalid>Field cannot be empty</FormFeedback>
    //     }
    //     else if (reason !== '' && reason !== null) {
    //         return <FormFeedback valid></FormFeedback>
    //     }
    // }
    
    const getTempFeedback = () => {
        if (temp == '') {
            return <FormFeedback />
        }
        else if (temp === null) {
            return <FormFeedback invalid>Field cannot be empty</FormFeedback>
        }
        else if (switchLabel === 'check-in' && (parseFloat(temp) <= 35.5 || parseFloat(temp) >= 37.6)) {
            return <FormFeedback invalid>Temp too high/low</FormFeedback>
        }
        else if (temp !== '' && temp !== null) {
            return <FormFeedback valid></FormFeedback>
        }
    }

    return(
        <>
        {isAuthenticated ? !validQR ? 'not a valid QR code' :
        <div>
        <Navebar />
        <div style={{marginTop: '1vh', paddingLeft:'2.5vw', paddingRight:'2.5vw', height: 'auto'}}>
        <Card style={{height: '100%'}}>
        <CardBody>
          <CardTitle tag="h5">Drop-off/Pickup Form</CardTitle>
          <Form>
              <FormGroup>
              <div>
              {/* <CustomInput type='switch' name='customSwitch' label='check-in' disabled={false}/> */}
              <CustomInput type="switch" id="CustomSwitch" name="customSwitch" defaultChecked={true} label={switchLabel} onChange={switchLabelToggler} />
              </div>
              </FormGroup>
              <div style={{display:'flex'}}>
              <FormGroup style={{paddingRight:'1vw'}}>
                  <Label>First Name</Label>
                  <Input placeholder={fname} disabled/>
                </FormGroup>
                <FormGroup>
                  <Label>Last Name</Label>
                  <Input placeholder={lname} disabled/>
              </FormGroup>
              </div>
              <FormGroup>
                <Label>{switchLabel} with</Label>
                <Input value={guardian} placeholder={guardian} disabled/>
              </FormGroup>
              <FormGroup>
                  <Label>Child Care Institution</Label>
                  <Input value={inst} placeholder={inst} disabled/>
              </FormGroup>
              {/* check in toggle */}
              {/* <FormGroup>
                  <Label>Checked-in with</Label>
                  <Input {...checkInToggler()} />
              </FormGroup> */}
              {/* check out toggle */}
              {/* <FormGroup> */}
                  {/* <Label>Checking-out with</Label> */}
                  {/* <Input {...checkOutToggler()} /> */}
                  {/* <Label>Reason</Label>
                  <Input {...checkOutReasonToggler()} {...reasonPrompt()} onChange={e => handleStates(e, setReason)} id='reason'/>
                  {getReasonFeedback()} */}
              {/* </FormGroup> */}
              
              <div style={{display: 'flex'}}>
                  <FormGroup style={{paddingRight: '1vw'}}>
                    <Label>Temperature</Label>
                    <Input type='number' onChange={e => handleStates(e, setTemp)} {...tempPrompt()}/>
                    {getTempFeedback()}
                  </FormGroup>
                  <FormGroup>
                    <Label>Childcare Employee</Label>
                    <Input placeholder={user.nickname} disabled/>    
                  </FormGroup>
              </div>
              <FormGroup>
                  <Label>Remarks from Observation</Label>
                  <Input type='textarea' onChange={e => handleStates(e, setRemark)}/>
              </FormGroup>

          </Form>
        </CardBody>
        <CardFooter>
            <AttModal guardianId={guardianId} remark={remark} temp={temp} guardian={guardian} fname={fname} lname={lname} switchLabel={switchLabel} guardian={guardian} guardianId={guardianId} user={user} inst={inst}/>
        </CardFooter>
        </Card>
        </div> 
        </div>: 'not authorized'}
        </>
    )
}

export default AttCard