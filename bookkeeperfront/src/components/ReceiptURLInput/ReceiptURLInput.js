import React, { useState } from "react";

function ReceiptURLInput({ onParseReceipt }) {
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (imageUrl.trim()) {
      onParseReceipt(imageUrl); // 调用父组件传入的解析函数
      setImageUrl(""); // 清空输入框
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="receipt-url">Enter Receipt Image URL:</label>
        <input
          type="text"
          id="receipt-url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Paste the URL of the receipt image"
        />
        <button type="submit">Parse Receipt</button>
      </form>
    </div>
  );
}

export default ReceiptURLInput;
