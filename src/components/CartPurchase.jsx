/* eslint-disable react/prop-types */
import { useState } from "react";
import { useCartContext } from "../provider/CartProvider";
import PopUpBill from "./PopUpBill";
export default function CartPurchase() {
  const { cart, cartAction } = useCartContext();
  const [totalPrice, setTotalPrice] = useState(0);
  const [popupVisible, setPopupVisible] = useState(false);
  let carts = cart.items;

  let total = 0;
  const numberItem = carts.length;
  console.log(numberItem);

  // let discount10 = total - (total * 10) / 100;

  return (
    <>
      <div>
        {carts.length != 0 &&
          carts.map((item, id) => {
            total += item.price;
            return (
              <div key={id}>
                <p>{item.id}</p>
                <p>img</p>
                <p>{item.title}</p>
                <p>{item.price} baht</p>
                <p>number</p>
                <hr />
              </div>
            );
          })}
        {numberItem > 0 && numberItem <= 3 && (
          <>
            <p>total: {total} baht</p>
            <PopUpBill text={"Purchase"} price={total} />
          </>
        )}
        {numberItem > 3 && numberItem <= 5 && (
          <>
            <p>total: {total} baht</p>
            <p>ลด 10% เหลือ {total - (total * 10) / 100} baht</p>
            <PopUpBill text={"Purchase"} price={total - (total * 10) / 100} />
          </>
        )}
        {numberItem > 5 && (
          <>
            <p>total: {total} baht</p>
            <p>ลด 20% เหลือ {total - (total * 20) / 100} baht</p>
            <PopUpBill text={"Purchase"} price={total - (total * 20) / 100} />
          </>
        )}

        {numberItem > 0 ? (
          <button onClick={() => cartAction.clearCart()}>Clear</button>
        ) : (
          "ไม่มีสินค้าในตะกร้า"
        )}
      </div>
    </>
  );
}
