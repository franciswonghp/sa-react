import react, { useState, useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { ProductContext } from '../ProductContext';
export default function () {
    const navigate = useNavigate();
    const context = useContext(ProductContext)

    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);

    const { id } = useParams();

    useEffect(() => {
        const products = context.getProducts();
        const p = products.find(p => p.product_id === parseInt(id));
        if (p) {
            setProductName(p.product_name);
            setDescription(p.description);
            setPrice(p.price);
            setStock(p.stock_quantity);

        }

    }, [])


    return (<div>
        <h1>Create Products</h1>
        <div>
            <label>Product Name:</label>
            <input type="text" className="form-control" value={productName}
                onChange={(e) => {
                    setProductName(e.target.value);
                }}
            />
        </div>
        <div>
            <label>Description:</label>
            <input type="text" className="form-control" value={description}
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
            />
        </div>
        <div>
            <label>Price:</label>
            <input type="text" className="form-control" value={price}
                onChange={(e) => {
                    setPrice(e.target.value);
                }}
            />
        </div>
        <div>
            <label>Stock Quantity:</label>
            <input type="text" className="form-control" value={stock}
                onChange={(e) => {
                    setStock(e.target.value)
                }}
            />
        </div>
        <button class="btn btn-primary mt-3" onClick={async () => {
            await context.editProduct(id,productName, description, price, stock);
            navigate('/');
        }}>Edit</button>

    </div>)
}