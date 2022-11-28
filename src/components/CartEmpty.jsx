import { Link } from 'react-router-dom';

import imgUrl from '../assets/img/empty-cart.png';

const CartEmpty = () => {
    return (
        <>
            <div class="cart cart--empty">
                <h2>Cart is Empty <span>😕</span></h2>
                <p>You probably haven't ordered pizza yet.<br />To order pizza, go to the main page.</p>
                <img src={imgUrl} alt="Empty cart" />
                <Link class="button button--black" to="/">
                    <span>Go Back</span>
                </Link>
            </div>
        </>
    )
}

export default CartEmpty;