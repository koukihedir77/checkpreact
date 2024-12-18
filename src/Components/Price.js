import Button from 'react-bootstrap/Button';
import Product from "./Product";

const Price=()=>{
    return(
        <Button variant ="primary">Buy now{Product.Price}DT</Button>
    )
}


export default Price;