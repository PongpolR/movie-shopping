/* eslint-disable react/prop-types */
import "../styles/Popup.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Timer from "./Timer";
import QRcode from "./QRcode";
export default function PopUpBill(props) {
  const { text, price } = props;
  return (
    <Popup trigger={<button className="button"> {text} </button>} modal nested>
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header">Purchase</div>
          <div className="content">
            <Timer />
            <p>ราคารวม: {price} baht</p>
            <QRcode price={price} />
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
            >
              close modal
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}
