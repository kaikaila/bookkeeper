import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/globalContext";
import Button from "../Button/Button";
import { plus } from "../../utils/icons";

function Form() {
  // when the () after useGlobalContext is dropped. this cannot function
  const { addIncome, getIncomes, error, setError } = useGlobalContext();
  // validate the input
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(inputState);
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });
  };
  return (
    <FormStyled onSubmit={handleSubmit}>
      <div className="input-control">
        {/* Title Input */}
        <input
          type="text"
          value={title}
          name={"title"}
          placeholder="Income Title"
          onChange={handleInput("title")}
        />
      </div>

      <div className="amount_and_select">
        {/* Amount Input */}
        <div className="input-control amount">
          <input
            type="text"
            value={amount}
            name={"amount"}
            placeholder="Income Amount"
            onChange={handleInput("amount")}
          />
        </div>
        {/* Category Dropdown */}
        <div className="input-control category">
          <select
            required
            value={category}
            name="category"
            id="category"
            onChange={handleInput("category")}
          >
            <option value="" disabled>
              Category
            </option>
            <option value="salary">Salary</option>
            <option value="freelancing">Freelancing</option>
            <option value="investments">Investments</option>
            <option value="stocks">Stocks</option>
            <option value="bitcoin">Bitcoin</option>
            <option value="bank">Bank Transfer</option>
            <option value="youtube">YouTube</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="input-control">
        {/* Date Input */}
        <DatePicker
          id="date"
          placeholderText="Enter A Date"
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => {
            setInputState({ ...inputState, date: date });
          }}
        />
      </div>

      <div className="input-control">
        {/* Description Textarea */}
        <textarea
          name="description"
          value={description}
          placeholder="Add A Description"
          id="description"
          cols="30"
          rows="2"
          onChange={handleInput("description")}
        ></textarea>
      </div>

      <div className="submit-btn">
        {/* Submit Button */}
        <Button
          name={"Add Income"}
          icon={plus}
          bPad={".8rem 1.6rem"}
          bRad={"30px"}
          bg={"var(--color-accent"}
          color={"#fff"}
        />
      </div>
    </FormStyled>
  );
}
const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* 增加各行间距 */
  width: 100%;

  input,
  textarea,
  select {
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    padding: 0.8rem 1rem;
    border-radius: 5px;
    border: 2px solid #e0e0e0;
    background-color: #f9f9f9;
    outline: none;
    color: #333;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    &::placeholder {
      color: #999;
    }
  }

  .input-control {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .amount_and_select {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    .amount,
    .category {
      width: 48%; /* 确保两部分均分同一行 */
    }

    input {
      width: 100%;
    }

    select {
      width: 100%;
    }
  }

  .submit-btn {
    display: flex;
    justify-content: center;

    button {
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      &:hover {
        background-color: var(--color-green);
      }
    }
  }
`;
export default Form;
