import {Card} from "react-bootstrap"
 import product from "./Product"


const Image=()=>{
    return(
        <Card.Img variant="top" src={product.pathURL} />
    )
}

export default Image
