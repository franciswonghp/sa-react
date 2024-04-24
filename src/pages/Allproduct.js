import react, {useContext} from 'react';
import { ProductContext } from '../ProductContext';
import ProductCard from '../ProductCard';
export default function() {
    const context = useContext(ProductContext)
    const Products = context.getProducts();
    return (<div>
        <h1>All Products</h1>
        {
            Products.map(p => <ProductCard product={p} key={p.product_id}/>)
        }
    </div>)
}