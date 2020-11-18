import React, {useState} from 'react'

const Datepicker = () => {
    let Datepicker = require('reactstrap-date-picker')
    const [input, setinput] = useState(null)
    const [simpleInput, setSimpleInput] = useState('')

    const handleChange = (v,f) => {
        setinput(v)
        setSimpleInput(f)
    }

    return(
        <>
        <Datepicker value={input} onChange={(v,f) => handleChange(v,f)} maxDate={new Date().toISOString()} />
        </>
    )
}

export default Datepicker