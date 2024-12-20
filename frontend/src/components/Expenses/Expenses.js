import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/layouts";
import { useGlobalContext } from "../../context/globalContext";
import ReceiptURLInput from "../ReceiptURLInput/ReceiptURLInput";
import ExpenseForm from "../Expenses/ExpenseForm";
import IncomeItem from "../IncomeItem/IncomeItem";

function Expenses() {
  const {
    apiBaseUrl,
    addExpense,
    expenses,
    getExpenses,
    deleteExpense,
    totalExpenses,
  } = useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, []);

  // parse the json from veryFi and fill them into the form
  const parseReceipt = async (imageUrl) => {
    try {
      console.log(apiBaseUrl);
      const response = await fetch(`${apiBaseUrl}parse-receipt`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imageUrl }),
      });
      const data = await response.json();

      // 将解析的数据作为新的支出添加
      addExpense({
        title: data.vendor?.name || "Unknown Vendor",
        amount: data.total || 0,
        date: data.bill_date || new Date(),
        category: data.items?.[0]?.name || "Misc",
        description: "Parsed from receipt",
        type: "expense",
      });
    } catch (error) {
      console.error("Error parsing receipt:", error);
    }
  };

  return (
    <ExpensesStyled>
      <InnerLayout>
        <div className="first-line">
          <h1>Expenses</h1>
          <h2 className="total-income">
            Total: <span>${totalExpenses()}</span>
          </h2>
        </div>

        <div className="income-content">
          <div className="form-container">
            <ReceiptURLInput onParseReceipt={parseReceipt} />
            <ExpenseForm />
          </div>
          <div className="incomes">
            {expenses.map((income) => {
              const { _id, title, amount, date, category, description, type } =
                income;
              console.log(income);
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
                  deleteItem={deleteExpense}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpensesStyled>
  );
}
const ExpensesStyled = styled.div`
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
export default Expenses;
