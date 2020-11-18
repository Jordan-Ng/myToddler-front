import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const Nochildinfo = () => {
    return(
        <div style={{paddingLeft:'2.5vw', paddingRight:'2.5vw', marginTop:'1vh'}}> 
        <Card body inverse color="info" >
        {/* <CardTitle tag="h5">Special Title Treatment</CardTitle> */}
        <CardText>You have not registered any myToddler yet. Please add myToddler</CardText>
      </Card>
        </div>
    )
}

export default Nochildinfo