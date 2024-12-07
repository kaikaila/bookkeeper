import React, { createContext, useState } from "react";
import axios from "axios";
const BASE_URL = "http://localhost:3010/api/v1";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};
