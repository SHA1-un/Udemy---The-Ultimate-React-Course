import headerImage from "../assets/logo.jpg";

import { useContext, useRef } from "react";
import { CartContext } from "../store/cart-context";
import Modal from "./modals/Modal";

export default function Header() {
    const modalRef = useRef();
    const { items } = useContext(CartContext);

    function openCart() {
        modalRef.current.open();
    }

    return <div id="main-header">
        <h1 id="title">
            <img src={headerImage} alt="" />
            ReactFood
        </h1>
        <button className="text-button" onClick={openCart}>
            {`Cart (${items.length})`}
        </button>

        <Modal ref={modalRef} />
    </div>
}