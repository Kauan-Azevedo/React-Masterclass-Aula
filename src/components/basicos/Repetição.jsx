import React from "react";
import { products } from "../../data/Products";


export const Repeticao = () => {

    const getProducts = () => {
        return products.map(prod => {
            return <li key={prod.id}>{prod.id} - {prod.name} - R$ {prod.price}</li>
        })
    }

    return (
        <div>
            <h2>Produtos</h2>
            <ul>
                {getProducts()}
            </ul>
        </div>
    )
}
