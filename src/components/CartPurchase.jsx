/* eslint-disable react/prop-types */
import { useState } from "react";
import { useCartContext } from "../provider/CartProvider";
import PopUpBill from "./PopUpBill";
import "../styles/Cart.css";
export default function CartPurchase() {
  const { cart, cartAction } = useCartContext();
  const [totalPrice, setTotalPrice] = useState(0);
  const [popupVisible, setPopupVisible] = useState(false);
  let carts = cart.items;

  let total = 0;
  const numberItem = carts.length;
  // console.log(numberItem);

  // let discount10 = total - (total * 10) / 100;

  return (
    <>
      <div className="container">
        <h1 className="title-cart">Shopping cart</h1>
        <div>
          {carts.length != 0 && (
            <div className="item-cart cart-header">
              <div>Movie Title</div>
              <div>Price</div>
            </div>
          )}
        </div>
        <div>
          {carts.length != 0 &&
            carts.map((item, id) => {
              total += item.price;
              return (
                <div key={id} className="item-cart">
                  <div className="left">
                    <img
                      src={
                        "http://image.tmdb.org/t/p/w500/" + item.backdrop_path
                      }
                      alt="img"
                    />
                    <p className="name">{item.title}</p>
                  </div>

                  <p>{item.price} baht</p>
                </div>
              );
            })}
        </div>

        {numberItem > 0 && numberItem <= 3 && (
          <>
            <div className="total">total: {total} baht</div>

            <div className="purchase-btn">
              <div className="clear">
                <button onClick={() => cartAction.clearCart()}>Clear</button>
              </div>
              <PopUpBill text={"Purchase"} price={total} />
            </div>
          </>
        )}
        {numberItem > 3 && numberItem <= 5 && (
          <>
            <div className="total">total: {total} baht</div>
            <p className="discount">
              10% discount: {total - (total * 10) / 100} baht
            </p>

            <div className="purchase-btn">
              <div className="clear">
                <button onClick={() => cartAction.clearCart()}>Clear</button>
              </div>
              <PopUpBill text={"Purchase"} price={total - (total * 10) / 100} />
            </div>
          </>
        )}
        {numberItem > 5 && (
          <>
            <div className="total">total: {total} baht</div>
            <p className="discount">
              20% discount: {total - (total * 20) / 100} baht
            </p>

            <div className="purchase-btn">
              <div className="clear">
                <button onClick={() => cartAction.clearCart()}>Clear</button>
              </div>
              <PopUpBill text={"Purchase"} price={total - (total * 20) / 100} />
            </div>
          </>
        )}

        {numberItem == 0 && <div className="no-item">ไม่มีสินค้าในตะกร้า</div>}
      </div>
    </>
  );
}
