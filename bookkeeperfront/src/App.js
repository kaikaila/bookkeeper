import React, { useState } from "react";
import styled from "styled-components";
import bg from "./img/background.jpg";
import { MainLayout } from "./styles/layouts";
import Orb from "./components/button/Orb/Orb";
import Navigation from "./components/Navigation/Navigation";

function App() {
  //1 is the default selected item in dashboard
  const [active, setActive] = useState(1);

  return (
    <AppStyled bg={bg} className="App">
      <Orb />
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
      </MainLayout>
      <main></main>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  //这里语法不用能=，用：
  height: 100vh;
  // 下文这样定义的bg 图片的方式不能把图片置底
  // background-image:url(bg)
  background-image: url(${(props) => props.bg});
  position: relative;
`;

export default App;
