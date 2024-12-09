import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker";
import { useGlobalContext } from "../../context/globalContext";

function Form() {
  const { addIncome } = useGlobalContext;
  // validate the input
  const [inputState, setInputSate] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = (name) => (e) => {
    setInputSate({ ...inputState, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(inputState);
  };
  return (
    <FormStyled onSubmit={handleSubmit}>
      <div className="input-control">
        {/* emphasized：name和onchange内填写的字段名必须一致 */}
        <input
          type="text"
          value={title}
          name={"title"}
          placeholder="Salary"
          onChange={handleInput("title")}
        />
      </div>
      <div className="input-control">
        <input
          type="text"
          value={amount}
          name={"amount"}
          placeholder="999"
          onChange={handleInput("amount")}
        />
      </div>
      <div className="input-control">
        <DatePicker
          id="date"
          placeholder="Enter A Date"
          selected={date}
          dateFormat="dd/mm/yyyy "
          onChange={handleInput("date")}
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

      <div className="input-control">
        <input
          type="text"
          value={description}
          name={"description"}
          placeholder="Describe it"
          onChange={(date) => {
            setInputSate({ ...inputState, date: date });
          }}
        />
      </div>
      <div className="submit-btn">
        <button>Add Income</button>
      </div>
    </FormStyled>
  );
}
const FormStyled = styled.form``;
export default Form;
