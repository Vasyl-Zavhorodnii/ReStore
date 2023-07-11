import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(responce => responce.json())
            .then(data => setProducts(data))
    }, []);//array: "[]" means its execute one time
    return (
        <>
            <ProductList products={products}></ProductList>
           
        </>

    )
}