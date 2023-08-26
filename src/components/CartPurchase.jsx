/* eslint-disable react/prop-types */
import { useCartContext } from "../provider/CartProvider";
export default function CartPurchase() {
  const { cart, cartAction } = useCartContext();
  let carts = cart.items;
  console.log(carts);

  return (
    <>
      <div>
        {carts.length != 0 &&
          carts.map((item, id) => {
            return (
              <div key={id}>
                <p>img</p>
                <p>{item.title}</p>
                <p>{item.price} baht</p>
                <p>number</p>
                <hr />
              </div>
            );
          })}

        <button onClick={() => cartAction.clearCart()}>Clear</button>
      </div>
    </>
  );
}
