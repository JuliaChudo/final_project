import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


export default function Cards({ typeJewelry }) {
    const [products, setProducts] = useState([]);
    async function fetchProducts() {
        try {
            const response = await fetch("./mock/products.json", {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })
            if (response.ok) {
                const data = await response.json()
                const filteredProducts = data.filter(item =>
                    typeof typeJewelry === "string"
                        ? item.category.toLowerCase() === typeJewelry.toLowerCase()
                        : item.isBestseller
                );
                setProducts(filteredProducts);
            }else{
                throw new Error(response.statusText)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>
            <div className="products-grid" >
                {products.length > 0 ? (
                    products.map(item => (
                        <ProductCard key={item.id} product={item} />
                    ))
                ) : (
                    <p>Товарів у цій категорії не знайдено.</p>
                )}
            </div>
        </div>
    );
};
