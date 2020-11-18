import React, {useEffect, useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import {toast} from 'react-toastify'
import {useAuth0} from '@auth0/auth0-react'
import Datepicker from './Datepicker'
import axios from 'axios'

const Addtoddler = ({institutions, setInstitutions}) => {    
      const [modal, setModal] = useState(false);
      const [fname, setfname] = useState('')
      const [lname, setlname] = useState('')
      const [dob, setdob] = useState('')
      const [gender, setgender] = useState('')
      const [diet, setDiet] = useState('')
      const [remark, setRemark] = useState('')
      const [institute, setinstitute] = useState('')
      const {user, isAuthenticated, getAccessTokenSilently} = useAuth0()
      let states = [setfname, setlname, setdob, setinstitute, setgender, setDiet, setRemark]
      let inst = [...institutions]
    //   useEffect(async() => {
    //     if (isAuthenticated) {
    //     let token = await getAccessTokenSilently()
    //     axios({
    //         method:'GET',
    //         url: 'http://localhost:5000/api/institutions',
    //         headers: {Authorization: `Bearer ${token}`}
    //     })
    //     .then(result => console.log(result.data))
    //     .catch(error => console.log(error))
    // }
    //   },[])

      const toggle = (e) => {
        e.preventDefault()
        console.log(institutions)
        for (let i=0; i < states.length; i++) {
              states[i]('')
          }  
        setModal(!modal)};

    const closeForm = () => {
        for (let i=0; i < states.length; i++) {
            states[i]('')
        }  
      setModal(!modal);
    }
    
      const handleStates = (e, setstate) => {
        setstate(e.target.value)  
      }

      const handleSubmit = async (e) => {
        e.preventDefault()
        let array = [fname, lname, dob, institute, gender]
        if (fname && lname && dob && institute && gender) {
            let check = []
            for (let i=0; i < array.length; i++) {
                if (array[i] !== '' && array[i] !== null) {
                    check.push(true)     
                }
                else {
                    check.push(false)
                }
            }
            if (!check.includes(false)) {
                let token = await getAccessTokenSilently()
                // console.log(token)
                axios({
                    method: 'post',
                    // url: 'http://localhost:5000/api/child/new',
                    url: `${process.env.REACT_APP_TEST_API}/child/new`,
                    headers: {Authorization: `Bearer ${token}`, Roles: user['https://example.com/roles'][0]['name']},
                    data: {
                        fname : fname,
                        lname : lname,
                        dob : dob,
                        gender: gender,
                        institution : institute,
                        diet_restrictions : diet,
                        remark: remark
                    }
                })
                .then(result => {
                    toast(result.data.message)
                    closeForm()
                    setTimeout(() => {window.location.reload()},1000)
                })
                .catch(error => console.log(error))
            }
        }
        else {
            for (let i=0; i<array.length; i++){
                if (array[i] == ''){
                    states[i](null)
                }
            }
            console.log('fields missing')
        }
        // clearForm()
      }

      const clearState = () => {
        for (let i=0; i < states.length; i++) {
            states[i]('')
        }
      }

      const clearForm = () => {
        let formInputs = document.getElementsByClassName('formInput')
        for (let i=0; i<formInputs.length; i++) {
            formInputs[i].value = ''
            }
      }

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

      const formPrompt = (state) => {
          if (state == '') {
              return {valid: false}
          }
          else if (state === null){
              return {invalid: true}
          }
          else if (state !== '' && state !== null) {
              return {valid: true}
          }
      }

      const agePrompt = () => {
          if (dob == '') {
              return {valid: false}
          }
          else if (dob === null) {
              return {invalid: true}
          }
          else if (dob !== '' && dob !== null) {
              return {valid: true}
          }
      }

    //   validation

      return (
        <>
        {isAuthenticated ?
        <div>
          <Button style={{width: '100%'}} outline color="secondary" onClick={toggle}> + Add myToddler</Button>
          <Modal isOpen={modal} toggle={toggle} style={{paddingTop: '20vw'}}>
            <ModalHeader toggle={toggle}>myToddler's info</ModalHeader>
            <ModalBody>
              <Form>
                <div style={{display:'flex'}}>
                <FormGroup style={{paddingRight: '1vw'}} onChange={(e) => handleStates(e, setfname)}>
                    <Label>First Name</Label>
                    <Input className='formInput' {...formPrompt(fname)} />
                    {getFormFeedback(fname)}
                </FormGroup>
                <FormGroup onChange={(e) => handleStates(e, setlname)}>
                    <Label>Last Name</Label>
                    <Input className='formInput' {...formPrompt(lname)}/>
                    {getFormFeedback(lname)}
                </FormGroup>
                </div>

                <div style={{display:'flex'}}>
                <FormGroup style={{width: '30%', paddingRight:'1vw'}} >
                <Label for='exampleSelect'>Gender</Label>
                <Input type='select' name='select' id='exampleSelect' onChange={e => handleStates(e, setgender)} {...formPrompt(gender)}>
                <option value=''>-Pick-</option>
                <option value='M'>M</option>
                <option value='F'>F</option>
                </Input>
                </FormGroup>
                
                <FormGroup>
                <Label for="exampleDate">Date of Birth</Label>
                {/* <Datepicker /> */}
                <Input
                type="date"
                name="date"
                id="exampleDate"
                placeholder="date placeholder"
                onChange = {(e) => handleStates(e,setdob)}
                {...formPrompt(dob)}
                />
                </FormGroup>
                </div>

                <FormGroup style={{width: '100%'}}>
                <Label>Childcare Institution</Label>
                <Input type='select' name='select' id='exampleSelectInst' onChange={e => handleStates(e, setinstitute)} {...formPrompt(institute)} >
                <option value=''>-- None Selected --</option>
                {institutions.map((op) => {return <option key={op} value={op}>{op}</option>})}
                </Input>

                </FormGroup>

                <FormGroup onChange={(e) => handleStates(e, setDiet)}>
                    <Label>Dietary Restrictions</Label>
                    <Input className='formInput' />
                </FormGroup>
                <FormGroup onChange={(e) => handleStates(e, setRemark)}>
                    <Label>Remarks</Label>
                    <Input type='textarea' className='formInput'/>
                </FormGroup>

              </Form>
            </ModalBody>
            <ModalFooter>
              <Button style={{width: '100%'}} color="primary" onClick={handleSubmit}>Submit</Button>{' '}
              {/* <Button color='danger' onClick = {() => console.log(dob, gender, institute)}>test</Button> */}
            </ModalFooter>
          </Modal>
        </div> : ''}
        </>
      );
    }
    
export default Addtoddler