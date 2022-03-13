import { useContext } from "react";
import { CartContext } from "../Components/Context/CartContext"
const Calculation = () => {
    const cartBooks = useContext(CartContext)[0];

    let totalQuantity = 0;
    let total = 0;
    for (const product of cartBooks) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.bookPrice * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }


    const shipping = total > 0.10 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandtotal = total + shipping + tax;

    return {
        cartBooks,
        totalQuantity,
        shipping,
        tax,
        total,
        grandtotal
    }
}
export default Calculation;