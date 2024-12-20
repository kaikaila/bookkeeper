import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/globalContext";
import Button from "../Button/Button";
import { plus } from "../../utils/icons";

function ExpenseForm() {
  const { addExpense, error, setError } = useGlobalContext();
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
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(inputState);
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });
  };

  return (
    <ExpenseFormStyled onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      <div className="form-container">
        <div className="input-control">
          <input
            type="text"
            value={title}
            name={"title"}
            placeholder="Expense Title"
            onChange={handleInput("title")}
          />
        </div>
        <div className="input-control">
          <input
            value={amount}
            type="text"
            name={"amount"}
            placeholder={"Expense Amount"}
            onChange={handleInput("amount")}
          />
        </div>
        <div className="input-control">
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
        <div className="selects input-control">
          <select
            required
            value={category}
            name="category"
            id="category"
            onChange={handleInput("category")}
          >
            <option value="" disabled>
              Select Option
            </option>
            <option value="education">Education</option>
            <option value="groceries">Groceries</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
            <option value="takeaways">Takeaways</option>
            <option value="clothing">Clothing</option>
            <option value="travelling">Travelling</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="input-control">
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
          <Button
            name={"Add Expense"}
            icon={plus}
            bPad={".8rem 1.6rem"}
            bRad={"30px"}
            bg={"var(--color-accent"}
            color={"#fff"}
          />
        </div>
      </div>
    </ExpenseFormStyled>
  );
}

const ExpenseFormStyled = styled.form`
  .form-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem; /* 增加各行间距 */
    width: 100%;
    padding: 20px;
    border: 2px solid #fff;
    border-radius: 20px;
    // background: #fcf6f9;
    background-opacity: 70%;
  }

  input,
  textarea,
  select {
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    background-color: #f9f9f9;
    outline: none;
    color: #333;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border: 2px solid #fff;
    background: transparent;
    resize: none;

    color: rgba(34, 34, 96, 0.9);
    &::placeholder {
      color: rgba(34, 34, 96, 0.4);
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
      color: rgba(34, 34, 96, 0.4);
      &:focus,
      &:active {
        color: rgba(34, 34, 96, 1);
      }
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
export default ExpenseForm;
