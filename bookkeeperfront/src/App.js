import React, { useState, useMemo } from "react";
import styled from "styled-components";
import bg from "./img/background.jpg";
import { MainLayout } from "./styles/layouts";
import Orb from "./components/button/Orb/Orb";
import Navigation from "./components/Navigation/Navigation";
import { dashboard } from "./utils/icons";

function App() {
  // useMemo 以避免每次切换tab导致Orb重启
  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);
  //1 is the default selected item in dashboard
  const [active, setActive] = useState(1);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
    }
  };

  return (
    <AppStyled bg={bg} className="App">
      {/* 这里如果插入组件，则写<Orb/>,如果插入表达式，则写{orbMemo}
      当你使用 useMemo 或者任何其他 JavaScript 变量保存组件时，orbMemo 不再是一个 React 组件的定义，而是一个普通的 JavaScript 变量，它的值是 Orb 组件的 JSX 表达式。解释：
      在 JSX 中，{} 是用来插入 JavaScript 表达式的地方。如果某个变量 orbMemo 的值是一个 JSX 结构（比如 <Orb />），那么需要通过 {orbMemo} 插入到 JSX 中。 */}
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>{displayData}</main>
      </MainLayout>
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
  main {
    // 填满剩余空间
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &：：-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
