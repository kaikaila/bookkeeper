import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/layouts";

function Incomes() {
  return (
    <IncomesStyled>
      <InnerLayout>
        <h1>Incomes</h1>
      </InnerLayout>
    </IncomesStyled>
  );
}
const IncomesStyled = styled.div``;
export default Incomes;
