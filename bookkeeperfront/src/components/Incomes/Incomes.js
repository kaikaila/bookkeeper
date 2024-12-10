import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/layouts";
import { useGlobalContext } from "../../context/globalContext";
import Form from "../Form/Form";
import IncomeItem from "../IncomeItem/IncomeItem";

function Incomes() {
  const { addIncome, incomes, getIncomes, deleteIncome, totalIncome } =
    useGlobalContext();
  useEffect(() => {
    getIncomes();
  }, []);
  return (
    <IncomesStyled>
      <InnerLayout>
        <div className="first-line">
          <h1>Incomes</h1>
          <h1 className="total-income">
            Total: <span>${totalIncome()}</span>
          </h1>
        </div>
        <div className="income-content">
          <div className="form-container">
            <Form />
          </div>
          <div className="incomes">
            {incomes.map((income) => {
              const { _id, title, amount, date, category, description, type } =
                income;
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteIncome}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomesStyled>
  );
}
const IncomesStyled = styled.div`
  display: flex;
  overflow: auto;
  .first-line {
    display: flex;
    align-contents: center;
    justify-content: space-between;
    margin: 0.5rem 0;
  }

  h1 {
    display: inline;
  }

  .total-income {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    //
    font-size: 2em;
    gap: 0.5rem;
    span {
      font-size: 2.4rem;
      font-weight: 800;
      color: var(--color-green);
    }
  }

  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
  }
`;
export default Incomes;
