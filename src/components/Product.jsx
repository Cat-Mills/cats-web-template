import { CartContext } from "../shared/CartContext";
import { useContext, useState, useEffect } from "react";
import Stripe from "stripe";
import { Link } from "react-router-dom";

export const Product = ({ initialDetails }) => {
    const [productName, setProductName] = useState(initialDetails.productName);
    const [price, setPrice] = useState(initialDetails.price);
    const [category, setCategory] = useState(initialDetails.category);
    const [id, setId] = useState(initialDetails.productId);

    const stripe = Stripe(
        "sk_test_51OCUAVDgkjCJ2ux231h8dmXmOW9Usvw3v6BEhDUjgnwonfoDBt7bXmByOdMEGpo5CVejGxa7gTHrVAbeR8ghQQra00DfTf6ay2"
    );

    useEffect(() => {
        const getPrice = async () => {
            const priceAmount = await stripe.prices.retrieve(price);
            setPrice(priceAmount.unit_amount);
        };
        getPrice();
    }, []);

    const cart = useContext(CartContext);

    const productQuantity = cart.getProductQuantity(id);

    return (
        <div className=" w-11/12 p-4 flex flex-col justify-evenly items-center cursor-pointer">
            <div className="w-full">
                <Link to={`/Shop/${id}`}>
                    <div
                        style={{ backgroundImage: `url(${initialDetails.image})` }}
                        className="h-80 bg-center bg-cover rounded-md"
                    ></div>
                </Link>
                <h2 className="text-md font-bold text-mint">{initialDetails.category}</h2>
                <Link to={`/Shop/${id}`} className="text-xl">
                    {productName}
                </Link>
                <h3 className="text-lg font-semibold" >${price / 100}.00 </h3>
            </div>
        </div>
    );
};