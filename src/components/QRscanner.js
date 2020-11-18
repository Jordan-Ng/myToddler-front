import React, { Component, useState } from 'react'
import {useHistory} from 'react-router-dom'
import QrReader from 'react-qr-reader'
// import QrReader from 'react-qr-scanner'
// import QRCode from 'qrcode.react'

const QRscanner = () => {
    const [delay, setDelay] = useState(10)
    const [result, setResult] = useState('No result')
    let history = useHistory()

    const handleScan = (data) => {
        if (data !== 'No result' && data !== null) {
        setResult(data)
        // history.push(`/teacher/attendance/${data}`)}
        history.push(`/teacher/dash/${data}`)}
    }

    const handleError = (err) => {
        console.error(err)
    }

    return(
        <>
        <div style={{display:'flex', justifyContent:'center', border:'2px solid red', marginTop:'10vh'}}>
        {/* <QrReader delay={delay} style={{height: 500, width: 500}} onError={handleError} onScan={handleScan}/> */}
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
        </div>
        {/* <div style={{display: 'flex', width: '100vw', justifyContent:'center'}}>
            <Spinner color='primary'/>
        </div> */}
        {/* <QRCode value='lim-ricky-user'/> */}
        </>
    )


}

export default QRscanner
