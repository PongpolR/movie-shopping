/* eslint-disable react/prop-types */
import "../styles/Popup.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Timer from "./Timer";
import QRcode from "./QRcode";
export default function PopUpBill(props) {
  const { text, price } = props;
  return (
    <Popup
      contentStyle={{ width: "450px" }}
      trigger={<button>{text}</button>}
      modal
      nested
    >
      {/* <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">Purchase</div>
        <div className="content">
          <Timer />
          <p>ราคารวม: {price} baht</p>
          <QRcode price={price} />
        </div>
      </div> */}
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header">
            <p>Purchase</p>
            <p style={{ fontWeight: "500" }}>(mobile banking)</p>
          </div>
          <div className="content">
            <p>กรุณาชำระเงินภายในเวลาที่กำหนด</p>
            <p>กรณีลูกค้าต้องการซื้อสินค้าต่อ กดปิดหน้าต่างนี้</p>
            <p>หากหมดเวลาชำระเงินระบบจะเคลียร์ตะกร้าอัตโนมัติ</p>
            <Timer />
            <p>ราคารวม: {price} baht</p>
            <QRcode price={price} />
          </div>
          {/* <div className="actions">
            <button
              className="button-action"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
            >
              close modal
            </button>
          </div> */}
        </div>
      )}
    </Popup>
  );
}
