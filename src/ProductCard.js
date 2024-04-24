import {useNavigate} from 'react-router-dom'
import {useContext} from 'react';
import { ProductContext } from './ProductContext';
export default function ProductCard(props) {
    const navigate = useNavigate();
    const context = useContext(ProductContext)
    return (
        <div className="card">
            <h1>{props.product.product_name}</h1>
            <p>{props.product.description}</p>
            <ul>
            <li
            >Price : {props.product.price}</li>  
            <li>Quantity:{props.product.stock_quantity}</li> 
            </ul>
            <button className="btn btn-primary btn-sm" onClick={()=>{
                navigate('/edit/' + props.product.product_id)
            }}>Edit</button>
            <button className="btn btn-danger btn-sm" onClick={()=>{
                context.deleteProduct(props.product.product_id);
            }}> Delete</button>
                 </div>
    )
}