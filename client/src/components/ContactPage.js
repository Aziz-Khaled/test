import React from 'react'
import {Card} from 'react-bootstrap'
import img1 from '../components/img/img1.jpg'



function ContactPage() {
  return (
    <div>
        <Card style={{ width:  '50%' }}>
  <Card.Img variant="top" className='displayingContactCardPhoto' src={img1} />
  <Card.Body>
    
    {/* <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text> */}
    
  </Card.Body>
</Card>
    </div>
  )
}

export default ContactPage