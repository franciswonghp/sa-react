import {useState, createContext,useEffect} from 'react';
import axios from 'axios'



export const ProductContext = createContext();

export function ProductContextData(props) {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const respone = await axios.get("https://3000-kunxinchor-sctp02modern-7084t84mon9.ws-us110.gitpod.io/api/products")
           setProducts(respone.data.products);
        
        }
        fetchData();
    },[]);


    const dataOperations = {
        getProducts: () => {
            return products;

        },
        addProduct: async(productName, description, price, stock) => {
            const response = await axios.post("https://3000-kunxinchor-sctp02modern-7084t84mon9.ws-us110.gitpod.io/api/products", {
                product_name:productName,
                description: description,
                price: price,
                stock_quantity: stock
            });
            const newid = response.data.results[0].insertId;
            const newProduct = {
                product_id: newid,
                product_name:productName,
                description: description,
                price: price,
                stock: stock
            } 
            setProducts([...products, newProduct]);  
        },
        editProduct: async (id, productName, description, price, stock) => {
            const response = await axios.put("https://3000-kunxinchor-sctp02modern-7084t84mon9.ws-us110.gitpod.io/api/products/" + id, {
                product_name: productName,
                description: description,
                price: price,
                stock_quantity: stock
            });
            const newProduct = {
                product_id: id,
                product_name: productName,
                description: description,
                price: price,
                stock_quantity: stock
            }
            const index = products.findIndex( p => p.product_id === parseInt(id));
            setProducts([...products.slice(0, index), newProduct, ...products.slice(index+1)]);
        },
        deleteProduct: async(id) => {
            const response = await axios.delete("https://3000-kunxinchor-sctp02modern-7084t84mon9.ws-us110.gitpod.io/api/products/" + id ); 
            const index = products.findIndex( p => p.product_id === parseInt(id));
            setProducts([...products.slice(0, index), , ...products.slice(index+1)]);
        }

    }
    return (
        <ProductContext.Provider value={dataOperations}>
            {props.children}
        </ProductContext.Provider>
    )
}
