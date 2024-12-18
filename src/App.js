
import './App.css';
import Description from './Components/Description';
import Name from './Components/Name';
import Image from './Components/Image';
import { Card } from 'react-bootstrap';
import Price from './Components/Price';




function App() {
  return (
    <div id = "main">
        <Card style={{ width : '18rem'}}>
          <Image/>
          <Card.Body>

      <Name/>
      <Description/>
      <Price/>

          </Card.Body>

   
          </Card>



    </div>
  );
}

export default App;
