/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import QRCode from "qrcode";
import generatePayload from "promptpay-qr";

export default function QRcode(props) {
  const { price } = props;
  const payload = generatePayload("0985569390", { amount: price });

  const [dataUrl, setDataUrl] = useState("");

  useEffect(() => {
    QRCode.toDataURL(payload, { width: 300 }, (err, dataUrl) => {
      if (err) console.error(err);
      setDataUrl(dataUrl);
    });
  }, []);

  return (
    <div className="app">
      {dataUrl && (
        <div className="generated-view">
          <img src={dataUrl} style={{ width: "200px" }} alt="qr code" />
          <a href={dataUrl} />
        </div>
      )}
    </div>
  );
}
