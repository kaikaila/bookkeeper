import styled from "styled-components";
import bg from "./img/background.jpg";
import { MainLayout } from "./styles/layouts";
import Orb from "./components/button/Orb/Orb";

function App() {
  return (
    <AppStyled bg={bg} className="App">
      <Orb />
      <MainLayout>
        <h1>Hello</h1>
      </MainLayout>
      <main></main>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height = 100vh;
  // 下文这样定义的bg 图片的方式不能把图片置底
  // background-image:url(bg)
  background-mage:url(${(props) => props.bg});
  position:relative;
   `;

export default App;
