import Card from 'react-bootstrap/Card';
import {Button,Typography} from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function StyleShowcase() {
  return (
    <>
   
    
    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Typography variant="h2" component="h2"> Heading </Typography>

        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="contained" color="success" >contained</Button>
     <span className="box-decoration-slice bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white ...">
sample
</span>

      </Card.Body>
    </Card>
   
    </>
  );
}

export default StyleShowcase;