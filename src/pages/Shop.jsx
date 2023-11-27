import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../shared/CartContext.jsx";
import { Product } from "../components/Product.jsx";
import Stripe from "stripe";

export default function Shop() {
    const [productData, setProductData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(
        "--filter by category--"
    );
    const stripe = Stripe(
        "sk_test_51OCUAVDgkjCJ2ux231h8dmXmOW9Usvw3v6BEhDUjgnwonfoDBt7bXmByOdMEGpo5CVejGxa7gTHrVAbeR8ghQQra00DfTf6ay2"
    );

    useEffect(() => {
        stripe.products.list().then((res) => {
            setProductData(res.data);
        });
    }, []);

    const cart = useContext(CartContext);
    const productCount = cart.items.reduce(
        (sum, product) => sum + product.quantity,
        0
    );

    const navigate = useNavigate();

    const filteredProducts =
        selectedCategory === "--filter by category--"
            ? productData
            : productData.filter(
                (product) =>
                    product.features[0].name.toLowerCase() ===
                    selectedCategory.toLowerCase()
            );
            
    return (
        <div className="pt-[12vh] w-full h-screen flex flex-col overflow-y-scroll ">
            <div className="w-full">
                <h1 className="text-3xl m-6 text-center font-bold text-shadow">Shop</h1>
            </div>
            <div className="px-4 flex h-[10%] items-center justify-between ">
                <span className="py-1">
                    <label htmlFor="filter" className="mx-4 ">
                        Filter by:
                    </label>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="bg-inherit mx-4"
                        id="filter"
                    >
                        <option className="" value="--filter by category--">All</option>
                        <option className="" value="Candle">Candles</option>
                        <option className="" value="Swag">Swag</option>
                    </select>
                </span>
            </div>
            <div className="flex flex-wrap justify-evenly px-8">
                {selectedCategory !== "--filter by category--" ? (
                    <>
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 flex items-center justify-center">
                                <Product
                                    initialDetails={{
                                        productId: product.id,
                                        productName: product.name,
                                        description: product.description,
                                        
                                        price: product.default_price,
                                        image: product.images[0],
                                    }}
                                />
                            </div>
                        ))}
                    </>
                ) : (
                    <>
                        {productData.map((product) => {
                            return (
                                <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 flex items-center justify-center">
                                    <Product
                                        initialDetails={{
                                            productId: product.id,
                                            productName: product.name,
                                            description: product.description,
                                            
                                            price: product.default_price,
                                            image: product.images[0],
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </>
                )}
            </div>
        </div>
    );
}