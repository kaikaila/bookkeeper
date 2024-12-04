import { GlobalStyle } from "./styles/GlobalStyle";
import styled from "styled-components";
import bg from "./img/background.jpg";

function App() {
  const AppStyled = styled.div`
  height = 100vh;
  // 下文这样定义的bg 图片的方式不能把图片置底
  // background-image:url(bg)
  background-mage:url(${(props) => props.bg});
  position:relative;
   `;

  return (
    <AppStyled bg={bg} className="App">
      <main></main>
    </AppStyled>
  );
}

export default App;
