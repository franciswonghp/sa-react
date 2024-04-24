import react, {useState, useContext}  from 'react';
import { ProductContext } from '../ProductContext';
import {useNavigate} from 'react-router-dom';
export default function() {
    const navigate = useNavigate();
    const context = useContext(ProductContext)
    
    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    return (<div>
        <h1>Create Products</h1>
        <div>
            <label>Product Name:</label>
            <input type="text" className="form-control" value={productName}
            onChange={(e)=>{
                    setProductName(e.target.value);
            }}
            />
        </div>
        <div>
            <label>Description:</label>
            <input type="text" className="form-control" value={description}
            onChange={(e)=>{
                setDescription(e.target.value);
            }}
            />
        </div>
        <div>
            <label>Price:</label>
            <input type="text" className="form-control" value={price}
            onChange={(e)=>{
                setPrice(e.target.value);
            }}
            />
        </div>
        <div>
            <label>Stock Quantity:</label>
            <input type="text" className="form-control" value={stock}
            onChange={(e)=>{
                setStock(e.target.value)
            }}
            />
        </div>
        <button class="btn btn-primary mt-3" onClick={async ()=>{
            await context.addProduct(productName, description, price, stock);
            navigate('/');
        }}>Create</button>
    
    </div>)
}