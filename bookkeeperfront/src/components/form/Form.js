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
        {/* emphasized：name和onchange内填写的字段名必须一致 */}
        <input
          type="text"
          value={title}
          name={"title"}
          placeholder="Income Title"
          onChange={handleInput("title")}
        />
      </div>
      <div className="amount_and_select">
        <div className="input-control" id="amount">
          <input
            type="text"
            value={amount}
            name={"amount"}
            placeholder="Income Amount"
            onChange={handleInput("amount")}
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
              Category
            </option>
            <option value="salary">Salary</option>
            <option value="freelancing">Freelancing</option>
            <option value="investments">Investiments</option>
            <option value="stocks">Stocks</option>
            <option value="bitcoin">Bitcoin</option>
            <option value="bank">Bank Transfer</option>
            <option value="youtube">Youtube</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div className="input-control" id="date">
        <DatePicker
          id="date"
          // placeholderText
          placeholderText="Enter A Date"
          selected={date}
          // attention: MM in capital letters
          dateFormat="dd/MM/yyyy"
          onChange={(date) => {
            setInputState({ ...inputState, date: date });
          }}
        />
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
  align-items: center;
  gap: 1rem;

  input,
  textarea,
  select {
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder {
      color: rgba(34, 34, 96, 0.4);
    }
  }

  .input-control {
    input {
      width: 100%;
    }
  }

  .amount_and_select {
    display: flex;
    justify-content: space-between;
  }

  #amount {
    display: inline-flex;
    margin-right: 1rem;
  }

  .selects {
    display: inline-flex;
    justify-content: flex-end;
    select {
      color: rgba(34, 34, 96, 0.4);
      &:focus,
      &:active {
        color: rgba(34, 34, 96, 1);
      }
    }
  }
  .submit-btn {
    button {
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      &:hover {
        background: var(--color-green) !important;
      }
    }
  }
`;
export default Form;
