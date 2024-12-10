import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";

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
    <ReceiptURLInputStyled>
      <form onSubmit={handleSubmit}>
        <label htmlFor="receipt-url">Paste Receipt Image URL</label>
        <input
          type="text"
          id="receipt-url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Paste the URL here"
        />
        {/* <button type="submit">Parse Receipt</button> */}
        <div className="submit-btn">
          <Button
            name={"Parse Receipt"}
            icon={null}
            bPad={".8rem 1.6rem"}
            bRad={"30px"}
            bg={"var(--color-accent"}
            color={"#fff"}
          />
        </div>
      </form>
    </ReceiptURLInputStyled>
  );
}

const ReceiptURLInputStyled = styled.div`
  border: 2px solid #fff;
  background: transparent;
  // this is the same as incomeItems
  // background: #fcf6f9;
  // border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;

  width: 100%;
  color: #222260;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  label {
    color: var(--primary-color);
    font-weight: bold;
    font-size: 1.3rem;
    padding-left: 2rem;
    position: relative;
  }
  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
  input::placeholder {
    text-align: center; /* placeholder 居中对齐 */
    color: #aaa;
  } /* 设置 placeholder 颜色 */

  .submit-btn {
    button {
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      &:hover {
        background: var(--color-green) !important;
      }
    }
  }
`;

export default ReceiptURLInput;
